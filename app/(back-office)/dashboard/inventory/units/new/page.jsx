"use client"
import { useForm } from "react-hook-form";
import React from 'react';
import FormHeader from '../../InventoryComponents/FormHeaders';
import TextInput from "@/Components/FormInputs/TextInput";
import toast from "react-hot-toast";
import SubumitButton from "@/Components/FormInputs/SubumitButton";
import { makePOSTApiRequest } from "@/lib/apiRequest";

export default function NewUnit() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading,setLoading]=React.useState(false)

  async function onSubmit(data){
    
     makePOSTApiRequest('Units',setLoading,data,'Units')
  }
  return (
    <div>
      {/* { header } */}
      <FormHeader title="New Unit" link={'#'} />
      {/* { Form } */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
         <TextInput label="Unit Name" name="UnitName"  type="text" width='full'   register={register}  errors={errors}/>
        
         <TextInput label="Unit Abreviation" name="UnitAbreviation"  type="text" width='full'   register={register}  errors={errors}/>

        
        
        



        </div>
       <SubumitButton title="New Unit" isLoading={loading}/>

      </form>
    </div>
  )
}
