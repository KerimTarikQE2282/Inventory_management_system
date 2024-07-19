import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request){
    try {
        var { AddStockQty,WareHouseId,ItemId,AddingInventoryNotes,ReferenceNumber}=await request.json();
        AddStockQty=parseInt(AddStockQty)
        const adjustments=await db.AddStockAdjustments.create({
            data:{
            AddStockQty,WareHouseId:'6696939217d743e2ef471155',AddingInventoryNotes,ReferenceNumber,itemid:'669a79f3c3647868aadfbccd' 
        }});      
        console.log(adjustments);
        return NextResponse.json(adjustments);
        
    } catch (error) {
        console.log(error)
        return NextResponse.json(
            {
                error,
                message: "Failed to Add Adjustment"
            },
            { status: 500 }
        )
    }
}


export async function GET (request){
    try {
        
    const AddStockAdjustments=await db.AddStockAdjustments.findMany({
        orderBy:{
            createdAt:'desc' //gets the latest Category
        },
        include:{
            item:true
        }
    })
    return NextResponse.json(AddStockAdjustments);
    } catch (error) {
         console.log(error);
            return NextResponse.json(
                {
                    error,
                    message: "Failed to Fetch  the Added Stock Adjustments"
                },
                { status: 500 }
            ); 
    }
    }