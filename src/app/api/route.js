 import '../../Database/db'
 import { NextResponse } from "next/server";

export async function GET(req){
   return  NextResponse.json({"name":"Sourav"},{status:200})
}

export async function POST(request){
   const payload =await request.json();
   console.log(payload);
   return  NextResponse.json(payload,{status:200})
}
