import Collection from '@/Database/schema/collectionSchema';
import { NextResponse } from 'next/server';
import { verifyByJwtAdmin } from '../utills';
export async function GET(request) {
    try {
        const list = await Collection.find();
        return NextResponse.json(list)
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Sumthing Error" }, { status: 400 });
    }
}

export async function POST(request) {
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
        const list = new Collection({ title, image });
        await list.save();
        return NextResponse.json({ add: true })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Sumthing Error" }, { status: 400 });
    }
}

