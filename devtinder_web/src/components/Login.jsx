import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {

  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate();
  

  const handleLogin =async  () => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, { email, password }, { withCredentials: true });
      console.log("Login Successful ")
      dispatch(addUser(res.data))
      navigate("/feed")
    }
    catch (error) {
      setError(error.response?.data || "Something went wrong")
    }
  }


  return (
    <div className='flex justify-center m-10'>
     <div className="card card-border bg-base-300 w-96">
  <div className="card-body">
    <h2 className="card-title justify-center py-3">Login</h2>
    <div>
      <fieldset className="fieldset">
  <legend className="fieldset-legend">Email ID</legend>
  <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
 
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="text" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
 
</fieldset>
    </div>
   <p className='text-red-600'>{error}</p>
    <div className="card-actions justify-center pt-3">
      
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
