import React from 'react'
import { getDataById } from '@/lib/getDataByid'
import NewCategory from '../../new/page'
export default async function Update({params:id}) {
  
    const data=await getDataById('Categories',id)
 
    
  return (


      <NewCategory initialData={data} isupdate={true}/>
 
    
  )
}
