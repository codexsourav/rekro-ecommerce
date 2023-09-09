
import { NextResponse } from 'next/server';
import { formatDate, verifyByJwtAdmin } from '../utills';
import Products from '@/Database/schema/productSchema';
import validator from 'validator'

export async function GET(request) {
    // collection
    try {
        const product = await Products.find({}, { desc: 0, sortdesc: 0 });
        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: "Sumthing Error" });
    }
}

export async function POST(request) {
    const { title, price, discount, images, size, color, stock, desc, sortdesc, sellprice, productcollection } = await request.json();

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
    } else if (typeof productcollection === 'undefined' || validator.isEmpty(productcollection)) {
        return NextResponse.json({ error: "Please Enter a Product collection" }, { status: 400 });
    }

    // If all validations pass, you can proceed with saving the product or performing other actions.


    // ADD the product 
    const today = new Date();
    const date = formatDate(today);
    try {
        const products = new Products({ title, price, discount, images, size, stock, date, color, desc, productcollection, sortdesc, sellprice });
        const dbRes = await products.save();
        return NextResponse.json({ ...dbRes._doc, "add": true }, { status: 201 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Sumthing Error" }, { status: 400 });
    }
}
