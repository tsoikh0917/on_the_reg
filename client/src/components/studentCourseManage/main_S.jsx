import React from "react";
import "./main_S.css";
import icon from "../image/icon.png";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaCalendarAlt,
  FaReadme,
  FaRegistered,
} from "react-icons/fa";
function MainS() {
  return (
    <div>
      <div id="main_icon">
        <img src={icon} width="20%" alt="icon" />
      </div>

      <div className="card-container">
        <div className=" image-button">
          <Link to="/viewClass" style={{ textDecoration: "none" }}>
            <div class="cardA">
              <h1 class="main_h1">View Course</h1>
              <p>You can search Class here!</p>
            </div>
          </Link>
        </div>

        <div className="image-container">
          <Link to="/viewClass" style={{ textDecoration: "none" }}>
            <div class="card3">
              <h1 class="main_h1">View Course</h1>
              <FaSearch size={50} className="main_image" />
            </div>
          </Link>
        </div>
        <div className=" image-button2">
          <Link to="/classSchedule" style={{ textDecoration: "none" }}>
            <div class="cardB">
              <h1 class="main_h1">Class Schedule</h1>
              <p>You can search Class here!</p>
            </div>
          </Link>
        </div>
        <div className="image-container2">
          <Link to="/classSchedule" style={{ textDecoration: "none" }}>
            <div class="card4">
              <h1 class="main_h1">Class Schedule</h1>
              <FaSearch size={50} className="main_image" />
            </div>
          </Link>
        </div>
        <div className=" image-button3">
          <Link to="/search" style={{ textDecoration: "none" }}>
            <div class="cardC">
              <h1 class="main_h1">Search Course</h1>
              <p>You can search Class here!</p>
            </div>
          </Link>
        </div>
        <div className="image-container3">
          <Link to="/search" style={{ textDecoration: "none" }}>
            <div class="card5">
              <h1 class="main_h1">Search Course</h1>
              <FaSearch size={50} className="main_image" />
            </div>
          </Link>
        </div>
        <div className=" image-button4">
          <Link to="/enrollment" style={{ textDecoration: "none" }}>
            <div class="cardD">
              <h1 class="main_h1">Enrollment Status</h1>
              <p>You can search Class here!</p>
            </div>
          </Link>
        </div>
        <div className="image-container4">
          <Link to="/enrollment" style={{ textDecoration: "none" }}>
            <div class="card6">
              <h1 class="main_h1">Enrollment Status</h1>
              <FaSearch size={50} className="main_image" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainS;
