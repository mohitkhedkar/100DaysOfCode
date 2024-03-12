import React from "react";
import profilePic from "./assets/ProfilePicturePhoto.jpg";

function Card() {
  return (
    <div className="card">
      <img className="profilePic" src={profilePic} alt="profile pic" />
      <h1>Mohit Khedkar</h1>
      <p>Currently Learning React</p>
    </div>
  );
}

export default Card;
