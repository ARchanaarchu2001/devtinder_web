import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate();
  

  const handleLogin =async  () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/login", { email, password }, { withCredentials: true });
      console.log("Login Successful ")
      dispatch(addUser(res.data))
      navigate("/feed")
    }
    catch (error) {
    console.error("Login Failed ", error )
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
  <input type="password" className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
 
</fieldset>
    </div>
   
    <div className="card-actions justify-center pt-3">
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login
