import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Destructure the correct variable names from the request body
        const { CategoryName, CategoryDescription } = await request.json();

        // Log the parsed JSON correctly
        console.log({ CategoryName, CategoryDescription });

        const AddedCategory =await db.category.create({
            data:{ 
                title:CategoryName, 
                description:CategoryDescription }
        })  ;
        
        // Log the new category object
        console.log(AddedCategory);

        return NextResponse.json(AddedCategory);  
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
