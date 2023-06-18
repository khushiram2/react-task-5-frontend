import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Api } from './GlobalApi';
import { useParams } from 'react-router-dom';



export const Editteacher = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    assignedClass: ''
  });
  const {teacherId}=useParams()
  useEffect(()=>{
    axios.get(`${Api}/teacher/${teacherId}`)
    .then((res)=>setFormData(res.data))
  },[])


  const { name, email, phoneNumber, assignedClass } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`${Api}/teacher/edit/${teacherId}`, { teacherData:formData })
      .then((res) => console.log(res))

  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type='tel'
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="assignedClass">Assigned Class:</label>
        <input
          type='tel'
          id="assignedClass"
          name="assignedClass"
          value={assignedClass}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

