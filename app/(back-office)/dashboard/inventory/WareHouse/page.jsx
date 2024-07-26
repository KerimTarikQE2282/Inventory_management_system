import DataTable from '@/Components/dashboard/DataTable'
import TabelNavBar from '@/Components/TabelNavBar'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function WareHouse() {
  const columns=['WareHouseName','WareHouseLocation','WareHouseType']
  const Items= await getData('WareHouse')
  return (
    <div>
             <TabelNavBar link='/dashboard/inventory/WareHouse/new' title='WareHouse'/>
       <div className='my-4 p-8'>
    <DataTable Data={Items } resourceTitle={'WareHouse'}  columns={columns}/>

    </div>
    </div>
  )
}
