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
          
    
            const Supplier = await db.supplier.update({
                where: {
                    id: params.id
                },
                data: {
                    name: data.name,
                    phone: data.phone,
                    email:data.email,
                    address:data.address, 
                    contactPerson: data.contactPerson,
                    supplierCode:data.supplierCode,
                    PaymentTerms:data.PaymentTerms ,
                    taxID:data.taxID,
                    notes:data.notes ,
                    createdAt:data.createdAt ,
                    updatedAt: data.updatedAt,
                },
            });
    
            console.log('Updated Supplier:', Supplier);
            return NextResponse.json(Supplier);
        } catch (error) {
            console.log('Error updating brSupplierand:', error);
            return NextResponse.json(
                {
                    error: error.message,
                    message: "Failed to update the Supplier"
                },
                { status: 500 }
            );
        }
    }
    
    