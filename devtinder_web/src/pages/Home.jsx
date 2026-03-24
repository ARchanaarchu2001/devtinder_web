import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../utils/userSlice'

const Home = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user)
  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL + "/profile/view", { withCredentials : true})
      dispatch(addUser(res.data))
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate("/login");
        console.log("You need to login first")
      }
      console.error("Error fetching user profile:", error)
    }
  }

  useEffect(() => {
    if(!userData) {
      fetchUser();
    }
  },[])

  return (
   
        <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />

    </div>
  )
}

export default Home