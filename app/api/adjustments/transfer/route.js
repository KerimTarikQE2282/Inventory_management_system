import db from "@/lib/db";
import { NextResponse } from "next/server";
export async function POST(request){
    try {
        var { TransferStockQty,Notes,SendingBranchId,RecievingBanchId,ReferenceNumber}=await request.json();
        TransferStockQty=parseInt(TransferStockQty)
        const adjustments=await db.transferStockAdjustments.create({
            data:{
            TransferStockQty,
            Notes,
            SendingBranchId:'6696939217d743e2ef471155',
            RecievingBanchId:'6696939217d743e2ef471155',
            itemid:'66980f33f7a9b93cd26c50d7',
            ReferenceNumber
        }});      
        console.log(adjustments , 'from transfer');
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
        
    const transferStockAdjustments=await db.transferStockAdjustments.findMany({
        orderBy:{
            createdAt:'desc' //gets the latest Category
        }
    })
    return NextResponse.json(transferStockAdjustments);
    } catch (error) {
         console.log(error);
            return NextResponse.json(
                {
                    error,
                    message: "Failed to Fetch  the transfered Stock Adjustments"
                },
                { status: 500 }
            ); 
    }
    }