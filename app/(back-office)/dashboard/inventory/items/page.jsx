import DataTable from '@/Components/dashboard/DataTable'
import TabelNavBar from '@/Components/TabelNavBar'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Items() {
  const columns=['title','description','sku']
  const Items=await getData('Item')
  console.log(Items)
  return (
    <div>
       <TabelNavBar link='/dashboard/inventory/items/new' title='Items'/>
       <div className='my-4 p-8'>
    <DataTable Data={Items} resourceTitle={'items'} columns={columns}/>

    </div>
    </div>
  )
}
