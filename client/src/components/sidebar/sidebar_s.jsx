import React from "react";
import icon from "../image/icon.png";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaCalendarAlt,
  FaReadme,
  FaRegTrashAlt,
  FaRegistered,
} from "react-icons/fa";

function SSideBar() {
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
        <Link to="/" style={{ textDecoration: "none" }}>
          <div class="header" style={{ display: "flex", alignItems: "center" }}>
            <img src={icon} width="20%" alt="icon" />
            <t1>On The Reg</t1>
          </div>
        </Link>
        <Menu>
          <MenuItem icon={<FaReadme />} component={<Link to="/viewClass" />}>
            View Class
          </MenuItem>
          <MenuItem
            icon={<FaCalendarAlt />}
            component={<Link to="/classSchedule" />}
          >
            Class Schedule
          </MenuItem>
          <MenuItem icon={<FaSearch />} component={<Link to="/search" />}>
            Add Class
          </MenuItem>
          <MenuItem
            icon={<FaRegTrashAlt />}
            component={<Link to="/viewClass" />}
          >
            Drop Class
          </MenuItem>
          <MenuItem
            icon={<FaRegistered />}
            component={<Link to="/enrollment" />}
          >
            Enrollment Status
          </MenuItem>
        </Menu>
      </Sidebar>
      <main></main>
    </div>
  );
}

export default SSideBar;
