import { BaggageClaim, ChevronDown, ChevronRight, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
function InventorySideBarComponent() {
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
    <div>
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
    </div>
  )
}

export default InventorySideBarComponent
