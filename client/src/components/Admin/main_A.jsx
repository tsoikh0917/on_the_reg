import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from "../image/icon.png";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";

function MainA() {
  const [checkHover, setCheckHover] = useState(false);
  const [checkHover2, setCheckHover2] = useState(false);
  function open(num) {
    if (num === 1) {
      setCheckHover(true);
    } else if (num === 2) {
      setCheckHover2(true);
    }
  }
  function close(num) {
    if (num === 1) {
      setCheckHover(false);
    } else if (num === 2) {
      setCheckHover2(false);
    }
  }
  return (
    <div>
      <div>
        <div id="main_icon">
          <img src={icon} width="20%" alt="icon" />
        </div>

        <div className="card-container">
          <div onMouseEnter={() => open(1)} onMouseLeave={() => close(1)}>
            <Link to="/aViewCourse" style={{ textDecoration: "none" }}>
              <div class="cardA">
                <h1 class="main_h1">Manage Course</h1>
                {checkHover ? (
                  <FaCalendarAlt size={50} className="main_image" />
                ) : (
                  <p class="main_text">
                    You can add, edit or delete courses here
                  </p>
                )}
              </div>
            </Link>
          </div>

          <div onMouseEnter={() => open(2)} onMouseLeave={() => close(2)}>
            <Link to="/aViewUser" style={{ textDecoration: "none" }}>
              <div class="cardB">
                <h1 class="main_h1">Manage User</h1>
                {checkHover2 ? (
                  <FaUserAlt size={50} className="main_image" />
                ) : (
                  <p className="main_text">
                    You can add, edit or delete users here
                  </p>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainA;
