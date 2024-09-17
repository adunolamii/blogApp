import { connectDB } from "@/lib/config/db";
import EmailModel from "@/lib/models/email.models";
import { NextResponse } from "next/server";

// CONNECT TO DB
const loadDB = async ()=>{
    await connectDB()
}
loadDB();

// POST REQ
export async function POST(request){
    const formData = await request.formData();
    const emailData = {
        email: `${formData.get('email')}`,

    }
    await EmailModel.create(emailData)
    return NextResponse.json({success: true, msg: "Email Subscribed"})
}

// GET REQ
export async function GET(request){
    const emails = await EmailModel.find({});
    return NextResponse.json({emails});
}

// DELETE REQ
export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get("id")
    await EmailModel.findByIdAndDelete(id)
    return NextResponse.json({success: true, msg: "Email Deleted"})
}