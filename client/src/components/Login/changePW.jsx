import React, { useState } from "react";
import "./changePW.css";
import axios from "axios";
function ChangePW() {
  const [formData, setFormData] = useState({
    current_password: "",
    new_pw: "",
    confirm_pw: "",
  });
  const [dWrong, setDWrong] = useState(false);
  const [dWrong2, setDWrong2] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.new_pw === formData.confirm_pw) {
      try {
        const response = await axios.post("/api/contact", formData);
        console.log(response.data);
      } catch (error) {
        setDWrong(true);
        console.log(error);
      }
    } else {
      setDWrong2(true);
    }
  };
  return (
    <div>
      <div id="spacing">
        <form className="changePW" onSubmit={handleSubmit} id="space_for_form">
          <h1 id="topic">Change Password</h1>
          <label htmlFor="current-pw">Current Password:</label>
          <input
            type="password"
            id="current-password"
            name="current_pw"
            onChange={handleInputChange}
            required
          />

          <label htmlFor="new-pw">New Password:</label>
          <input
            type="password"
            id="new-password"
            name="new_pw"
            onChange={handleInputChange}
            required
          />

          <label htmlFor="confirm-pw">Confirm New Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm_pw"
            onChange={handleInputChange}
            required
          />
          <div>
            {dWrong && (
              <label style={{ diplay: "block", color: "red" }}>
                your current password is wrong
              </label>
            )}
            {dWrong2 && (
              <label style={{ diplay: "block", color: "red" }}>
                your confirm password is not the same{" "}
              </label>
            )}

            <input type="submit" name="submit" value="Change Password" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePW;
