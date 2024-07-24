import React from 'react'
import NewBrand from '../../new/page'
import { getDataById } from '@/lib/getDataByid'
export default async function Update({params:id}) {
    const data=await getDataById('Brand',id)
    console.log('from form',data)
  return (

     
      <NewBrand initialData={data} isupdate={true}/>
    
  )
}
