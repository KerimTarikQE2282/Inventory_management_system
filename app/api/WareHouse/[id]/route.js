import { NextResponse } from "next/server";
import db from "@/lib/db";
import { data } from "autoprefixer";

export async function GET (request,{params:{id}}){
    try {
        
    const WareHouse=await db.wareHouse.findUnique({
        where:{
            id
        }
    })
    return NextResponse.json(WareHouse);
    } catch (error) {
         console.log(error);
            return NextResponse.json(
                {
                    error:error,
                    message: "Failed to Fetch  the WareHouse"
                },
                { status: 500 }
            ); 
    }
    }




    export async function PUT(request, { params }) {
        try {
            const  data  = await request.json();
         console.log(data)
    
            const Warehouse = await db.wareHouse.update({
                where: {
                    id: params.id
                },
                data: {
             WareHouseType:  data.WareHouseType ,            
            WareHouseName:data.WareHouseName    ,     
            WareHouseLocation:data.WareHouseLocation  ,        
         WareHouseDescription:data.WareHouseDescription
                },
            });
    
            console.log('Updated Warehouse:', Warehouse);
            return NextResponse.json(Warehouse);
        } catch (error) {
            console.log('Error updating Warehouse:', error);
            return NextResponse.json(
                {
                    error: error.message,
                    message: "Failed to update the Warehouse"
                },
                { status: 500 }
            );
        }
    }
    
    