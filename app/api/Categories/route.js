import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Destructure the correct variable names from the request body
        const { CategoryName, CategoryDescription } = await request.json();

        // Log the parsed JSON correctly
        console.log({ CategoryName, CategoryDescription });

        const newCategory = { CategoryName, CategoryDescription } ;
        
        // Log the new category object
        console.log(newCategory);

        return NextResponse.json(newCategory);  
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
