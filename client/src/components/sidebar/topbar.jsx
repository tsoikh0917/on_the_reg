import React, { useEffect } from "react";
import "./topbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogoutWithAuth, getUserLoginStatusWithAuth } from "../../redux/actions/authAndUserAction";

function Topbar({ handleLogin }) {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = user.name;

  useEffect(() => {
    dispatch(getUserLoginStatusWithAuth());
  }, []);

  function handleLinkClick(link) {
    navigate(link);
  }

  function handleLogout() {
    console.log("logout");
    dispatch(userLogoutWithAuth())
    navigate("/");
  }

  return (
    <div id="my_topbar">
      <span id="block">
        <Dropdown style={{ height: "10%" }}>
          <DropdownButton id="dropdown-basic-button" title={userName}>
            <Dropdown.Item
              onClick={(event) => handleLinkClick("/studProfile")}
              id="dropdown_item"
            >
              profile
            </Dropdown.Item>

            {/* todo: use redux auth to handle */}
            <Dropdown.Item
              onClick={() => handleLogout()}
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
