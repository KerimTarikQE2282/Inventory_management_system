import DataTable from '@/Components/dashboard/DataTable'
import TabelNavBar from '@/Components/TabelNavBar'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Categories() {
const columns=['title','description']
  const Categories=await getData('Categories')
 
 
  return (
    <div>
    {/* { header } */}
  <TabelNavBar link='/dashboard/inventory/Categories/new/' title='Categories'/>
    {/* { Table  } */}
    <div className='my-4 p-8'>
    <DataTable Data={Categories } columns={columns} resourceTitle={'Categories'}/>

    </div>
     
  </div>
  )
}
