import React, { useState } from "react";
import icon from "../image/icon.png";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";

// admin sidebar
function ASideBar() {

  // html part
  return (
    <div id="side">
      <Sidebar style={{ height: "100%", position: "absolute" }} className="si">
        <main>
          <Menu>
            <MenuItem
              icon={<img src={icon} width="100%" alt="icon" />}
              component={<Link to="/" />}
              id="ts"
            >
              <span id="s">On The Reg</span>
            </MenuItem>
            <MenuItem
              icon={<FaCalendarAlt />}
              component={<Link to="/aViewCourse" />}
            id = "bar_component">
              Manage Course
            </MenuItem>
            <MenuItem icon={<FaUserAlt />} component={<Link to="/aViewUser" />} id = "bar_component">
              Manage User
            </MenuItem>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}

export default ASideBar;
