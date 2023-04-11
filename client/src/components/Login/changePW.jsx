import React from "react";
import "./changePW.css";
function ChangePW() {
  return (
    <div>
      <div id="spacing">
        <form className="changePW">
          <h1>Change Password</h1>
          <label for="current-password">Current Password:</label>
          <input
            type="password"
            id="current-password"
            name="current-password"
            required
          />

          <label for="new-password">New Password:</label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            required
          />

          <label for="confirm-password">Confirm New Password:</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            required
          />

          <input type="submit" value="Change Password" />
        </form>
      </div>
    </div>
  );
}

export default ChangePW;
