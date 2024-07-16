import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
    try {
        // Destructure the correct variable names from the request body
        const { BrandName } = await request.json();

        // Log the parsed JSON correctly
        console.log({ BrandName });

        const AddedBrand=await db.brands.create({
            data:{
                BrandName
            }
        })
        // Log the new category object
        console.log(AddedBrand);
        
        // Log the new category object
        
        return NextResponse.json(AddedBrand);  
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create the category"
            },
            { status: 500 }
        ); 
    }
}
