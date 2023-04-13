import React from "react";
import "./topbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogoutWithAuth } from "../../redux/actions/authAndUserAction";

function Topbar({ handleLogin }) {
  const userName = "Chan Tai Ming";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLinkClick(link) {
    navigate(link);
  }

  function handleLogout() {
    dispatch(userLogoutWithAuth())
  }

  return (
    <div id="my_topbar">
      <span id="block">
        <Dropdown style={{ height: "10%" }}>
          <DropdownButton id="dropdown-basic-button" title={userName}>
            <Dropdown.Item
              onClick={(event) => handleLinkClick("/stuProfile")}
              id="dropdown_item"
            >
              profile
            </Dropdown.Item>

            {/* todo: use redux auth to handle */}
            <Dropdown.Item
              onClick={(event) => handleLogin(false)}
              id="dropdown_item"
            >
              logout
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </span>
    </div>
  );
}

export default Topbar;
