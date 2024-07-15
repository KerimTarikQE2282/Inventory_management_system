"use client"
import { useForm } from "react-hook-form";
import React from 'react';
import FormHeader from '../../InventoryComponents/FormHeaders';
import TextInput from "@/Components/FormInputs/TextInput";

import SubumitButton from "@/Components/FormInputs/SubumitButton";
import TextAreaInputs from "@/Components/FormInputs/TextAreaInputs";
import SelectComponent from "@/Components/FormInputs/SelectComponent";

export default function NewAdjustments() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading,setLoading]=React.useState(false)
  const countryOptions = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'FR', label: 'France' },
    { value: 'DE', label: 'Germany' }
  ];
  async function onSubmit(data){
    
    const baseUrl='http://localhost:3000'
    console.log(data)
   try {
    setLoading(true)
    const response=await fetch(`${baseUrl}/api/adjustments`,{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
     })
      console.log(data);
      if(response.ok){
        console.log(response.json());
        setLoading(false)
        reset();
      }
      
   } catch (error) {
    console.log(error)
   }
  }
  return (
    <div>
      {/* { header } */}
      <FormHeader title="New Stock Transfer" link={'#'} />
      
{/* 
<div class="border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li class="me-2">
            <button href="#" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
                <svg class="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg>Profile
            </button>
        </li>
        <li class="me-2">
            < href="#" class="inline-flex items-center justify-center p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500 group" aria-current="page">
                <svg class="w-4 h-4 me-2 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
                </svg>Dashboard
            </>
        </li>
        
    </ul>
</div> */}

      {/* { Form } */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
         <TextInput label="Enter amount of Stock To transfer" name="TransferStockQty"  type="text" width='full'   register={register}  errors={errors}/>
          <SelectComponent
          name="SendingBranchId" 
          label="Select a warehouse to transfer from "
          register={register}
          error={errors}
          
          options={countryOptions}
          />
        
        <TextAreaInputs  label="Notes for transfering inventory to another warehouse" name="Notes"  type="text" width='full'   register={register}  errors={errors}/>
        <SelectComponent
          name="RecievingBanchId" 
          label="Select a warehouse to transfer to "
          register={register}
          error={errors}
          
          options={countryOptions}
          />
       


        
        
        



        </div>
       <SubumitButton title="New Brand"/>

      </form>
    </div>
  )
}
