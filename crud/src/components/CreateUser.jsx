import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function CreateUser() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const [role, setRole] = useState()
  const [native, setNative] = useState()
  const [phone, setPhone] = useState()
  const [location, setLocation] = useState()
  const [address, setAddress] = useState()
 
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/create', {name, email, age,role,native,phone,location,address})
    .then(res => {
      console.log(res)
      navigate('/display')
    
    } )
    .catch(err => console.log(err))
}

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Add User</h2>
          <div className="mb-2">
            <label htmlFor="">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Age</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Phone Number</label>
            <input
              type="text"
              placeholder="Enter Age"
              className="form-control"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Job Role</label>
            <input
              type="text"
              placeholder="Enter Role"
              className="form-control"
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Address</label>
            <input
              type="text"
              placeholder="Enter Address"
              className="form-control"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Native Place</label>
            <input
              type="text"
              placeholder="Enter Native Place"
              className="form-control"
              onChange={(e) => setNative(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Location</label>
            <input
              type="text"
              placeholder="Enter Location"
              className="form-control"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
