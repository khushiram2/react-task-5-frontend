import axios from 'axios';
import React from 'react'
import { Api } from './GlobalApi';

export const CreateStudent = () => {
  const [formData, setFormData] = React.useState({
    type:"student",
    name: '',
    email: '',
    claass:'',
    phoneNumber: ''
  });

  const { name, email,  claass , phoneNumber,type  } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${Api}/students`,{studentData:formData})
    .then((res)=>console.log(res))
    .then(()=>setFormData({
      type:type,
      name: '',
      email: '',
      claass:'',
      phoneNumber: ''
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
        <label htmlFor="claass">Class:</label>
        <input
        type='text'
          id="claass"
          name="claass"
          value={claass}
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
      <button type="submit">Submit</button>
    </form>
  )
}
