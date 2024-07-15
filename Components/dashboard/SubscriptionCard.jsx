import Link from 'next/link'
import React from 'react'

function SubscriptionCard() {
  return (
    <div className='py-3 px-2'>
        <div className='rounded-xl p-3  bg-[#131623]'>
            <div className='border-b border-slate-600 pb-4'>
            <p className='text-sm  border-l-2 border-orange-200 pl-4'>Your premium plan Expires in<span className='text-orange-300'> 14 days.</span> </p>

            </div>
            <div className='flex flex-row space-x-3 text-sm'>
                <button className='px-1 pr-2 border-r border-slate-600 '>Change plan</button>
                <Link href="#" className='px-1'>upgrade</Link>
            </div>
    </div>
    </div>
  )
}

export default SubscriptionCard
