import React from "react";
import "./topbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
function Topbar({ handleLogin }) {
  const userName = "Chan Tai Ming";
  return (
    <div id="topbar">
      <h2 id="block">
        <Dropdown>
          <DropdownButton id="dropdown-basic-button" title={userName}>
            <Dropdown.Item href="/profile">profile</Dropdown.Item>
            <Dropdown.Item href="/changePW">change password</Dropdown.Item>
            <Dropdown.Item onClick={(event) => handleLogin(false)}>
              logout
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </h2>
    </div>
  );
}

export default Topbar;
