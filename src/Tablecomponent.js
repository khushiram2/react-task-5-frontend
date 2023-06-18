import { Create, DeleteForever } from '@mui/icons-material';
import axios from 'axios';
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Api } from './GlobalApi';

export const Tablecomponent = ({ data }) => {
const navigate=useNavigate()
const location=useLocation()
const handleDelete=(item)=>{
    if(item.type==="teacher"){
        axios.delete(`${Api}/teacher/delete/${item._id}`)
        .then((res)=>console.log(res))
    }else{
        axios.delete(`${Api}/student/delete/${item._id}`)
        .then((res)=>console.log(res))
    }
}
    return (
        <>
        <table className="custom-table">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    {data[0]?.type==="teacher"?(<th>Assigned class</th>):(<th>Class</th>)}
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item,i) => (
                    <tr key={item._id}>
                        <td>{i+1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.type==="teacher"? item.assignedClass:item.claass}</td>
                        <td>
                            <button onClick={()=>(location.pathname=="/allstudents")?navigate(`/editstudent/${item._id}`):navigate(`/editteacher/${item._id}`)} className="edit-button"> 
                            <span className="button-icon">
                                <Create fontSize='small' />
                            </span>
                                <span className="button-text">Edit</span> </button>
                        </td>
                        <td>
                            <button onClick={()=>handleDelete(item)} className="delete-button"> 
                            <span className="button-icon">
                                <DeleteForever fontSize='small' />
                            </span>
                                <span className="button-text">Delete</span> </button>
                        </td>
                    </tr>
                   
                ))}
            </tbody>
        </table>
        <button onClick={()=>(location.pathname=="/allstudents")?navigate(`/createstudent`):navigate(`/createteacher`)} className='add-button'>ADD New</button>
        </>
    );
}
