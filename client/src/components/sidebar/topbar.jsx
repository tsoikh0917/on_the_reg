import React from "react";
import "./topbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
function Topbar({ handleLogin }) {
  const userName = "Chan Tai Ming";
  const navigate = useNavigate();

  function handleLinkClick(link) {
    navigate(link);
  }
  return (
    <div id="my_topbar">
      <span id="block">
        <Dropdown style={{ height: "10%" }} >
          <DropdownButton id="dropdown-basic-button" title={userName}>
            <Dropdown.Item onClick={(event) => handleLinkClick("/profile")} id="dropdown_item">
              profile
            </Dropdown.Item>

            <Dropdown.Item onClick={(event) => handleLinkClick("/changePW")} id="dropdown_item">
              change password
            </Dropdown.Item>
            {/* todo: use redux auth to handle */}
            <Dropdown.Item onClick={(event) => handleLogin(false)} id="dropdown_item">
              logout
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </span>
    </div>
  );
}

export default Topbar;
