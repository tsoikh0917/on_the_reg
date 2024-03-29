import React, { useEffect, useState } from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getStudent } from "../../redux/actions/studentAction";

// this function is used to show the student's profile
function Profile() {
  const [name, setName] = useState("Chan Tai Ming");
  const [id, setID] = useState("1155123456");
  const [major, setMajor] = useState("Computer Science");
  const [year, setYear] = useState(3);
  const student = useSelector((state) => state.student);
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {}, []);

  // html part
  return (
    <div>
      <h1>Personal Profile</h1>
      <div className="profile">
        <div className="card shadow-sm" id="p2">
          <div className="card-header bg-transparent border-0">
            <h3 className="mb-0">General Information</h3>
          </div>
          <div className="card-body pt-0">
            <table className="table table-bordered">
              <tr>
                <th width="40%">User ID</th>
                <td width="2%">:</td>
                <td>{user.userID}</td>
              </tr>
              <tr>
                <th width="40%">Name</th>
                <td width="2%">:</td>
                <td>{user.username}</td>
              </tr>
              <tr>
                <th>Gender</th>
                <td>:</td>
                <td>{user.gender}</td>
              </tr>
              <tr>
                <th>Major</th>
                <td>:</td>
                <td>{user.major}</td>
              </tr>
              <tr>
                <th>Year of Study</th>
                <td>:</td>
                <td>{user.yearOfStudy}</td>
              </tr>
              <tr>
                <th>Emergency Contact</th>
                <td>:</td>
                <td>{user.emergencyContact}</td>
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
