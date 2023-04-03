import React, { useEffect, useState } from "react";
import "./profile.css";
import { Link } from "react-router-dom";

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
    <div>
      <h1>Personal Profile</h1>
      <div className="profile">
        <div class="card shadow-sm">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0">Account Information</h3>
          </div>
          <div class="card-body pt-0">
            <table class="table table-bordered">
              <tr>
                <th width="40%">User ID</th>
                <td width="2%">:</td>
                <td>1155123456</td>
              </tr>
              <tr>
                <th>Username</th>
                <td>:</td>
                <td>chantaiming</td>
              </tr>
              <tr>
                <th>Password</th>
                <td>:</td>
                <td>12345678</td>
              </tr>
            </table>
            <Link to="/changePW">
              <button className="custom-btn b-profile">Change Password</button>
            </Link>
          </div>
        </div>

        <div class="card shadow-sm" id="p2">
          <div class="card-header bg-transparent border-0">
            <h3 class="mb-0">General Information</h3>
          </div>
          <div class="card-body pt-0">
            <table class="table table-bordered">
              <tr>
                <th width="40%">Name</th>
                <td width="2%">:</td>
                <td>Chan Tai Ming</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>:</td>
                <td>Male</td>
              </tr>
              <tr>
                <th>Major</th>
                <td>:</td>
                <td>Computer Science</td>
              </tr>
              <tr>
                <th>Year of Study</th>
                <td>:</td>
                <td>3</td>
              </tr>
              <tr>
                <th>Emergency Contact</th>
                <td>:</td>
                <td>12345678</td>
              </tr>
            </table>
            <Link to="/viewClass">
              <button className="custom-btn b-profile">View Class</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
