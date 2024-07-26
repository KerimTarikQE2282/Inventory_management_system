"use client"
import { useForm } from "react-hook-form";
import React from 'react';
import FormHeader from '../../InventoryComponents/FormHeaders';
import TextInput from "@/Components/FormInputs/TextInput";
import toast from "react-hot-toast";
import SubumitButton from "@/Components/FormInputs/SubumitButton";
import { makePOSTApiRequest, makePUTApiRequest } from "@/lib/apiRequest";
import { CloudCog } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NewBrand({initialData={},isupdate=false}) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading,setLoading]=React.useState(false)
  const router=useRouter()
  var done=false;
  async function onSubmit(data){
    
   

    if(isupdate){
      // Update Request 
      try {
       await makePUTApiRequest(`Brand/${initialData.id}`,setLoading,data,'Brand')
         done=true
         if(done==true){
          router.replace('/dashboard/inventory/Brands')
       }
      } catch (error) {
        console.log(error)
      }
     
    }
    else{
      makePOSTApiRequest('Brand',setLoading,data,'Brand')
    }

  }

  return (
    <div>
      {/* { header } */}
      <FormHeader title={`${isupdate?'Update Brand':'New Brand'}`} link={'/dashboard/inventory/Brands'} />
      {/* { Form } */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
         <TextInput label="Brand Name" name="BrandName"  type="text" width='full' defaultValue={initialData.BrandName}   register={register}  errors={errors}/>
        

        
        
        



        </div>
       <SubumitButton title={`${isupdate?'Updated Brand':'New Brand'}`} isLoading={loading}/>

      </form>
    </div>
  )
}
