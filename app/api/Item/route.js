import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        console.log('hello');
        // Destructure the correct variable names from the request body
         const { ItemName, ItemSKU, Category, ItemBarcode, ItemQuantity, Measurement, ItemCostPrice, ItemSellingPrice, Brand, ItemReorderPoint, WareHouse, ItemWeight, ItemDimensions, ItemTaxRate, ItemDescription, ItemNotes } = await request.json();

        // Log the parsed JSON correctly
        console.log({
            ItemName, ItemSKU, Category, ItemBarcode, ItemQuantity, Measurement, ItemCostPrice, ItemSellingPrice, Brand, ItemReorderPoint, WareHouse, ItemWeight, ItemDimensions, ItemTaxRate, ItemDescription, ItemNotes
        });

        const newItem = {
            ItemName, ItemSKU, Category, ItemBarcode, ItemQuantity, Measurement, ItemCostPrice, ItemSellingPrice, Brand, ItemReorderPoint, WareHouse, ItemWeight, ItemDimensions, ItemTaxRate, ItemDescription, ItemNotes
        };
        
        // Log the new item object
        console.log(newItem);
        
        return NextResponse.json(newItem);  
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create the item"
            },
            { status: 500 }
        ); 
    }
}
