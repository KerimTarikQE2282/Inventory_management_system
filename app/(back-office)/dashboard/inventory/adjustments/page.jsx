import DataTable from '@/Components/dashboard/DataTable'
import TabelNavBar from '@/Components/TabelNavBar'
import { getData } from '@/lib/getData'
import React from 'react'

export default async function Adjustments() {
  const StockAddcolumns=['AddStockQty','ReferenceNumber']
  const StockAdd=await getData('/adjustments/add')

  const StockTransfercolumns=['TransferStockQty','ReferenceNumber']
  const StockTransfered=await getData('/adjustments/transfer')
  return (
    <div>
       <TabelNavBar link='/dashboard/inventory/adjustments/new' title='Adjustments'/>
       <div className='my-4 p-8'>
        <h2 className='p-4 text-xl font-semibold'>Stock Add  </h2>
    <DataTable Data={StockAdd } columns={StockAddcolumns}/>

    </div>

    <div className='my-4 p-8'>
    <h2 className='p-4 text-xl font-semibold'>Stock Transfer Table </h2>
    <DataTable Data={StockTransfered } columns={StockTransfercolumns}/>

    </div>
    </div>
  )
}
