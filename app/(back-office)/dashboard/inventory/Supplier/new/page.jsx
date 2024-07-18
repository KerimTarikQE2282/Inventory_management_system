"use client"
import { useForm } from "react-hook-form";
import React from 'react';
import FormHeader from '../../InventoryComponents/FormHeaders';
import TextInput from "@/Components/FormInputs/TextInput";
import SubumitButton from "@/Components/FormInputs/SubumitButton";
import TextAreaInputs from "@/Components/FormInputs/TextAreaInputs";
import {  makePOSTApiRequest } from "@/lib/apiRequest";

export default function NewSupplier() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading,setLoading]=React.useState(false)

  async function onSubmit(data){
    
  makePOSTApiRequest('Supplier',setLoading,data,'Supplier')

  }
  return (
    <div>
      {/* { header } */}
      <FormHeader title="New Unit" link={'#'} />
      {/* { Form } */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
         <TextInput label="Supplier Name" name="name"  type="text" width=''   register={register}  errors={errors}/>
         <TextInput label="Supplier Phone" name="phone"  type="text" width=''   register={register}  errors={errors}/>
         <TextInput label="Supplier email" name="email"  type="email" width=''   register={register}  errors={errors}/>
         <TextInput label="Supplier address" name="address"  type="text" width='full'   register={register}  errors={errors}/>
         <TextInput label="Supplier Contact person" name="contactPerson"  type="text" width='full'   register={register}  errors={errors}/>
         <TextInput label="Supplier Code" name="supplierCode"  type="text" width='full'   register={register}  errors={errors}/>
         <TextInput label="Supplier Tax ID" name="taxID"  type="text" width='full'   register={register}  errors={errors}/>
         <TextAreaInputs label="Supplier Payment terms" name="PaymentTerms"  type="text" width='full'   register={register}  errors={errors}/>
         <TextAreaInputs label="Supplier Notes" name="notes"  type="text" width='full'   register={register}  errors={errors}/>


        
        
        



        </div>
       <SubumitButton title="New Supplier" isLoading={loading}/>

      </form>
    </div>
  )
}
