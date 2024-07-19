import React from 'react';
import { getData } from "@/lib/getData";
import NewAdjustments from '@/Components/dashboard/Forms/AdjustmentForm';
export default async function Adjustments() {
      const WareHouses=await getData('WareHouse')
     const Items=await getData('Item')
  return(
    <div>
      <NewAdjustments items={Items} WareHouses={WareHouses}/>
    </div>
  )
}
