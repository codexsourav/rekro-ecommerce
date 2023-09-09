import { NextResponse } from "next/server";
import { verifyByJwt } from "../utills";
import Address from "@/Database/schema/addressSchema";

export async function GET(request) {
   try {
      const authorization = await verifyByJwt();
      if (authorization === false) {
         return NextResponse.json({ error: "Invalid User", authorized: false }, { status: 401 });
      }
      const data = await Address.findOne({ user_id: authorization });
      return NextResponse.json(data ?? {});
   } catch (error) {
      return NextResponse.json({ error: "Sumthing Error" });
   }
}
export async function PUT(request) {
   try {
      // Verify user authorization using verifyByJwt()
      const authorization = await verifyByJwt();

      if (!authorization) {
         // Unauthorized user
         return NextResponse.json({ error: "Invalid User", authorized: false }, { status: 401 });
      }

      const {
         fname,
         lname,
         company,
         country,
         line1,
         line2,
         city,
         state,
         zipCode,
         email,
         phone
      } = await request.json();


      const findUser = await Address.findOne({ user_id: authorization });

      if (!findUser) {

         const newEntry = new Address({
            user_id: authorization,
            fname,
            lname,
            company,
            country,
            line1,
            line2,
            city,
            state,
            zipCode,
            email,
            phone
         });
         await newEntry.save();
      } else {
         const updatedAddress = await Address.findOneAndUpdate(
            { _id: findUser._id },
            {
               $set: {
                  user_id: authorization,
                  fname,
                  lname,
                  company,
                  country,
                  line1,
                  line2,
                  city,
                  state,
                  zipCode,
                  email,
                  phone
               }
            },
            { new: true }
         );
         if (!updatedAddress) {
            return NextResponse.json({ error: "Document not found" }, { status: 404 });
         }
      }


      return NextResponse.json({ update: true });

   } catch (error) {
      // Handle specific errors or log them
      console.error("Error:", error);
      return NextResponse.json({ error: "Something went wrong" });
   }
}
