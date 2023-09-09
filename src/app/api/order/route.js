import Orders from "@/Database/schema/orderSchema";
import { NextResponse } from "next/server";
import { verifyByJwt } from "../utills";

export async function POST(request) {
    try {
        const data = await request.json();
        const authorization = await verifyByJwt();
        if (authorization === false) {
            return NextResponse.json({ error: "Invalid User", authorized: false }, { status: 401 });
        }

        const neworder = data.map((e, i) => {
            return {
                ...e,
                user_id: authorization,
            }
        });

        const order = await Orders.insertMany([...neworder]);

        return NextResponse.json({ message: "Order Placed successfully" });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Something went wrong" });
    }
}
