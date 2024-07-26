import { NextResponse } from "next/server";
import db from "@/lib/db";
import { data } from "autoprefixer";

export async function GET (request,{params:{id}}){
    try {
        
    const Item=await db.item.findUnique({
        where:{
            id
        }
    })
    return NextResponse.json(Item);
    } catch (error) {
         console.log(error);
            return NextResponse.json(
                {
                    error:error,
                    message: "Failed to Fetch  the Item"
                },
                { status: 500 }
            ); 
    }
    }




    export async function PUT(request, { params }) {
        try {
            const  data  = await request.json();
           
    
            const Item = await db.item.update({
                where: {
                    id: params.id
                },
                data: {
                    title: data.title
                },
            });
    
            console.log('Updated item:', brand);
            return NextResponse.json(Item);
        } catch (error) {
            console.log('Error updating Item:', error);
            return NextResponse.json(
                {
                    error: error.message,
                    message: "Failed to update the Item"
                },
                { status: 500 }
            );
        }
    }
    
    