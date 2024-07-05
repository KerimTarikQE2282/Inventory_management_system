import React from 'react'
import Header from '@/Components/dashboard/Header'
export default function Layout({children}) {
  return (
    <div className='flex'>
      <div className='w-56 min-h-screen bg-slate-900  text-slate-50'> side bar</div>
      <main className='w-full bg-slate-100 min-h-screen'> 
        <Header/>
        {children}</main>
     
    </div>
  )
}
