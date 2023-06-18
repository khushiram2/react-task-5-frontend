import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Api } from './GlobalApi';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, count }) =>{ 
  const navigate =useNavigate()
return (
  <div onClick={()=>navigate(`/all${title}`)} className="card">
    <h3 className="card-title">{title}</h3>
    <p className="card-count">{count}</p>
  </div>
)
}


export const Dashboard = () => {
  const [teacher,setTeacher]=useState([])
  const [student,setStudent]=useState([])
  
  useEffect(()=>{
    axios.get(`${Api}/allteachers`)
    .then((res)=>setTeacher(res.data))
    axios.get(`${Api}/allstudents`)
    .then((res)=>setStudent(res.data))
  },[])
  return (
 <div className='dashboard'>
 <div className='cardcontainer'>
 <Card title={"Teachers"} count={`Total ${teacher.length}`}/>
 <Card title={"Students"} count={`Total ${student.length}`}/>
 </div>
 <br/>
 <br/>
 <br/>
 <br/>
 <div className='instructions'>
  <h1>
    Instructions
  </h1>
  <h4> 1. click on teachers to see all the teachers </h4>
  <h4> 2. click on students to see all the students </h4>
  <h4> 3. i have assigned a teacher to a class and there are certain number of students in the class so if <br/>
     you want to assign a teacher to a student just change the class of the student from edit student   </h4>
  <h4> 4. you will find edit student option once you click on students either from dashboard or from sidebar</h4>
  <h4> 5. you can also delete a student or a teacher from all student and all teachers table</h4>
 </div>
 </div>
    )
}
