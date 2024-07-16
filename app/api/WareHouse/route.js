import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
    try {
        // Destructure the correct variable names from the request body
        const { WareHouseName, WareHouseLocation,WareHouseDescription,WareHouseType } = await request.json();

        // Log the parsed JSON correctly
        console.log({ WareHouseName, WareHouseLocation,WareHouseDescription,WareHouseType });

        const AddedWareHouse =await db.wareHouse.create({
            data:{
                WareHouseName,
                WareHouseLocation,
                WareHouseDescription,
                WareHouseType
            }
        })
        // Log the new category object
        console.log(AddedWareHouse);

        return NextResponse.json(AddedWareHouse);  
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
