import React from 'react'

function InventorySummary() {
  return (
    <div>
      <div className='col-span-4  ml-[55vw]   '>
        <div className='w-[20vw] flex flex-col gap-4'>
          <h2 className='mb-6 text-xl'>Inventory summary</h2>
          
          <div className='shadow rounded-lg bg-white border border-slate-200 py-2 hover:border-blue-500 p-8 cursor-pointer flex items-center justify-between gap-3 transition duration-500 ease-in-out'>
            <h2 className='text-slate-500 uppercase text-md'>Quantity in hand</h2>
            <h4 className='text-2xl'>10</h4>
          </div>

          <div className='shadow rounded-lg bg-white border border-slate-200 py-2 hover:border-blue-500 p-8 cursor-pointer flex items-center justify-between gap-3 transition duration-500 ease-in-out'>
            <h2 className='text-slate-500 uppercase text-md'>Quantity To be recieved</h2>
            <h4 className='text-2xl'>10</h4>
          </div>
        </div>
        
     
    </div>
    </div>
  )
}

export default InventorySummary
