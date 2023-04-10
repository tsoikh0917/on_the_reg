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
            <Link to="/aViewCourse" style={{ textDecoration: "none" }}>
              <div class="cardA">
                <h1 class="main_h1">Manage Course</h1>
                <p class="main_text">
                  You can add, edit or delete courses here
                </p>
              </div>
            </Link>
          </div>
          <div className="image-container3">
            <Link to="/aViewCourse" style={{ textDecoration: "none" }}>
              <div class="card3">
                <h1 class="main_h1">Manage Course</h1>
                <FaCalendarAlt size={50} className="main_image" />
              </div>
            </Link>
          </div>
          <div className=" image-button4">
            <Link to="/aViewUser" style={{ textDecoration: "none" }}>
              <div class="cardB">
                <h1 class="main_h1">Manage User</h1>
                <p className="main_text">
                  You can add, edit or delete users here
                </p>
              </div>
            </Link>
          </div>
          <div className="image-container4">
            <Link to="/aViewUser" style={{ textDecoration: "none" }}>
              <div class="card4">
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
