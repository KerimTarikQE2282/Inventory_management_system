import Inventory from '@/app/(back-office)/dashboard/inventory/page'
import { BaggageClaim, BarChart4, Blocks, ChevronLeft, File, FilesIcon, Flag, FolderClosed, Home, ShoppingBasket, ShoppingCart, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'

function Sidebar() {
  return (
 
       <div className='w-60 min-h-screen bg-slate-800  text-slate-50 justify-between fixed'> 
       {
        /*top part*/
       }
       
       <div className='flex-col '>
       {
        /*Logo*/
       }
       <Link href={"#"} className='flex space-x-2 bg-slate-950 items-center py-3 px-2'>
        <ShoppingCart/>
        <span className='font-semibold text-l '>Inventory</span>
       </Link>
       {
        /*Links*/
       }
       <nav className='flex flex-col gap-3 px-3 py-6'>
        <Link href={"#"} className='flex items-center space-x-2 bg-blue-500  p-2 rounded-md'>
        <Home className='w-4 h-4'/>
       <span> Home</span> 
       </Link>
       <button  className='flex items-center space-x-2 p-2'>
        <BaggageClaim className='w-4 h-4'/>
       <span> Inventory</span> 
       </button>
       <button  className='flex items-center space-x-2 p-2'>
        <ShoppingCart className='w-4 h-4'/>
       <span> Sales</span> 
       </button>
       <button  className='flex items-center space-x-2 p-2'>
        <ShoppingBasket className='w-4 h-4'/>
       <span> Purchases</span> 
       </button>

       <Link href={"#"} className='flex items-center space-x-2 p-2'>
        <Blocks className='w-4 h-4'/>
       <span> Integrations</span> 
       </Link>

       <Link href={"#"} className='flex items-center space-x-2 p-2'>
        <BarChart4 className='w-4 h-4'/>
       <span> Reports</span> 
       </Link>

       <Link href={"#"} className='flex items-center space-x-2 p-2'>
        <FolderClosed className='w-4 h-4'/>
       <span> Documents</span> 
       </Link>

       </nav>
       </div>
       
      {
        /*bottom  part*/
       }
    <div className='flex-col mt-[34.3vh]'>
       <SubscriptionCard/>
       <button className='flex flex-col bg-slate-950 justify-end w-full items-center'>
        
       <div className='flex space-x-2  items-center py-3 px-2'>
        <ChevronLeft/>
     
       </div>
       </button>
       </div>
         {
        /*Subscription Card*/
       }
         {
        /*footer icon*/
       }
       
       </div>
    
  )
}

export default Sidebar
