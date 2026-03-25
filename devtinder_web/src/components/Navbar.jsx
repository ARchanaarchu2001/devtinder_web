
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { removeUser } from '../utils/userSlice'



function Navbar() {

  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
       await axios.post(`${BASE_URL}/auth/logout`, {}, { withCredentials: true })
       dispatch(removeUser())
       navigate("/login")

    }
    catch (err)
    {
      console.error("Logout Failed " , err)
    }
  }

  return (
   <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <Link to="/" className="btn btn-ghost text-xl">💻 DevTinder</Link>
  </div>
  <div className="flex gap-2">
    {/* Search  Bar */}
    {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
  { user && (
    
    <div className='flex items-center '>
  <p>Welcome , {user.firstName + " " + user.lastName}</p>
    <div className="dropdown dropdown-end mx-5">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={user.photo} />
      </div>
    </div>
    <ul
      tabIndex="-1"
      className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      <li>
        <Link to="/profile" className="justify-between">
          Profile
        </Link>
      </li>
      <li><a>Settings</a></li>
      <li><a onClick={handleLogout}>Logout</a></li>
    </ul>
  </div>
  </div>)}
  </div>
</div>
  )
}

export default Navbar