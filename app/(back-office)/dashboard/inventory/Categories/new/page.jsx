"use client"
import { useForm } from "react-hook-form";
import React from 'react';
import FormHeader from '../../InventoryComponents/FormHeaders';
import TextInput from "@/Components/FormInputs/TextInput";

import SubumitButton from "@/Components/FormInputs/SubumitButton";
import TextAreaInputs from "@/Components/FormInputs/TextAreaInputs";
import toast from "react-hot-toast";
import { makePOSTApiRequest } from "@/lib/apiRequest";

export default function NewCategory() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading,setLoading]=React.useState(false)

  async function onSubmit(data){
   
    makePOSTApiRequest('Categories',setLoading,data,'Categories')
  }
  return (
    <div>
      {/* { header } */}
      <FormHeader title="New Category" link={'#'} />
      {/* { Form } */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
         <TextInput label="Category Name" name="CategoryName"  type="text" width=''   register={register}  errors={errors}/>
         {/*Text Ares*/}
        <TextAreaInputs  label="Category " name="CategoryDescription"  type="text" width='full'   register={register}  errors={errors}/>
        
        
        



        </div>
       <SubumitButton title="Category" isLoading={loading}/>

      </form>
    </div>
  )
}
