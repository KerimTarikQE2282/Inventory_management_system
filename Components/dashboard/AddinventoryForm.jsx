"use client"
import { useForm } from "react-hook-form";
import React from 'react';
import TextInput from "@/Components/FormInputs/TextInput";
import SubumitButton from "@/Components/FormInputs/SubumitButton";
import TextAreaInputs from "@/Components/FormInputs/TextAreaInputs";
import SelectComponent from "@/Components/FormInputs/SelectComponent";

export default function AddInventoryForm() {
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
    const response=await fetch(`${baseUrl}/api/adjustments/add`,{
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

     
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
         <TextInput label="Enter amount of Stock To Add" name="AddStockQty"  type="text" width='full'   register={register}  errors={errors}/>
          <SelectComponent
          name="AddStockBranch" 
          label="Select a warehouse to Add to  "
          register={register}
          error={errors}
          
          options={countryOptions}
          />
        
        <TextAreaInputs  label="Notes for Adding inventory to another warehouse" name="AddingInventoryNotes"  type="text" width='full'   register={register}  errors={errors}/>
   
       


        
        
        



        </div>
       <SubumitButton title="New Stock"/>

      </form>
    
  )
}
