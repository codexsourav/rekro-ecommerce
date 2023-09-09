import Products from "@/Database/schema/productSchema";
import Reviews from "@/Database/schema/reviewSchema";
import { formatDate, verifyByJwt } from "@/app/api/utills";
import { NextResponse } from "next/server";
import validator from 'validator'


export async function GET(request, { params }) {
    try {
        const review = await Reviews.find({ product_id: params.id });
        return NextResponse.json(review)
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Sumthing Error" });
    }
}

export async function POST(request, { params }) {

    const { name, star, review, email } = await request.json();
    const today = new Date();
    const date = formatDate(today);

    // Validator for All Inputs
    if (!name || validator.isEmpty(name.trim())) {
        return NextResponse.json({ error: "Please Enter Your Name" });
    } else if (!star || star < 1 || star > 5) {
        return NextResponse.json({ error: "Please Give a Valid Star Rating (1-5)" });
    } else if (!review || validator.isEmpty(review.trim())) {
        return NextResponse.json({ error: "Please Write A Review" });
    } else if (!email || validator.isEmpty(email.trim())) {
        return NextResponse.json({ error: "Please Enter Your Email" });
    } else if (!validator.isEmail(email.trim())) {
        return NextResponse.json({ error: "Please Enter A Valid Email" });
    }

    const newreview = new Reviews({ product_id: params.id, name, date, star, review, email });

    try {
        const saveReview = await newreview.save();
        const rateingresponse = await Reviews.aggregate([
            {
                $group: {
                    _id: null,
                    total: {
                        $sum: "$star"
                    },
                    sum: {
                        $sum: 1
                    }
                }
            }
        ]);
        const score = rateingresponse[0];
        const newratingscore = Math.round(score.total / score.sum);
        await Products.updateOne({ _id: params.id }, { $set: { stars: newratingscore } });
        return NextResponse.json({ ...saveReview._doc, add: true })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Sumthing Error" });
    }
}



export async function DELETE(request, { params }) {
    const authorization = await verifyByJwt();
    if (authorization == false) {
        return NextResponse.json({ error: "Invalid User", authorized: false }, { status: 401 });
    }
    try {
        const deleteReview = await Reviews.deleteOne({ _id: params.id });
        return NextResponse.json({ ...deleteReview, delete: true })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Sumthing Error" });
    }
}