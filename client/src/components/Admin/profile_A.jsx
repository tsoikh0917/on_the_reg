import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAdminByUsername } from "../../redux/actions/adminAction";

function AdminProfile() {
  const auth = useSelector((state) => state.auth.name);
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdminByUsername(auth));
  }, []);
  const [profileInfo, setProfileInfo] = useState({});
  useEffect(() => {
    if(admin.length == 1){
      setProfileInfo(JSON.parse(JSON.stringify(admin[0])));
    }
  }, [admin]);

  if (profileInfo != undefined) {

    return (
      <div>
        <h1>Personal Profile</h1>
        <div className="profile">
          <div className="card shadow-sm" style={{ minWidth: "500px" }}>
            <div className="card-header bg-transparent border-0">
              <h3 className="mb-0">Account Information</h3>
            </div>
            <div className="card-body pt-0">
              <table className="table table-bordered">
                <tr>
                  <th width="40%">User ID</th>
                  <td width="2%">:</td>
                  <td>{profileInfo.userID}</td>
                </tr>
                <tr>
                  <th>Username</th>
                  <td>:</td>
                  <td>{profileInfo.username}</td>
                </tr>
              </table>
              {/*<Link to="/changePW">
                <button className="custom-btn b-profile">Change Password</button>
              </Link>*/}
            </div>
          </div>

          <div className="card shadow-sm" id="p2">
            <div className="card-header bg-transparent border-0">
              <h3 className="mb-0">General Information</h3>
            </div>
            <div className="card-body pt-0">
              <table className="table table-bordered">
                <tr>
                  <th width="40%">Name</th>
                  <td width="2%">:</td>
                  <td>{profileInfo.name}</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>:</td>
                  <td>{profileInfo.gender}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>:</td>
                  <td>{profileInfo.email}</td>
                </tr>
                {/*<tr>
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
  </tr>*/}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminProfile;
