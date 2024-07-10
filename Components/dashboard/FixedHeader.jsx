import { AlignJustify, HelpCircle, LayoutGrid, List, ListChecksIcon, ListIcon, MoreHorizontal, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function FixedHeader() {
  return (
    <div className='flex justify-between items-center bg-white py-5 px-4'>
      <button className='text-2xl'>
        All items
      </button>
      <div className='flex items-center space-x-10'>
      {/*new*/}
      <Link href={"/dashboard/inventory/new"} className="p-1 bg-blue-600 rounded-md flex items-center space-x-2 px-3 ">
          <Plus className="text-white w-4 h-4" />
          <span className='text-white'>New</span>
        </Link>
      {/*Layout button*/}
      <div className='flex bg-gray-300 p-2 gap-3 rounded-md border border-slate-400'>
      <button className='border-r border-slate-400 pr-3'><AlignJustify className='w-5 h-5 text-slate-600'/></button>
      <button><LayoutGrid className='w-5 h-5 text-slate-600'/></button>
      </div>
      {/*More*/}
     
      <button><MoreHorizontal/></button>
      
      
      {/*Help*/}
    <button><HelpCircle/></button>

      </div>
    </div>
  )
}

export default FixedHeader
