import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Destructure the correct variable names from the request body
        const { BrandName } = await request.json();

        // Log the parsed JSON correctly
        console.log({ BrandName });

        const newBrand = { BrandName } ;
        
        // Log the new category object
        
        return NextResponse.json(newBrand);  
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
