import React, { useEffect, useState } from 'react'
import {ServiceTable} from "@modal";
import {ServiceModal} from "@modal";
import { Button } from '@mui/material';
import { service } from "@service";
const Index = () => {
  const [open, setOpen] = useState(false)
  const getData = async()=>{
    try{
      const response = await service.get()
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    getData()
  },[])
  return (
    <>
    <ServiceModal open={open} handleClose={()=>setOpen(false)} />
    <div className='flex flex-col gap-3' >
      <div className='flex justify-end' onClick={()=> setOpen(true)} ><Button variant='contained' type="primary">ADD</Button></div>
      <ServiceTable/>
    </div>
    </>
  )
}

export default Index