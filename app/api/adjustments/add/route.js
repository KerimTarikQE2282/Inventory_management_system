import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request){
    try {
        var { AddStockQty,WareHouseId,ItemId,AddingInventoryNotes,ReferenceNumber}=await request.json();
        AddStockQty=parseInt(AddStockQty)
        const adjustments=await db.AddStockAdjustments.create({
            data:{
            AddStockQty,WareHouseId:'6696939217d743e2ef471155',AddingInventoryNotes,ReferenceNumber,itemid:'66980f33f7a9b93cd26c50d7'
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