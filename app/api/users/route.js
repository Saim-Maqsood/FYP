"use server"
import connect from "@/lib/dbConnect";
import userModel from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request){
    try {
        await connect()
        const {password,email} = await request.json()
        const newUser = new userModel({password,email})
        await newUser.save()
        return NextResponse.json(newUser,{status:200})
    } catch (error) {
        console.log(error)
    }
}