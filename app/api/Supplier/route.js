import { NextResponse } from "next/server";
import db from "@/lib/db";

export async function POST(request) {
    try {
        // Destructure the correct variable names from the request body
        const { 
            name,
            phone,
            email,
            address,
            contactPerson,
            supplierCode,
            taxID,
            PaymentTerms,
            notes,
         } = await request.json();

        // Log the parsed JSON correctly
        console.log({ 
            name,
            phone,
            email,
            address,
            contactPerson,
            supplierCode,
            taxID,
            paymentTerms:PaymentTerms,
            notes,
         });

        const AddedSuppliers=await db.supplier.create({
            data:{
                name,
                phone,
                email,
                address,
                contactPerson,
                supplierCode,
                taxID,
                PaymentTerms,
                notes,
            }
        })
        // Log the new category object
        console.log(AddedSuppliers);
        
        // Log the new category object
        
        return NextResponse.json(AddedSuppliers);  
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            {
                error,
                message: "Failed to create the Supplier"
            },
            { status: 500 }
        ); 
    }
}
