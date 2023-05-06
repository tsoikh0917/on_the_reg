import React from "react";
import "./topbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutWithAuth } from "../../redux/actions/authAndUserAction";

// student topbar
function Topbar({ handleLogin }) {
  const userName = "Chan Tai Ming";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));

  // get the auth from redux store
  const auth = useSelector((state) => state.auth.name);

  // handle the link click
  function handleLinkClick() {
    if(auth == "admin"){
      navigate("/profile");
    }else{
      navigate("/studProfile");
    }
  }

  // handle the logout
  function handleLogout() {
    console.log("logout");
    dispatch(userLogoutWithAuth());
    navigate("/");
  }

  // html part
  return (
    <div id="my_topbar">
      <span id="block">
        <Dropdown style={{ height: "10%" }}>
          <DropdownButton id="dropdown-basic-button" title={user.name}>
            <Dropdown.Item
              onClick={(event) => handleLinkClick()}
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

export default Topbar;
