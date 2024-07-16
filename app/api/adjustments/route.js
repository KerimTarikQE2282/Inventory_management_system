import { NextResponse } from "next/server";
export async function POST(request){
    try {
        const {TransferStockQty,SendingBranchId,RecievingBanchId}=await request.json();
        const adjustments={TransferStockQty,SendingBranchId,RecievingBanchId}
        console.log(adjustments);
        return NextResponse.json(adjustments);
        
    } catch (error) {
        console.log(error)
    }
}