import React from "react";
import icon from "../image/icon.png";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUserAlt,
} from "react-icons/fa";

function ASideBar() {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        width: "20%",
        position: "relative",
      }}
      class="side"
    >
      <Sidebar>
        <div class="header" style={{ display: "flex", alignItems: "center" }}>
          <img src={icon} width="20%" alt="icon" />
          <t1>On The Reg</t1>
        </div>
        <Menu>
          <MenuItem
            icon={<FaCalendarAlt />}
            component={<Link to="/aViewCourse" />}
          >
            Manage Course
          </MenuItem>
          <MenuItem
            icon={<FaUserAlt />}
            component={<Link to="/aViewUser" />}
          >
            Manage User
          </MenuItem>
        </Menu>
      </Sidebar>
      <main></main>
    </div>
  );
}

export default ASideBar;
