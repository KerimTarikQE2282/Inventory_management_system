import React from 'react'
import { getDataById } from '@/lib/getDataByid'
import NewItem from '../../new/page'
import NewWareHouse from '../../../WareHouse/new/page'
export default async function Update({params:id}) {
  
    const data=await getDataById('Warehouse',id)
    console.log('from form err',data,id)
    
  return (


      <NewWareHouse initialData={data} isupdate={true}/>
 
    
  )
}
