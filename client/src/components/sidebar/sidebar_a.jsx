import React from "react";
import icon from "../image/icon.png";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";

function ASideBar() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "20%",
        position: "relative",
      }}
      className="side"
    >
      <Sidebar>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div
            className="header"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={icon} width="20%" alt="icon" />
            <h2>On The Reg</h2>
          </div>
        </Link>
        <Menu>
          <MenuItem
            icon={<FaCalendarAlt />}
            component={<Link to="/aViewCourse" />}
          >
            Manage Course
          </MenuItem>
          <MenuItem icon={<FaUserAlt />} component={<Link to="/aViewUser" />}>
            Manage User
          </MenuItem>
        </Menu>
      </Sidebar>
      <main></main>
    </div>
  );
}

export default ASideBar;
