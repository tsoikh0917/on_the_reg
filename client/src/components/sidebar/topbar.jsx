import React from "react";
import "./topbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
function Topbar() {
  const userName = "Chan Tai Ming";
  return (
    <body>
      <h2 id="block">
        <Dropdown>
          <DropdownButton id="dropdown-basic-button" title={userName}>
            <Dropdown.Item href="/profile">profile</Dropdown.Item>
            <Dropdown.Item href="/changePW">change password</Dropdown.Item>
            <Dropdown.Item href="/login">logout</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </h2>
    </body>
  );
}

export default Topbar;
