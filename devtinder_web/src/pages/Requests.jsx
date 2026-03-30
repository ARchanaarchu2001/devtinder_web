import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const request = useSelector((store) => store.request);
  const getRequests = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/request/received`, {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.error("Error fetching requests ", err);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  if (!request) return <h1> Loading ....</h1>;
  if (request.length === 0) return <h1> No requests found </h1>;

   return (
    <div className="text-center my-10 ">
      <h1 className="text-bold text-white  text-3xl"> Request</h1>
      {request.map((request, index) => {
        const { firstName, lastName, photo, age, gender, skill } = request.fromUserId;
        return (
          <div className="flex mx-auto p-4 rounded-lg bg-base-300 w-1/2 m-4" key={request._id || index}>
            <div>
              <img alt="photo" className="w-20 h-20 rounded-full" src={photo} />
            </div>

            <div className="mx-4 text-left">
              <h2 className="font-bold text-2xl"> {firstName + " " + lastName} </h2>
              <p> {skill} </p>
            {age && gender && <p> {age + " " + gender}</p>} 
            </div>
          </div>
        );
      })} 
    </div>
  );
};

export default Requests;
