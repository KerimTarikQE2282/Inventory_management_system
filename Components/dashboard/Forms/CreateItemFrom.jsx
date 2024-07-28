"use client"
import { useForm } from "react-hook-form";
import React from 'react';
import TextInput from "@/Components/FormInputs/TextInput";
import SubumitButton from "@/Components/FormInputs/SubumitButton";
import TextAreaInputs from "@/Components/FormInputs/TextAreaInputs";
import SelectComponent from "@/Components/FormInputs/SelectComponent";
import ImageInput from "@/Components/FormInputs/ImageInput";
import { makePOSTApiRequest, makePUTApiRequest } from "@/lib/apiRequest";
import { useRouter } from 'next/navigation';
export default  function CreateItemFrom(props) {
  console.log(props.initialData)
  const {categories,units,brands,warehouses,suppliers,initialData={},isupdate}=props
  const [imageUrl,setImageUrl]=React.useState(props.isupdate==true ? props.initialData?.imageUrl :'')
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading,setLoading]=React.useState(false)
  const router = useRouter();
  router.refresh();
  async function onSubmit(data){
    
    if(isupdate){
      // Update Request 
      try {
       await makePUTApiRequest(`Item/${initialData.id}`,setLoading,data,'Items')
         done=true
         if(done==true){
          router.replace('/dashboard/inventory/Items')
       }
      } catch (error) {
        console.log(error)
      }
     
    }
    else{
      data.imageURL=imageUrl
      makePOSTApiRequest('Item',setLoading,data,'Items')
     
      setImageUrl('');
    }
  
  }

  return (
    
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
         <TextInput label="Item Name" name="ItemName" type="text" width='fuller' defaultValue={initialData.title}    register={register}  errors={errors}/>
         <TextInput label="Item SKU" name="ItemSKU"  type="text" width='fuller' defaultValue={initialData.sku}   register={register}  errors={errors} className='w-full'/>
         <TextInput label="Item Quantity" name="ItemQuantity"  type="number" width='' defaultValue={initialData.quantity}   register={register}  errors={errors}  />

         <SelectComponent label="Category" name="Category"  type="text" width='full' defaultValue={initialData.categoryId} options={categories}   register={register}  errors={errors}  className='w-full'/>

        
        
     
     
      <TextInput label="Item BarCode" name="ItemBarcode"  type="text" width='full' defaultValue={initialData.title}   register={register}  errors={errors}  />

      

         {/* ************************************Fix for Measurement ******************************************************************* */}
         
         <SelectComponent label="Measurement" name="Measurement"  type="text" width='full' defaultValue={initialData.unitId}  options={units}     register={register}  errors={errors}  className='w-full'/>

        
        
      {/* ************************************untill here******************************************************************* */}


      <TextInput label="Item Cost Price" name="ItemCostPrice"  type="number" width='full' defaultValue={initialData.costPrice}  register={register}  errors={errors}  />
      <TextInput label="Item Selling Price" name="ItemSellingPrice"  type="number" width='full' defaultValue={initialData.sellingPrice}  register={register}  errors={errors}  />
      <SelectComponent label="Brand" name="Brand"  type="text" width='full'  options={brands}  defaultValue={initialData.title}   register={register}  errors={errors}  className='w-full'/>
      <TextInput label="Item Reorder point" name="ItemReorderPoint"  type="number" width='full' defaultValue={100}   register={register}  errors={errors}  />
        

  {/* ************************************Fix for WareHouse ******************************************************************* */}
         
<SelectComponent label="WareHouse" name="WareHouse"  type="text" width='full'  options={warehouses} defaultValue={initialData.title}    register={register}  errors={errors}  className='w-full'/>
<SelectComponent label="Supplier" name="Supplier"  type="text" width='full'  options={suppliers}  defaultValue={initialData.title}   register={register}  errors={errors}  className='w-full'/>

        
      {/* ************************************untill here******************************************************************* */}
      <TextInput label="Item Weight" name="ItemWeight"  type="number" width='full'   register={register} defaultValue={100} errors={errors}  />
      <TextInput label="Item Dimensions in cm (20 X 30 X 40)" name="ItemDimensions"  type="text" width='full'  defaultValue={initialData.title} register={register}  errors={errors}  />
      <TextInput label="Tax Rates in %" name="ItemTaxRate"  type="number" width='full'   register={register} defaultValue={15} errors={errors}  />
      <TextAreaInputs  label="Item Description " name="ItemDescription"  type="text" width='full'   register={register} defaultValue={initialData.title} errors={errors}/>

      <TextAreaInputs  label="Notes " name="ItemNotes"  type="text" width='full'   register={register} defaultValue={initialData.title} errors={errors}/>
        <ImageInput label="Item " imageURL={imageUrl} setImageUrl={setImageUrl} />
        </div>
       <SubumitButton title={`${isupdate?'Updated Item':'New item'}`}  isLoading={loading}/>

      </form>
    
  )
}
