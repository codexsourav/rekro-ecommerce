import User from "@/Database/schema/userSchema";
import { NextResponse } from "next/server";
import validator from 'validator';

export async function POST(request) {
    const { name, email, password } = await request.json();
    // validate is empty 
    if (!name || validator.isEmpty(name) && !email || validator.isEmpty(email) && !password || validator.isEmpty(password)) {
        return NextResponse.json({ "error": "Please Fill All Inputs" });
    }
    // chack email 
    if (!validator.isEmail(email)) {
        return NextResponse.json({ "error": "Invalid Email ID" });
    }
    // save Data On DataBase 

    const newUser = new User({
        name, email, password
    });

    try {
        const findEmail = await User.find({ email }, { email: 1 });
        if (findEmail != 0) {
            return NextResponse.json({ "error": "Email Id Arady Used" });
        }
        await newUser.save();
        return NextResponse.json({ "success": true });
    } catch (error) {
        return NextResponse.json({ "error": "Sumthing Want Wrong", "response": error });
    }
}
