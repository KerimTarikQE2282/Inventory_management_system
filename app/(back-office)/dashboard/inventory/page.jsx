"use client"
import FixedHeader from '@/Components/dashboard/FixedHeader'

import { Box, Boxes, Building2, Codesandbox, Edit, HandCoins, Pen, Ruler, ScrollText, Shirt, Warehouse } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Inventory() {
 
  const ItemComponents=[
    {
      title: "Item Groups",
      icon: <Boxes strokeWidth=".5px" className='w-36 h-36' color='#f25944' />,
      phrase: "Create multiple variants of the same item using item groups.",
      Buttontext: "New Item Group",
      link: "/dashboard/inventory/itemGroups",
      linkTitle: 'Item Groups',  // Adjusted to match the title
      enabled: true
  },
  {
      title: "Items",
      icon: <Box strokeWidth=".5px" className='w-36 h-36' color='#eab308' />,
      phrase: "Create standalone items and services that you will buy or sell.",
      Buttontext: "New Item",  // Adjusted to match the title
      link: "/dashboard/inventory/items/new",
      linkTitle: 'Items',  // Adjusted to match the title
      enabled: true
  },
  {
      title: "Categories",
      icon: <Codesandbox strokeWidth=".5px" className='w-36 h-36' color='#30c55e' />,
      phrase: "Bundle different items together and sell them as a kit.",
      Buttontext: "New Categories of Items",  // Adjusted to match the title
      link: "/dashboard/inventory/Categories/new",
      linkTitle: 'Categories',  // Adjusted to match the title
      enabled: true
  },
  {
    title: "Price Lists",
    icon: <ScrollText strokeWidth=".5px" className='w-36 h-36' />,
    phrase: "Tweak your item prices for specific contacts or transactions.",
    Buttontext: "New Price List",  // Adjusted to match the title
    link: "/dashboard/inventory/pricelists/new",
    linkTitle: 'Price Lists',  // Adjusted to match the title
    enabled: true
},
  {
      title: "Adjustments",
      icon: <Edit strokeWidth=".5px" className='w-36 h-36' color='#f25944' />,
      phrase: "Make adjustments to your inventory.",
      Buttontext: "New Adjustments",  // Adjusted to match the title
      link: "/dashboard/inventory/adjutstments",
      linkTitle: 'Adjustments',  // Adjusted to match the title
      enabled: true
  },
 
  {
      title: "Brands",
      icon: <Building2 strokeWidth=".5px" className='w-36 h-36' color='#eab308' />,
      phrase: "Manage your brands and products.",
      Buttontext: "New Brand",  // Adjusted to match the title
      link: "/dashboard/inventory/Brands",
      linkTitle: 'Brands',  // Adjusted to match the title
      enabled: true
  },
  {
      title: "Warehouses",
      icon: <Warehouse strokeWidth=".5px" className='w-36 h-36' color='#30c55e' />,
      phrase: "Manage your warehouses and inventory storage.",
      Buttontext: "New Warehouse",  // Adjusted to match the title
      link: "/dashboard/inventory/WareHouse",
      linkTitle: 'Warehouses',  // Adjusted to match the title
      enabled: true
  },
  {
      title: "Units",
      icon: <Ruler strokeWidth=".5px" className='w-36 h-36' />,
      phrase: "Manage your units of measurement.",
      Buttontext: "New Unit",  // Adjusted to match the title
      link: "/dashboard/inventory/units",
      linkTitle: 'Units',  // Adjusted to match the title
      enabled: true
  }
  
  ]

  const AllItemComponents=ItemComponents.map((item)=>{
    return(
      <div className='shadow-md bg-white flex flex-col items-center justify-center gap-4 py-5 px-5 rounded-sm' key={item.title}>
      <h2 className='text-lg font-bold'>{item.title}</h2>

      <div >
        {item.icon}
      </div>
      <p className='line-clamp-1'>
        {item.phrase}

      </p>
      {item.enabled?
 (<Link href={item.link} className="py-2 bg-blue-600 rounded-md inline-flex items-center space-x-2 px-3 ">
       
        <span className='text-white'>{item.Buttontext}</span>
       
      </Link>):
       (<button className="py-2 bg-blue-600 rounded-md inline-flex items-center space-x-2 px-3 text-white ">
        Enable
        
        </button>)
         }
      </div>
    )
  })

  return (
    <div>
      <FixedHeader/>
      <div className='grid grid-cols-1 lg:grid-cols-3 py-16 px-28 gap-8'>
     
      
      {AllItemComponents}
      {/* second box */}

      
    </div>
    </div>
  )
}

export default Inventory
