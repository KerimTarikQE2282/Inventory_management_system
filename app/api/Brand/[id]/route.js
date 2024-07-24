import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function GET (request,{params:{id}}){
    try {
        
    const Brands=await db.brands.findUnique({
        where:{
            id
        }
    })
    return NextResponse.json(Brands);
    } catch (error) {
         console.log(error);
            return NextResponse.json(
                {
                    error:error,
                    message: "Failed to Fetch  the Brands"
                },
                { status: 500 }
            ); 
    }
    }