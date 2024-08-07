"use client"
import { useForm } from "react-hook-form";
import React from 'react';
import TextInput from "@/Components/FormInputs/TextInput";
import SubumitButton from "@/Components/FormInputs/SubumitButton";
import TextAreaInputs from "@/Components/FormInputs/TextAreaInputs";
import SelectComponent from "@/Components/FormInputs/SelectComponent";
import { makePOSTApiRequest } from "@/lib/apiRequest";

export default function TransferInventoryForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading,setLoading]=React.useState(false)
  const countryOptions = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'FR', label: 'France' },
    { value: 'DE', label: 'Germany' }
  ];
  async function onSubmit(data){
    
    makePOSTApiRequest('/adjustments/transfer',setLoading,data,'Inventory')

  }
  return (

     
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
        <TextInput label="Enter Reference Number" name="ReferenceNumber"  type="text" width=''   register={register}  errors={errors}/>
        <SelectComponent
          name="RecievingBanchId" 
          label="Select a warehouse to transfer to "
          register={register}
          error={errors}
          
          options={countryOptions}
          />
          <SelectComponent
          name="SendingBranchId" 
          label="Select a warehouse to transfer from "
          register={register}
          error={errors}
          
          options={countryOptions}
          />
        
        <TextAreaInputs  label="Notes for transfering inventory to another warehouse" name="Notes"  type="text" width='full'   register={register}  errors={errors}/>
        
                <TextInput label="Enter Quantity of Stock To transfer" name="TransferStockQty"  type="text" width='full'   register={register}  errors={errors}/>



        
        
        



        </div>
       <SubumitButton title="New Brand" isLoading={loading}/>

      </form>
    
  )
}
