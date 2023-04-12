import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../form.css";
import axios from "axios";

function AdminEditUser() {
  const navigate = useNavigate();
  const { type } = useParams();
  const location = useLocation().state;
  let userInfo = JSON.parse(JSON.stringify(location.userInfo));
  const [uInfo, setUInfo] = useState([]);
  useEffect(() => {
    axios
      .get("")
      .then((response) => setUInfo(response.data))
      .catch((error) => console.log(error));
  }, []);
  const [formData, setFormData] = useState({
    name: userInfo.Name,
    ID: userInfo.ID,
    dob: "",
    gender: "",
    major: userInfo.Major,
    department: userInfo.Department,
    year: userInfo.Year,
    email: "",
    contact: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/contact", formData);
      console.log(response.data);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div id="resize">
      <form id="form_info" onSubmit={handleSubmit}>
        <div id="main">
          <h1 id="alignLeft">Edit User</h1>
          <button onClick={() => navigate(-1)} className="custom-fbtn fbtn">
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
            defaultValue={userInfo.Name}
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
            defaultValue={userInfo.ID}
            required
          ></input>
        </fieldset>
        <fieldset>
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
        </fieldset>
        <fieldset>
          <h4>Gender:</h4>
          <input
            placeholder="Input gender here"
            type="text"
            tabIndex="4"
            name="gender"
            id="gender"
            onChange={handleInputChange}
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
            defaultValue={userInfo.Major}
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Department:</h4>
          <input
            placeholder="Input study major here"
            type="text"
            tabIndex="6"
            name="department"
            id="department"
            onChange={handleInputChange}
            defaultValue={userInfo.Department}
            required
          ></input>
        </fieldset>
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
              defaultValue={userInfo.Year}
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
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Contact Number:</h4>
          <input
            placeholder="Input phone number here"
            type="number"
            tabIndex="9"
            name="contact"
            id="contact"
            onChange={handleInputChange}
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
