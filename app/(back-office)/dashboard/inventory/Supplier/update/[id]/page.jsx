import React from 'react'
import { getDataById } from '@/lib/getDataByid'

import NewSupplier from '../../new/page'
export default async function Update({params:id}) {
  
    const data=await getDataById('Supplier',id)
    console.log('from form err',data,id)
    
  return (


      <NewSupplier initialData={data} isupdate={true}/>
 
    
  )
}
