import axios from 'axios';
import React, { useState } from 'react'
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';
import UserCard from './UserCard';

const EditProfile = () => {
    const user = useSelector((store) => store.user)
const [firstName, setFirstName] = useState(user.firstName);
const [lastName, setLastName] = useState(user.lastName);
const [email, setEmail] = useState(user.email);
const [age, setAge] = useState(user.age);
const [photo, setPhoto ] = useState(user.photo)
const [city, setCity] = useState(user.city);
const [error, setError] = useState("");
const [skill, setSkill] = useState(user.skill);
const [gender, setGender] = useState(user.gender);
const [success, setSuccess] = useState(false);

const dispatch = useDispatch();

const SaveProfile = async () => {
   
    try{
         setError("")
        const res = await axios.patch(`${BASE_URL}/profile/update`, { firstName, lastName, email, age, photo, city, skill, gender }, { withCredentials: true })
        dispatch(addUser(res?.data?.data))
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 3000)
    }
    catch(err) {
        console.log(err.response?.data)
        setError(err.message || "Something went wrong")
    }
}

  return (
    <div className='flex justify-center m-10 gap-10'>
       <div>
     <div className="card card-border bg-base-300 w-96">
  <div className="card-body">
    <h2 className="card-title justify-center py-3">Edit Profile</h2>
    <div>
      <fieldset className="fieldset">
  <legend className="fieldset-legend">First Name</legend>
  <input type="text" className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" />
 
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Last Name </legend>
  <input type="text" className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" />
 
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
 
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">Age</legend>
  <input type="text" className="input" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Enter your age" />
 
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Photo </legend>
  <input type="text" className="input" value={photo} onChange={(e) => setPhoto(e.target.value)} placeholder="Enter your photo URL" />
 
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">City</legend>
  <input type="text" className="input" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter your city" />
 </fieldset>

 <fieldset className="fieldset">
  <legend className="fieldset-legend">Skill </legend>
  <input type="text" className="input" value={skill} onChange={(e) => setSkill(e.target.value)} placeholder="Enter your skill" />
 
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Gender</legend>
  <select
  className='select select-border w-full'
  value={gender}
  onChange={(e) => setGender(e.target.value)}>
    <option value="" disabled>Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
  
 </fieldset>
    </div>
   <p className='text-red-600'>{error}</p>
    <div className="card-actions justify-center pt-3">
      
      <button className="btn btn-primary" onClick={SaveProfile}>Save Profile</button>
    </div>
  </div>
</div>
    </div>

    <div>
        <UserCard user={{firstName, lastName, photo, city, age, gender }}/>
    </div>

    {success &&<div className="toast toast-top ">
 
  <div className="alert alert-success">
    <span>Profile updated successfully.</span>
  </div>
</div>}
    </div>
  )
}

export default EditProfile
