import { Columns, Pencil, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function DataTable({Data,columns=['']}) {
 
  return (
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
        <thead className=" text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr  >
            {
                columns.map((title) => {
                    return (
                        title !== 'id' ? (<th className="px-6 py-4">{title}</th>) : null
                    )
                })
              }
           <th>Edit</th>
           <th>Delete</th>
           
            </tr>
        </thead>
        <tbody>

    {Data.map((mydata)=>{
        return(
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 " key={mydata.title}>
            
               {
                columns.map((title) => {
                    return (
                        title !== 'id' ? (<td className="px-14 py-4 ">{mydata[title]}</td>) : null
                    )
                })
               }
               <td className=" py-4 flex gap-10  ">
                    <Link href={''} className='font-medium text-blue item-center space-x-2 text-blue-500'><Pencil className='text'/></Link>
                   
                </td>
                <td>
                <Link href={''} className='font-medium text-blue item-center space-x-2 text-red-600'><Trash className='text'/></Link>
                </td>
            </tr>
        )
    })


    }

            
            
        </tbody>
    </table>
</div>

  )
}
