import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests } from '../utils/requestSlice'

const Requests = () => {

    const dispatch = useDispatch();
  const request = useSelector((store) => store.request)
    const getRequests = async () => {
        try {

            const res = await axios.get(`${BASE_URL}/user/request/received`,  {  withCredentials :true })
           dispatch(addRequests(res.data.data))

        }
        catch (err) {
            console.error("Error fetching requests ", err)
        }
    }

    useEffect(() => {
        getRequests();
    }, [])


    if(!request) return <h1> Loading ....</h1>
    if( request.length === 0 ) return <h1> No requests found </h1>
    
  return (
    <div>
      request page
    </div>
  )
}

export default Requests
