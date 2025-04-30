'use client'
import { useForm } from "react-hook-form";
import React from 'react';
import TextInput from "@/Components/FormInputs/TextInput";
import SubumitButton from "@/Components/FormInputs/SubumitButton";
import TextAreaInputs from "@/Components/FormInputs/TextAreaInputs";
import SelectComponent from "@/Components/FormInputs/SelectComponent";
import toast from "react-hot-toast";
import { makePOSTApiRequest } from "@/lib/apiRequest";

export default function AddinventoryForm({items,WareHouses}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loading,setLoading]=React.useState(false)
    async function onSubmit(data){
      
          makePOSTApiRequest('/adjustments/add',setLoading,data,'Inventory')
  
    }
    console.log('from add inevntory form',items)
    return (
  
       
        <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
          <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput label="Enter Reference Number" name="ReferenceNumber"  type="text" width=''   register={register}  errors={errors} defaultValue="dwjandjkwan"/>
  
           <TextInput label="Enter amount of Stock To Add" name="AddStockQty"  type="text" width='full'   register={register}  errors={errors}/>
           {/* <TextInput label="Date of item added" name="AddingDate"  type="date" width='full'   register={register}  errors={errors}/> */}
  
            <SelectComponent
            name="ItemId" 
            label="Select the item to add  "
            register={register}
            error={errors}
            
            options={items}
            />
            <SelectComponent
            name="WareHouseId" 
            label="warehouse to Add to  "
            register={register}
            error={errors}
            
            options={WareHouses}
            />
          
          <TextAreaInputs  label="Notes for Adding inventory to another warehouse" name="AddingInventoryNotes"  type="text" width='full'   register={register}  errors={errors}/>
     
         
  
  
          
          
          
  
  
  
          </div>
         <SubumitButton title="New Stock" isLoading={loading}/>
  
        </form>
    )
}
