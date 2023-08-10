import { NextRequest, NextResponse } from "next/server";
import { books } from "@/data";
export async function GET(request:NextRequest, params:{id:string}) {
    console.log("Params", params)
    return NextResponse.json({books})

}