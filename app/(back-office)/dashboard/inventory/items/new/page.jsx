

import React from 'react';
import FormHeader from '../../InventoryComponents/FormHeaders';
import CreateItemFrom from '@/Components/dashboard/CreateItemFrom';
import { getData } from "@/lib/getData";

export default async function NewItem() {
  


  const Categories=await getData('Categories');
  console.log(Categories)
  const Units=await getData('Units')
  const Brands=await getData('Brand')
  const WareHouse=await getData('WareHouse')
  const Supplier=await getData('Supplier')



  return (
    <div>
      {/* { header } */}
      <FormHeader title="New Item" link={'#'} />
      {/* { Form } */}
<CreateItemFrom categories={Categories}
units={Units}
brands={Brands}
warehouses={WareHouse}
suppliers={Supplier}
/>
    </div>
  )
}
