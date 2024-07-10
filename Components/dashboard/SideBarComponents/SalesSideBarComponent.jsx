import { BaggageClaim, ChevronDown, ChevronRight, PlusCircle, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"
function SalesSideBarComponent() {
    const [inventoryOpen,setInventoryopen]=React.useState(false)

    const inventoryLinks=[
      {
        name:"Customer",
        link:"/dashboard/inventory",
      },
      {
        name:"Sales Order",
        link:"/dashboard/inventory",
      },
      {
        name:"Packages",
        link:"/dashboard/inventory",
      }
      ,
      {
        name:"Shipment",
        link:"/dashboard/inventory",
      }
      ,
      {
        name:"Invoice",
        link:"/dashboard/inventory",
      }
      ,
      {
        name:"Sales Reciepts",
        link:"/dashboard/inventory",
      }
      ,
      {
        name:"Paymets Recieved",
        link:"/dashboard/inventory",
      }
      ,
      {
        name:"Sales Returns",
        link:"/dashboard/inventory",
      }
      ,
      {
        name:"Credit Notes",
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
        <ShoppingCart className='w-4 h-4'/>
        
        <span> Sales</span>
        { inventoryOpen ? <ChevronDown className='relative  left-[5.5vw] w-4 h-4'/>: < ChevronRight className='relative  left-[5.5vw] w-4 h-4'/>}
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

export default SalesSideBarComponent
