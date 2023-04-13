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
  let userInfo = JSON.parse(JSON.stringify(user[0]));

  console.log(userInfo);

  const [formData, setFormData] = useState({
    name: userInfo["name"],
    userID: userInfo["userID"],
    //dob: "",
    gender: userInfo["gender"],
    major: userInfo["major"],
    //department: userInfo.Department,
    yearOfStudy: userInfo["yearOfStudy"],
    email: userInfo["email"],
    emergencyContact: userInfo["emergencyContact"],
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
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
          <h4 id="inputT">Name:</h4>
          <input
            placeholder="Input name here"
            type="text"
            tabIndex="1"
            name="name"
            id="name"
            onChange={handleInputChange}
            defaultValue={userInfo["name"]}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>ID:</h4>
          <input
            placeholder="Input ID here"
            type="number"
            tabIndex="2"
            name="ID"
            id="ID"
            onChange={handleInputChange}
            defaultValue={userInfo["userID"]}
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
            placeholder="Input gender here"
            type="text"
            tabIndex="4"
            name="gender"
            id="gender"
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
            tabIndex="5"
            name="major"
            id="major"
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
              tabIndex="7"
              name="year"
              id="year"
              onChange={handleInputChange}
              defaultValue={userInfo["yearOfStudy"]}
              required
            ></input>
          </fieldset>
          <h4>Email:</h4>
          <input
            placeholder="Input email address here"
            type="email"
            tabIndex="8"
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
            tabIndex="9"
            name="emergencyContact"
            id="contact"
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

export default AdminEditUser;
