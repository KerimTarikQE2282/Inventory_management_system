"use client"
import Inventory from '@/app/(back-office)/dashboard/inventory/page'
import { BaggageClaim, BarChart4, Blocks, ChevronDown, ChevronLeft, ChevronRight, File, FilesIcon, Flag, FolderClosed, Home, Plus, PlusCircle, ShoppingBasket, ShoppingCart, ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import SubscriptionCard from './SubscriptionCard'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

function Sidebar() {
  const [inventoryOpen,setInventoryopen]=React.useState(false)

  const inventoryLinks=[
    {
      name:"Items",
      link:"/dashboard/inventory",
    },
    {
      name:"Item Groups",
      link:"/dashboard/inventory",
    },
    {
      name:"Inventory Adjustments",
      link:"/dashboard/inventory",
    }
  ]
  const InventoryList=inventoryLinks.map((link)=>{
    return(
        <Link href={link.link} className='flex items-center justify-between hover:bg-slate-900 transition-all duration-500 ease-in-out pl-8 pr-2 py-2.5 ml-5 rounded-lg text-sm ' > 
          
          <span>{link.name}</span>
          <PlusCircle className='w-4 h-4'/>
          
          </Link>
    );
  })
  return (
 
       <div className='flex  flex-col w-60 min-h-screen bg-slate-800  text-slate-50 justify-between fixed'> 
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
       
      
       <Collapsible>
      <CollapsibleTrigger CollapsibleTrigger className='flex items-center space-x-2 p-2' onClick={()=>setInventoryopen(!inventoryOpen)}>
        <BaggageClaim className='w-4 h-4'/>
        
        <span> Inventory</span>
        { inventoryOpen ? <ChevronDown className='relative  left-[4vw] w-4 h-4'/>: < ChevronRight className='relative  left-[4vw] w-4 h-4'/>}
         </CollapsibleTrigger>
        <CollapsibleContent >
        
        
        {InventoryList}
        {/* <Link>Item Groups</Link>
         <Link>Inventory Adjustments</Link> */}
       </CollapsibleContent>
        </Collapsible>




       
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
    <div className='flex-col '>
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
