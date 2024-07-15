import Link from 'next/link'

export default function Home() {
  return (
   <div className='flex items-center justify-center min-h-screen flex-col'>
    <h2 className='text-3xl mb-4'>
      Inventory Management system
      </h2> 
      <hr/>
      <Link href="/dashboard/home/overview">home dashboard</Link>
   </div>
  )
}
