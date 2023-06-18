import React, { useEffect, useState } from 'react'
import { Tablecomponent } from './Tablecomponent';
import axios from 'axios';
import { Api } from './GlobalApi';

export const AllTeachers = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get(`${Api}/allteachers`)
    .then((res)=>setData(res.data))
   
  },[])
  return (
<Tablecomponent data={data}/>
  );
}



