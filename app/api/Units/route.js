import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Destructure the correct variable names from the request body
        const { UnitName, UnitAbreviation } = await request.json();

        // Log the parsed JSON correctly
        console.log({ UnitName, UnitAbreviation });

        const newUnit = { UnitName, UnitAbreviation } ;
        
        // Log the new category object
        
        return NextResponse.json(newUnit);  
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
