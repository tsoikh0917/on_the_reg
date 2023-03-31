import React, { useEffect, useState} from "react";

function Profile() {  
  const [name, setName] = useState(null);
  const [id, setID] = useState(null);
  const [major, setMajor] = useState(null);
  const [year, setYear] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/student/3")
      .then(res => res.json())
      .then(
        (data) => {
          setName(data[0].name);
          setID(data[0].userID);
          setMajor(data[0].major);
          setYear(data[0].yearOfStudy);
        }
      ).catch((error) => {
        console.error(error);
  }, [])})
  
  return (
    <div>
      <li>Name: {name}</li>
      <li>ID: {id}</li>
      <li>Major: {major}</li>
      <li>Year: {year}</li>
    </div>
  );
}

export default Profile;
