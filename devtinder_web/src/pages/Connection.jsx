import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connection = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connection);

  const getConnections = async () => {
    try {
      const connection = await axios.get(
        `${BASE_URL}/user/request/connections`,
        { withCredentials: true },
      );
      dispatch(addConnections(connection.data.data));
      console.log("Connections ", connection.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  if (!connections) return <h1> Loading ...</h1>;
  if (connections.length === 0) return <h1> No connections Found </h1>;

  return (
    <div className="text-center my-10 ">
      <h1 className="text-bold text-white  text-3xl"> Connections</h1>
      {connections.map((connection, index) => {
        const { firstName, lastName, photo, age, gender, skill } = connection;
        return (
          <div className="flex mx-auto p-4 rounded-lg bg-base-300 w-1/2 m-4" key={connection._id || index}>
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

export default Connection;
