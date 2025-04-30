"use client"
import { useForm } from "react-hook-form";
import React from 'react';
import FormHeader from '../../InventoryComponents/FormHeaders';
import TextInput from "@/Components/FormInputs/TextInput";
import SubumitButton from "@/Components/FormInputs/SubumitButton";
import TextAreaInputs from "@/Components/FormInputs/TextAreaInputs";
import {  makePOSTApiRequest, makePUTApiRequest } from "@/lib/apiRequest";

export default function NewSupplier(props) {
  console.log('from supplier form',props)
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading,setLoading]=React.useState(false)
const {name,phone,email,address,contactPerson,taxID,supplierCode,PaymentTerms,notes}=props.initialData
const isupdate=props.isupdate
  async function onSubmit(data){
    
    if(isupdate){
  try {
    await makePUTApiRequest(`Supplier/${props.initialData.id}`,setLoading,data,'Suppplier')
      done=true
      if(done==true){
       router.replace('/dashboard/inventory/WareHouse')
    }
   } catch (error) {
     console.log(error)
   }
  
 }
 else{
  makePOSTApiRequest('Supplier',setLoading,data,'Supplier')
 }

  }
  return (
    <div>
      {/* { header } */}
      <FormHeader title={`${props.isupdate?'Update Supplier Information':'New Supplier'}`} link={'#'} />
      {/* { Form } */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
         <TextInput label="Supplier Name" name="name"   type="text" width='' defaultValue={name || ''}   register={register}  errors={errors}/>
         <TextInput label="Supplier Phone" name="phone"  type="text" width='' defaultValue={phone || ''}   register={register}  errors={errors}/>
         <TextInput label="Supplier email" name="email"  type="email" width=''   register={register} defaultValue={email || ''}   errors={errors}/>
         <TextInput label="Supplier address" name="address"  type="text" width='full'   register={register} defaultValue={address || ''}  errors={errors}/>
         <TextInput label="Supplier Contact person" name="contactPerson"  type="text" width='full' defaultValue={contactPerson || ''}   register={register}  errors={errors}/>
         <TextInput label="Supplier Code" name="supplierCode"  type="text" width='full'   register={register} defaultValue={taxID || ''}  errors={errors}/>
         <TextInput label="Supplier Tax ID" name="taxID"  type="text" width='full'   register={register} defaultValue={supplierCode || ''}  errors={errors}/>
         <TextAreaInputs label="Supplier Payment terms" name="PaymentTerms"  type="text" width='full' defaultValue={PaymentTerms || ''}   register={register}  errors={errors}/>
         <TextAreaInputs label="Supplier Notes" name="notes"  type="text" width='full'   register={register} defaultValue={notes || ''}  errors={errors}/>


        
        
        



        </div>
       <SubumitButton title={`${props.isupdate?'Update Supplier Information':'New Supplier'}`} isLoading={loading}/>

      </form>
    </div>
  )
}
