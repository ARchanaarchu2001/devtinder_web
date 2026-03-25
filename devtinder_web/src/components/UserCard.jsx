import React from 'react'

const UserCard = ({ user }) => {
  console.log("user in card ", user);

  if (!user) return <p>Loading...</p>;

  const { firstName, lastName, city, photo, age, gender } = user;

  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={photo} alt={firstName}   className="w-full h-70 object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName + " " + lastName}
        </h2>
        <p>{city}</p>
        <p>{age + " " + gender}</p>
        <div className="card-actions justify-center ">
          <button className="btn btn-primary">Ignore</button>
          <button className="btn btn-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard
