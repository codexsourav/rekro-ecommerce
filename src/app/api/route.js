import Home from "@/Database/schema/homePageSchema";
import { NextResponse } from "next/server";
import { verifyByJwtAdmin } from "./utills";
import Products from "@/Database/schema/productSchema";

export async function GET(req) {
   try {
      const data = Home.findOne();
      const topproducts = Products.find({}, { desc: 0 }).sort({ sells: -1 }).limit(8);
      const newProducts = Products.find({}, { desc: 0 }).sort({ date: -1 }).limit(4);
      const fretproducts = Products.find({ featured: true }, { desc: 0 }).sort({ stars: -1 }).limit(10);

      const alldata = await Promise.all([data, topproducts, newProducts, fretproducts])

      return NextResponse.json({ home: alldata[0], top: alldata[1], new: alldata[2], featured: alldata[3] } ?? {});
   } catch (error) {
      return NextResponse.json({ error: "Sumthing Error" });
   }
}
export async function PUT(request) {
   try {
      const { id, heroimg, herotitle, herosubtitle, herolink, herolinktitle, firstcollection, secendcollection, thurdcollection, banner } = await request.json();

      // Verify if the user is an admin
      const authorization = await verifyByJwtAdmin();
      if (authorization === false) {
         return NextResponse.json({ error: "Invalid User", authorized: false }, { status: 401 });
      }

      // Validate the extracted properties if needed
      if (!heroimg.trim() || !herotitle.trim() || !herosubtitle.trim() || !herolink.trim() || !herolinktitle.trim()) {
         return NextResponse.json({ error: "Missing required fields for hero section" });
      }

      if (!firstcollection || !secendcollection || !thurdcollection || !banner) {
         return NextResponse.json({ error: "Missing required fields for one or more sections" });
      }

      if (id == null) {
         const newdata = new Home({ heroimg, herotitle, herosubtitle, herolink, herolinktitle, firstcollection, secendcollection, thurdcollection, banner });
         await newdata.save();
      } else {
         const updatedHome = await Home.findOneAndUpdate(
            { _id: id },
            { $set: { heroimg, herotitle, herosubtitle, herolink, herolinktitle, firstcollection, secendcollection, thurdcollection, banner } },
            { new: true } // Return the updated document
         );

         if (!updatedHome) {
            return NextResponse.json({ error: "Document not found" }, { status: 404 });
         }
      }

      return NextResponse.json({ update: true });
   } catch (error) {
      console.error("Error:", error);
      return NextResponse.json({ error: "Something went wrong" }, { status: 400 });
   }
}
