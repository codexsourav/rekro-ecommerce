
import Orders from '@/Database/schema/orderSchema';
import { NextResponse } from 'next/server';
import { verifyByJwtAdmin } from '../../utills';



export async function GET(request, { params }) {

    try {
        // Verify if the user is an admin
        const authorization = await verifyByJwtAdmin();
        if (authorization === false) {
            return NextResponse.json({ error: "Invalid User", authorized: false }, { status: 401 });
        }
        const data = await Orders.find({ orderstatus: params.type });
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ error: "Product Not Found" })
    }
}