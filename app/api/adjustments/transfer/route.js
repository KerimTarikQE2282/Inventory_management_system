import { NextResponse } from "next/server";
export async function POST(request){
    try {
        const {TransferStockQty,SendingBranchId,RecievingBanchId,Notes}=await request.json();
        const adjustments={TransferStockQty,SendingBranchId,RecievingBanchId,Notes}
        console.log(adjustments);
        return NextResponse.json(adjustments);
        
    } catch (error) {
        console.log(error)
    }
}