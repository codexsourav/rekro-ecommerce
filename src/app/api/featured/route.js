import Products from "@/Database/schema/productSchema";
import { NextResponse } from "next/server";


export async function GET(request) {
    try {
        const topproducts = await Products.find({ featured: true }, { desc: 0 }).sort({ stars: -1 }).limit(10);
        return NextResponse.json(topproducts ?? {});
    } catch (error) {
        return NextResponse.json({ error: "Sumthing Error" });
    }
}