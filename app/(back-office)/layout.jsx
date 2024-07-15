import React from 'react'
import Header from '@/Components/dashboard/Header'
import Sidebar from '@/Components/dashboard/Sidebar'
export default function Layout({children}) {
  return (
    <div className='flex'>
     <Sidebar/>
      <main className=' ml-60 w-full bg-slate-100 min-h-screen'> 
        <Header/>
        {children}</main>
     
    </div>
  )
}
