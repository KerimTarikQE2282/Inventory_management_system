import { NextResponse } from "next/server";
import db from "@/lib/db";
import { data } from "autoprefixer";

export async function GET (request,{params:{id}}){
    try {
        
    const Supplier=await db.supplier.findUnique({
        where:{
            id
        }
    })
    return NextResponse.json(Supplier);
    } catch (error) {
         console.log(error);
            return NextResponse.json(
                {
                    error:error,
                    message: "Failed to Fetch  the Supplier"
                },
                { status: 500 }
            ); 
    }
    }




    export async function PUT(request, { params }) {
        try {
            const  data  = await request.json();
            console.log('Received title:', data.BrandName);
            console.log('Received id:', params.id);
    
            const brand = await db.brands.update({
                where: {
                    id: params.id
                },
                data: {
                    BrandName: data.BrandName
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
    
    