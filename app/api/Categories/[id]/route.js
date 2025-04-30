import { NextResponse } from "next/server";
import db from "@/lib/db";
import { data } from "autoprefixer";

export async function GET (request,{params:{id}}){
    try {
        
    const Category=await db.category.findUnique({
        where:{
            id
        }
    })
    return NextResponse.json(Category);
    } catch (error) {
         console.log(error);
            return NextResponse.json(
                {
                    error:error,
                    message: "Failed to Fetch  the Categories"
                },
                { status: 500 }
            ); 
    }
    }




    export async function PUT(request, { params }) {
        try {
            const  data  = await request.json();
            console.log('from category end point ',data)
    
            const category = await db.category.update({
                where: {
                    id: params.id
                },
                data: {
                    title: data.CategoryName,
                    description:data.CategoryDescription
                },
            });
    
            console.log('Updated category:', category);
            return NextResponse.json(category);
        } catch (error) {
            console.log('Error updating category:', error);
            return NextResponse.json(
                {
                    error: error.message,
                    message: "Failed to update the category"
                },
                { status: 500 }
            );
        }
    }
    
    