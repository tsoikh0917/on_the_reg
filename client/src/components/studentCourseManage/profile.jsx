import React, { useEffect, useState } from "react";
import "./profile.css";

function Profile() {
  const [name, setName] = useState("Chan Tai Ming");
  const [id, setID] = useState("1155123456");
  const [major, setMajor] = useState("Computer Science");
  const [year, setYear] = useState(3);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/student/3")
      .then((res) => res.json())
      .then((data) => {
        setName(data[0].name);
        setID(data[0].userID);
        setMajor(data[0].major);
        setYear(data[0].yearOfStudy);
      })
      .catch((error) => {
        console.error(error);
      }, []);
  });

  return (
    <div className="profile">
      <h1>Personal Profile</h1>
      <div id="BorderStyle">
        <div id="listStyle">
          <li>
            <div id="prefix">Name:</div>
            <div id="suffix">{name}</div>
          </li>
          <li>
            <div id="prefix">:</div>
            <div id="suffix">{name}</div>
          </li>
          <li>Gender: {name}</li>
          <li>Major: {major}</li>
          <li>ID: {id}</li>
          <li>Year: {year}</li>
          <li>Emergency Contact: {name}</li>
        </div>
      </div>
    </div>
  );
}

export default Profile;
