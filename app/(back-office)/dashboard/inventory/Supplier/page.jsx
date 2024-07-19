import DataTable from '@/Components/dashboard/DataTable'
import TabelNavBar from '@/Components/TabelNavBar'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Suppliers() {
const columns=['name','phone','email','PaymentTerms']
  const Suppliers=await getData('Supplier')
  console.log(Suppliers)
 
  return (
    <div>
    {/* { header } */}
  <TabelNavBar link='/dashboard/inventory/Supplier/new/' title='Suppliers'/>
    {/* { Table  } */}
    <div className='my-4 p-8'>
    <DataTable Data={ Suppliers} columns={columns}/>

    </div>
     
  </div>
  )
}
