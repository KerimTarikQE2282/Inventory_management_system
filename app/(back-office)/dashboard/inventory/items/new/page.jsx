

import React from 'react';
import FormHeader from '../../InventoryComponents/FormHeaders';
import CreateItemFrom from '@/Components/dashboard/Forms/CreateItemFrom';
import { getData } from "@/lib/getData";

export default async function NewItem(props) {
  
const {initialData,isupdate}=props
  const CategoriesData= getData('Categories');
  const UnitsData= getData('Units')
  const BrandDatas= getData('Brand')
  const WareHouseData= getData('WareHouse')
  const SupplierData= getData('Supplier')

  const [Categories,Units,Brands,WareHouse,Supplier]=await Promise.all([CategoriesData,UnitsData,BrandDatas,WareHouseData,SupplierData])
  console.log('my props,',initialData)

  return (
    <div>
   {/* { header } */}
<FormHeader  title={`${isupdate?'Update Item':'New Item'}`} link={'/dashboard/inventory/items'} />

      {/* { Form } */}


 <CreateItemFrom 
categories={Categories}
units={Units}
brands={Brands}
warehouses={WareHouse}
suppliers={Supplier}
initialData={initialData}
isupdate={isupdate}
/>
    </div>

  )
}
