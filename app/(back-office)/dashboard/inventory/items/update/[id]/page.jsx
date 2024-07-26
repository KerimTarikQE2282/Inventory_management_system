import React from 'react'
import { getDataById } from '@/lib/getDataByid'
import NewItem from '../../new/page'
export default async function Update({params:id}) {
  
    const data=await getDataById('Item',id)
    console.log('from form err',data,id)
    
  return (


      <NewItem initialData={data} isupdate={true}/>
 
    
  )
}
