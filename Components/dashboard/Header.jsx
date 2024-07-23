import { Bell, ChevronDown, History, LayoutGrid, Plus, Settings, User2, Users2 } from 'lucide-react'
import React from 'react'
import Search_bar from './Search_bar'
import Image from 'next/image'
import image from '../../Resources/image.png'
function header() {
  return (
    <div className="bg-[#f8f7fe] h-12 flex items-center justify-between px-8 border-b border-gray-200 ">
   
    <div className="flex items-center gap-3">
      <button className='hidden lg:block'>
        <History className="w-5 h-5" />
      </button>
      <Search_bar />
    </div>
  

    <div className="flex items-center ml-auto gap-4">
      <div className="flex items-center border-r border-gray-300 pr-2">
        <button className="p-1 bg-blue-600 rounded-lg">
          <Plus className="text-white w-4 h-4" />
        </button>
      </div>
  
      <div className="flex items-center border-r  border-gray-300 pr-2 gap-2">
        <button className="p-1 bg-slate-100 rounded-lg">
          <Users2 className="text-slate-900 w-4 h-4" />
        </button>
        <button className="p-1 bg-slate-100 rounded-lg">
          <Bell className="text-slate-900 w-4 h-4" />
        </button>
        <button className="p-1 bg-slate-100 rounded-lg">
          <Settings className="text-slate-900 w-4 h-4" />
        </button>
      </div>
  
      <div className="flex items-center gap-2 ml-2">
        <button className="flex items-center">
          Garat
          <span>
            <ChevronDown className="w-5 h-5" />
          </span>
        </button>
        <Image src={image} alt="" className="rounded-full w-8 h-8 ml-5 border border-slate-900" />
        <button><LayoutGrid className='w-6 h-6 text-slate-700 ml-5'/></button>
      </div>
    </div>
  </div>
  
      
    
  )
}

export default header
