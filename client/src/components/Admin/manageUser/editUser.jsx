import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../form.css";
import { getStudent, updateStudent } from "../../../redux/actions/studentAction";
import { useDispatch, useSelector } from "react-redux";

function AdminEditUser() {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = useSelector((state) => state.student);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudent(id));
  }, []);

  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    if (user.length == 1) {
      setUserInfo(JSON.parse(JSON.stringify(user[0])));
    }
  }, [user]);

  const [formData, setFormData] = useState({
    name: "",
    userID: "",
    username: "",
    gender: "",
    major: "",
    yearOfStudy: "",
    email: "",
    emergencyContact: "",
  });

  useEffect(() => {
    console.log(userInfo);
    setFormData({
      name: userInfo.name,
      userID: userInfo.userID,
      username: userInfo.username,
      gender: userInfo.gender,
      major: userInfo.major,
      yearOfStudy: userInfo.yearOfStudy,
      email: userInfo.email,
      emergencyContact: userInfo.emergencyContact,
    });
    console.log(formData);
  }, [userInfo]);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const handleSubmit = async (event) => {
    console.log(formData)
    dispatch(updateStudent(userInfo["userID"], formData));
    window.history.back();
    event.preventDefault();

  };

  const handleClick = (event) => {
    event.preventDefault();
    navigate(-1);
  }
  console.log(userInfo);
  console.log(userInfo != undefined);
  if (userInfo != undefined) {
    return (
      <div id="resize">
        <form id="form_info" onSubmit={handleSubmit}>
          <div id="main">
            <h1 id="alignLeft">Edit User</h1>
            <button onClick={handleClick} className="custom-fbtn fbtn">
              <span>Back</span>
            </button>
          </div>
          <fieldset>
            <h4 id="inputT">User Name:</h4>
            <input
              placeholder="Input username here"
              type="text"
              tabIndex="1"
              name="username"
              id="username"
              maxLength={50}
              onChange={handleInputChange}
              defaultValue={userInfo["username"]}
              required
              disabled
            ></input>
          </fieldset>
          <fieldset>
            <h4 id="inputT">Name:</h4>
            <input
              placeholder="Input name here"
              type="text"
              tabIndex="2"
              name="name"
              id="name"
              maxLength={50}
              onChange={handleInputChange}
              defaultValue={userInfo["name"]}
              required
            ></input>
          </fieldset>
          {/*<fieldset>
          <h4>Date of Birth:</h4>
          <input
            placeholder="Input date of birth here"
            type="date"
            tabIndex="3"
            name="dob"
            id="dob"
            onChange={handleInputChange}
            required
          ></input>
  </fieldset>*/}
          <fieldset>
            <h4>Gender:</h4>
            <input
              placeholder="Input gender in F or M"
              type="text"
              tabIndex="3"
              name="gender"
              id="gender"
              pattern="^[FM]$"
              onChange={handleInputChange}
              defaultValue={userInfo["gender"]}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Major:</h4>
            <input
              placeholder="Input study major here"
              type="text"
              tabIndex="4"
              name="major"
              id="major"
              maxLength={50}
              onChange={handleInputChange}
              defaultValue={userInfo["major"]}
              required
            ></input>
          </fieldset>
          {/*<fieldset>
          <h4>Department:</h4>
          <input
            placeholder="Input study major here"
            type="text"
            tabIndex="6"
            name="department"
            id="department"
            onChange={handleInputChange}
            defaultValue={userInfo["Department"]}
            required
          ></input>
  </fieldset>*/}
          <fieldset>
            <fieldset>
              <h4>Year:</h4>
              <input
                placeholder="Input year of study here"
                type="number"
                tabIndex="5"
                name="yearOfStudy"
                id="yearOfStudy"
                max={6}
                onChange={handleInputChange}
                defaultValue={userInfo["yearOfStudy"]}
                required
              ></input>
            </fieldset>
            <h4>Email:</h4>
            <input
              placeholder="Input email address here"
              type="email"
              tabIndex="6"
              name="email"
              id="email"
              onChange={handleInputChange}
              defaultValue={userInfo["email"]}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Contact Number:</h4>
            <input
              placeholder="Input phone number here"
              type="number"
              tabIndex="7"
              name="emergencyContact"
              id="emergencyContact"
              maxLength={20}
              onChange={handleInputChange}
              defaultValue={userInfo["emergencyContact"]}
              required
            ></input>
          </fieldset>

          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              className="custom-btn btn"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AdminEditUser;
