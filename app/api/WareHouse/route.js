import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        // Destructure the correct variable names from the request body
        const { WareHouseName, WareHouseLocation,WareHouseDescription,WareHouseType } = await request.json();

        // Log the parsed JSON correctly
        console.log({ WareHouseName, WareHouseLocation,WareHouseDescription,WareHouseType });

        const newWareHouse = { WareHouseName, WareHouseLocation,WareHouseDescription,WareHouseType  } ;
        
        // Log the new category object
        console.log(newWareHouse);

        return NextResponse.json(newWareHouse);  
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
