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
    
            const brand = await db.brands.update({
                where: {
                    id: params.id
                },
                data: {
                    
                },
            });
    
            console.log('Updated brand:', brand);
            return NextResponse.json(brand);
        } catch (error) {
            console.log('Error updating brand:', error);
            return NextResponse.json(
                {
                    error: error.message,
                    message: "Failed to update the brand"
                },
                { status: 500 }
            );
        }
    }
    
    