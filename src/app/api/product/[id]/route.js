import validator from 'validator'
import { NextResponse } from 'next/server';
import Products from '@/Database/schema/productSchema';
import { verifyByJwt, verifyByJwtAdmin } from '../../utills';
import Reviews from '@/Database/schema/reviewSchema';

export async function GET(request, { params }) {
    const products = Products.findOne({ _id: params.id });
    const review = Reviews.find({ product_id: params.id }, { email: 0 });
    const fretproducts = Products.find({ featured: true }, { desc: 0 }).sort({ stars: -1 }).limit(10);

    try {
        const responsedata = await Promise.all([products, review, fretproducts]);
        return NextResponse.json({ product: responsedata[0], reviews: responsedata[1], featured: responsedata[2] });
    } catch (error) {
        return NextResponse.json({ error: "Product Not Found" })
    }
}

export async function PUT(request, { params }) {
    const { title, price, discount, images, size, color, stock, desc, sortdesc, sellprice, featured } = await request.json();

    // Verify if the user is an admin
    const authorization = await verifyByJwtAdmin();
    if (authorization === false) {
        return NextResponse.json({ error: "Invalid User", authorized: false }, { status: 401 });
    }

    if (validator.isEmpty(title)) {
        return NextResponse.json({ error: "Please Enter Product Title" }, { status: 400 });
    } else if (validator.isEmpty(sortdesc)) {
        return NextResponse.json({ error: "Please Enter Product Sort Description" }, { status: 400 });
    } else if (validator.isEmpty(desc)) {
        return NextResponse.json({ error: "Please Enter Product Description" }, { status: 400 });
    } else if (desc.trim().length < 150) {
        return NextResponse.json({ error: "Description must have at least 150 characters" }, { status: 400 });
    } else if (!price || price <= 0) {
        return NextResponse.json({ error: "Invalid Price" }, { status: 400 });
    } else if (!images || images.length < 2) {
        return NextResponse.json({ error: "At least 2 images required" }, { status: 400 });
    } else if (!stock || stock <= 0 || !sellprice || sellprice <= 0) {
        return NextResponse.json({ error: "Invalid Stock or Sell Price" }, { status: 400 });
    }

    // If all validations pass, you can proceed with saving the product or performing other actions.


    // Update the product 

    try {
        const products = await Products.updateOne({ _id: params.id }, { $set: { title, featured, price, discount, images, size, stock, color, desc, sortdesc, sellprice } });

        return NextResponse.json({ ...products._doc, "add": true }, { status: 201 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Sumthing Error" }, { status: 400 });
    }
}

export async function DELETE(request, { params }) {
    // Verify if the user is an admin
    const authorization = await verifyByJwtAdmin();
    if (authorization === false) {
        return NextResponse.json({ error: "Invalid User", authorized: false }, { status: 401 });
    }
    const products = Products.deleteOne({ _id: params.id });
    const review = Reviews.deleteMany({ product_id: params.id });
    try {
        const responsedata = await Promise.all([products, review]);
        return NextResponse.json({ ...responsedata, delete: true });
    } catch (error) {
        return NextResponse.json({ error: "Product Not Delete" })
    }
}