import React from "react";
import { Link } from "react-router-dom";
import icon from "../image/icon.png";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";
function MainA() {
  return (
    <div>
      <div>
        <div id="main_icon">
          <img src={icon} width="20%" alt="icon" />
        </div>

        <div className="card-container">
          <div className=" image-button3">
            <Link to="/search" style={{ textDecoration: "none" }}>
              <div class="cardC">
                <h1 class="main_h1">Manage Course</h1>
                <p>You can search Class here!</p>
              </div>
            </Link>
          </div>
          <div className="image-container3">
            <Link to="/search" style={{ textDecoration: "none" }}>
              <div class="card5">
                <h1 class="main_h1">Manage Course</h1>
                <FaCalendarAlt size={50} className="main_image" />
              </div>
            </Link>
          </div>
          <div className=" image-button4">
            <Link to="/enrollment" style={{ textDecoration: "none" }}>
              <div class="cardD">
                <h1 class="main_h1">Manage User</h1>
                <p>You can search Class here!</p>
              </div>
            </Link>
          </div>
          <div className="image-container4">
            <Link to="/enrollment" style={{ textDecoration: "none" }}>
              <div class="card6">
                <h1 class="main_h1">Manage User</h1>
                <FaUserAlt size={50} className="main_image" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainA;
