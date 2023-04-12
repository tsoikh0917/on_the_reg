import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminProfile() {
  const [name, setName] = useState("Chan Tai Ming");
  const [id, setID] = useState("1155123456");
  const [major, setMajor] = useState("Computer Science");
  const [year, setYear] = useState(3);

  const [profileInfo, setProfileInfo] = useState([]);
  useEffect(() => {
    axios
      .get("")
      .then((response) => setProfileInfo(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Personal Profile</h1>
      <div className="profile">
        <div class="card shadow-sm" style={{ minWidth: "500px" }}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
