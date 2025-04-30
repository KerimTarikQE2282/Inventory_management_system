import React from 'react'
import { getDataById } from '@/lib/getDataByid'
import NewItem from '../../new/page'
import NewUnit from '../../new/page'
export default async function Update({params:id}) {
  
    const data=await getDataById('Units',id)
    console.log('from form err',data,id)
    
  return (


      <NewUnit initialData={data}  isupdate={true}/>
 
    
  )
}
