import DataTable from '@/Components/dashboard/DataTable'
import TabelNavBar from '@/Components/TabelNavBar'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Brands() {
  const columns=['BrandName','createdAt','updatedAt']
  const Items= await getData('Brand')
  return (
    <div>
        <TabelNavBar link='/dashboard/inventory/Brands/new' title='Brands'/>
       <div className='my-4 p-8'>
    <DataTable Data={Items } columns={columns} resourceTitle='Brands'/>

    </div>
    </div>
  )
}
