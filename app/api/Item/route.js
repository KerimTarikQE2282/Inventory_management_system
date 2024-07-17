import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        console.log('hello');
        // Destructure the correct variable names from the request body
         var { ItemName, ItemSKU, Category, ItemBarcode, ItemQuantity, Measurement, ItemCostPrice, ItemSellingPrice, Brand, ItemReorderPoint, WareHouse, ItemWeight, ItemDimensions, ItemTaxRate, ItemDescription, ItemNotes } = await request.json();

        // Log the parsed JSON correctly
        console.log({
            ItemName, ItemSKU, Category, ItemBarcode, ItemQuantity, Measurement, ItemCostPrice, ItemSellingPrice, Brand, ItemReorderPoint, WareHouse, ItemWeight, ItemDimensions, ItemTaxRate, ItemDescription, ItemNotes
        });
        ItemCostPrice=parseInt(ItemCostPrice)
        ItemSellingPrice=parseInt(ItemSellingPrice)
        ItemReorderPoint=parseInt(ItemReorderPoint)
        ItemWeight=parseInt(ItemWeight)
        ItemTaxRate=parseInt(ItemTaxRate)
        ItemQuantity=parseInt(ItemQuantity)
        const AddedItems = await db.item.create({
            data: {
               

title :ItemName  ,                 
description:ItemDescription   ,                            
 categoryId:'6696875a8212d69a17d385d0'  ,             
sku:ItemSKU        ,              
barcode:ItemBarcode ,                 
quantity:ItemQuantity ,                                   
unitId:'6697aad532bca774664acf33' ,                                     
brandId:'669690abe64c126353666139' ,                               
supplierid:'6697d793458ba5649ff0b048' ,              
costPrice:ItemCostPrice   ,            
sellingPrice:ItemSellingPrice  ,           
reorderPoint:ItemReorderPoint  ,           
location:'merkato',    //TODO fix this   ,           
imagesUrl:'ssssss'  ,   //TODO fix this            
weight:ItemWeight ,                  
dimensions:ItemDimensions,          
taxRate:ItemTaxRate,             
notes:ItemNotes,                

            }
        })
        
        // Log the new item object
        console.log(AddedItems);
        
        return NextResponse.json(AddedItems);  
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
