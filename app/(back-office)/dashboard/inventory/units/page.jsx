import DataTable from '@/Components/dashboard/DataTable'
import TabelNavBar from '@/Components/TabelNavBar'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Units() {
  const columns=['UnitName','UnitAbreviation']
  const Items= await getData('Units')
  return (
    <div>
              <TabelNavBar link='/dashboard/inventory/units/new' title='Unit'/>
       <div className='my-4 p-8'>
    <DataTable Data={Items } resourceTitle={'units'} columns={columns}/>

    </div>
    </div>
  )
}
