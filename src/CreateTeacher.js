import axios from 'axios';
import React from 'react'
import { Api } from './GlobalApi';

export const CreateTeacher = () => {
  const [formData, setFormData] = React.useState({
    type:"teacher",
    name: '',
    email: '',
    phoneNumber: '',
    assignedClass: ''
  });

  const { name, email, phoneNumber,assignedClass,type  } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${Api}/teacher`,{teacherData:formData})
    .then((res)=>console.log(res))
    .then(()=>setFormData({
      type:type,
      name: '',
      email: '',
      phoneNumber: '',
      assignedClass: ''
    }))
    
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
          onChange={(e)=>handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e)=>handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
        type='tel'
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e)=>handleChange(e)}
        />
      </div>
      <div>
        <label htmlFor="assignedClass">Assigned Class:</label>
        <input
        type='tel'
          id="assignedClass"
          name="assignedClass"
          value={assignedClass}
          onChange={(e)=>handleChange(e)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}
