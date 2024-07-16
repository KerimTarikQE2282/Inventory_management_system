import { NextResponse } from "next/server";
export async function POST(request){
    try {
        const {AddStockQty,AddStockBranch,AddingInventoryNotes}=await request.json();
        const adjustments={AddStockQty,AddStockBranch,AddingInventoryNotes}
        console.log(adjustments);
        return NextResponse.json(adjustments);
        
    } catch (error) {
        console.log(error)
    }
}