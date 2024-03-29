import React from "react";
import "./topbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogoutWithAuth } from "../../redux/actions/authAndUserAction";

// admin topbar
function AdminTopbar({ handleLogin }) {
  const userName = "Chan Tai Ming";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  // handle the link click
  function handleLinkClick(link) {
    navigate(link);
  }

  // handle the logout
  function handleLogout() {
    console.log("logout");
    dispatch(userLogoutWithAuth());
  }

  // html part
  return (
    <div id="my_topbar">
      <span id="block">
        <Dropdown style={{ height: "10%" }}>
          <DropdownButton id="dropdown-basic-button" title={user.name}>
            <Dropdown.Item
              onClick={(event) => handleLinkClick("/profile")}
              id="dropdown_item"
            >
              profile
            </Dropdown.Item>

            <Dropdown.Item onClick={() => handleLogout()} id="dropdown_item">
              logout
            </Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </span>
    </div>
  );
}

export default AdminTopbar;
