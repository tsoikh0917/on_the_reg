import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./confirmDelete.css";
import { Link } from "react-router-dom";

function ConfirmDelete() {
  const navigate = useNavigate();
  const { type } = useParams();
  const location = useLocation().state;
  let courseInfo = JSON.parse(JSON.stringify(location.courseInfo));
  return (
    <div>
      <div className="warning">
        <p className="warning-text">Are you sure you want to delete</p>
        <p className="warning-text">
          {courseInfo.course_ID} - {courseInfo.course_name}?
        </p>
        <button id="rmB" class="yes">
          <Link to="/viewClass">
            <p className="warning-text">Yes</p>
          </Link>
        </button>
        <button onClick={() => navigate(-1)} id="rmB" class="no">
          <p className="warning-text">No</p>
        </button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
