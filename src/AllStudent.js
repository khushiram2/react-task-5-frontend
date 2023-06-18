import React, { useEffect } from 'react'
import { Tablecomponent } from './Tablecomponent';
import axios from 'axios';
import { Api } from './GlobalApi';
export const AllStudent = () => {
const [data,setData]=React.useState([])
useEffect(()=>{
  axios.get(`${Api}/allstudents`)
  .then((res)=>setData(res.data))
},[])

  return (
<Tablecomponent data={data}/>
  );
}
