import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../utils/feedSlice'
import UserCard from './UserCard'

const Feed = () => {

    const dispatch = useDispatch();
    //read the feed 
 const feed = useSelector((store) => store.feed)

    const feedData = async () => {
      if (feed) return;
        try { 
            const res = await axios.get(`${BASE_URL}/user/feed`, { withCredentials: true })
            dispatch(addFeed(res.data))


        }
        catch (err)
        {
            console.error("Error fetching feed data ", err)
        }
    }

    useEffect(() => {
      feedData();
    },[feed])

  return (
    <div  className='flex justify-center my-10'>
    {feed &&  (
  <UserCard user={feed[0]} />
) 
  
}
    </div>
  )
}

export default Feed
