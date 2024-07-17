import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
    try {
        // Destructure the correct variable names from the request body
        const { UnitName, UnitAbreviation } = await request.json();

        // Log the parsed JSON correctly
        

        const AddedUnit =await db.units.create({
            data:{
                UnitName,
                UnitAbreviation
            }
        })
        
        // Log the new category object
        console.log(AddedUnit)
        return NextResponse.json(AddedUnit);  
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