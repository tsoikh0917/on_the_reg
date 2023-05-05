import React from "react";
import icon from "../image/icon.png";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./sidebar.css";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaCalendarAlt,
  FaReadme,
  FaRegistered,
} from "react-icons/fa";

// student sidebar
function SSideBar() {

  // html part
  return (
    <div id="side">
      <Sidebar style={{ height: "100%", position: "absolute" }} className="si">
        <Menu>
          <MenuItem
            icon={<img src={icon} width="100%" alt="icon" />}
            component={<Link to="/" />}
            id="ts"
          >
            <span id="s" className="header">
              On The Reg
            </span>
          </MenuItem>
          <MenuItem
            id="st"
            icon={<FaReadme />}
            component={<Link to="/viewClass" />}
          >
            View/Drop Class
          </MenuItem>
          <MenuItem
            id="st"
            icon={<FaCalendarAlt />}
            component={<Link to="/classSchedule" />}
          >
            Class Planner
          </MenuItem>
          <MenuItem
            id="st"
            icon={<FaSearch />}
            component={<Link to="/search" />}
          >
            Add Class
          </MenuItem>

          <MenuItem
            id="st"
            icon={<FaRegistered />}
            component={<Link to="/enrollment" />}
          >
            Enrollment Status
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SSideBar;
