import React, { useState } from "react";
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
  const [checkHover, setCheckHover] = useState(false);
  const [checkHover2, setCheckHover2] = useState(false);
  const [checkHover3, setCheckHover3] = useState(false);
  const [checkHover4, setCheckHover4] = useState(false);
  function open(num) {
    if (num === 1) {
      setCheckHover(true);
    } else if (num === 2) {
      setCheckHover2(true);
    } else if (num === 3) {
      setCheckHover3(true);
    } else if (num === 4) {
      setCheckHover4(true);
    }
  }
  function close(num) {
    if (num === 1) {
      setCheckHover(false);
    } else if (num === 2) {
      setCheckHover2(false);
    } else if (num === 3) {
      setCheckHover3(false);
    } else if (num === 4) {
      setCheckHover4(false);
    }
  }
  return (
    <div>
      <div id="main_icon">
        <img src={icon} width="20%" alt="icon" />
      </div>

      <div className="card-container">
        <div onMouseEnter={() => open(1)} onMouseLeave={() => close(1)}>
          <Link to="/viewClass" style={{ textDecoration: "none" }}>
            <div className="cardA">
              <h1 className="main_h1">View Course</h1>
              {checkHover ? (
                <FaReadme size={50} className="main_image" />
              ) : (
                <p className="main_text">
                  You can check out the class that you have succesfully
                  registered
                </p>
              )}
            </div>
          </Link>
        </div>

        <div onMouseEnter={() => open(2)} onMouseLeave={() => close(2)}>
          <Link to="/classSchedule" style={{ textDecoration: "none" }}>
            <div className="cardB">
              <h1 className="main_h1">Schedule</h1>

              {checkHover2 ? (
                <FaCalendarAlt size={50} className="main_image" />
              ) : (
                <p className="main_text">
                  You can check out your weekly schedule
                </p>
              )}
            </div>
          </Link>
        </div>

        <div onMouseEnter={() => open(3)} onMouseLeave={() => close(3)}>
          <Link to="/search" style={{ textDecoration: "none" }}>
            <div className="cardC">
              <h1 className="main_h1">Search Course</h1>
              {checkHover3 ? (
                <FaSearch size={50} className="main_image" />
              ) : (
                <p className="main_text">
                  You can search for the classs that you want to register
                </p>
              )}
            </div>
          </Link>
        </div>

        <div onMouseEnter={() => open(4)} onMouseLeave={() => close(4)}>
          <Link to="/enrollment" style={{ textDecoration: "none" }}>
            <div className="cardD">
              <h1 className="main_h1">Enrollment Status</h1>
              {checkHover4 ? (
                <FaRegistered size={50} className="main_image" />
              ) : (
                <p className="main_text">
                  You can find your enrollment status after you have add the
                  course{" "}
                </p>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainS;
