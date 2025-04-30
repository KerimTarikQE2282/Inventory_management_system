import { NextResponse } from "next/server";
import db from "@/lib/db";
import { data } from "autoprefixer";

export async function GET (request,{params:{id}}){
    try {
        
    const Unit=await db.units.findUnique({
        where:{
            id
        }
    })
    return NextResponse.json(Unit);
    } catch (error) {
         console.log(error);
            return NextResponse.json(
                {
                    error:error,
                    message: "Failed to Fetch  the Unit"
                },
                { status: 500 }
            ); 
    }
    }




    export async function PUT(request, { params }) {
        try {
            const  data  = await request.json();
       
    
            const Unit = await db.units.update({
                where: {
                    id: params.id
                },
                data: {
                    UnitName: data.UnitName,
                    UnitAbreviation:data.UnitAbreviation
                },
            });
    
            console.log('Updated Unit:', Unit);
            return NextResponse.json(Unit);
        } catch (error) {
            console.log('Error updating brand:', error);
            return NextResponse.json(
                {
                    error: error.message,
                    message: "Failed to update the Unit"
                },
                { status: 500 }
            );
        }
    }
    
    