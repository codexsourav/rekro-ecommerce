import Collection from '@/Database/schema/collectionSchema';
import { NextResponse } from 'next/server';
import { verifyByJwtAdmin } from '../../utills';
import Products from '@/Database/schema/productSchema';




export async function GET(request, { params }) {
    // collection
    try {
        const product = await Products.find({ productcollection: params.id }, { desc: 0, sortdesc: 0 });
        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: "Sumthing Error" });
    }
}

export async function PUT(request, { params }) {
    try {
        const { title, image } = await request.json();
        // Verify if the user is an admin
        const authorization = await verifyByJwtAdmin();
        if (authorization === false) {
            return NextResponse.json({ error: "Invalid User", authorized: false }, { status: 401 });
        }
        if (!title || !title.trim()) {
            // Handle empty or null title, e.g., show an error message
            return NextResponse.json({ error: "Add A title" });
        } else if (!image || !image.trim()) {
            // Handle empty or null image, e.g., show an error message
            return NextResponse.json({ error: "Add Valid Image Url" });
        }
        const list = await Collection.findOneAndUpdate({ _id: params.id }, { $set: { title, image } });
        await Products.updateMany({ productcollection: list.title }, { $set: { productcollection: title } })
        return NextResponse.json({ ...list, update: true })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Sumthing Error" }, { status: 400 });
    }
}

export async function DELETE(request, { params }) {
    try {
        // Verify if the user is an admin
        const authorization = await verifyByJwtAdmin();
        if (authorization === false) {
            return NextResponse.json({ error: "Invalid User", authorized: false }, { status: 401 });
        }
        const list = await Collection.findOneAndDelete({ _id: params.id });
        await Products.deleteMany({ productcollection: list.title })

        return NextResponse.json({ ...list, delete: true })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Sumthing Error" }, { status: 400 });
    }

}