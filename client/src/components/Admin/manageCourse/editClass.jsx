import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../form.css";
import { useDispatch, useSelector } from "react-redux";
import { getClass, updateClass } from "../../../redux/actions/classForAdminAction";

// this function is used to edit a class
function AdminEditClass(props) {

  // get the class id from the url
  const { id } = useParams();
  const navigate = useNavigate();

  // get the class info from the redux store
  const classes = useSelector((state) => state.classForAdmin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClass(id));
  }, []);

  // set the class info to the form
  const [classInfo, setClassInfo] = useState({});
  useEffect(() => {
    if (classes.length == 1) {
      setClassInfo(JSON.parse(JSON.stringify(classes[0])));
    }
  }, [classes]);
  
  // this function is used to format the date and time
  const formatDateTime = (value) => {
    const date = new Date(value);
    console.log(date.getTime);
    const timeStr = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    console.log(timeStr);
    return timeStr;
  };

  // set the default value of the form
  formatDateTime("2023-04-27T08:07:00.000Z");
  const [formData, setFormData] = useState({
    classID: "",
    courseID: "",
    week: "",
    start_time: "",
    end_time: "",
    location: "",
    lectureName: "",
    capacity: "",
    maxCapacity: ""
  });

  // set the default value of the form
  useEffect(() => {
    setFormData({
      classID: classInfo['classID'],
      courseID: classInfo['courseID'],
      week: classInfo['week'],
      start_time: classInfo['start_time'],
      end_time: classInfo['end_time'],
      location: classInfo['location'],
      lectureName: classInfo['lectureName'],
      capacity: classInfo['capacity'],
      maxCapacity: classInfo['maxCapacity'],
    });
    console.log(formData);
  }, [classInfo]);

  // this function is used to handle the input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // this function is used to handle the submit event
  const handleSubmit = async (event) => {
    formData.start_time = new Date(formData.start_time);
    formData.end_time = new Date(formData.end_time);
    dispatch(updateClass(classInfo.classID, formData));
    window.history.back();
    event.preventDefault();
  };

  // this function is used to handle the back button
  const handleClick = (event) => {
    event.preventDefault();
    navigate(-1);
  }
  
  // this function is used to render the form
  console.log(classInfo != undefined);
  if (classInfo != undefined && classInfo.start_time != undefined) {
    return (
      <div id="resize">
        <form id="form_info" onSubmit={handleSubmit}>
          <div id="main">
            <h1 id="alignLeft">Edit Class</h1>
            <button onClick={handleClick} className="custom-fbtn fbtn">
              <span>Back</span>
            </button>
          </div>

          <fieldset>
            <h4>Course Code:</h4>
            <input
              placeholder="Input course code here"
              type="text"
              tabIndex="1"
              name="courseID"
              id="courseID"
              maxLength={8}
              onChange={handleInputChange}
              defaultValue={classInfo.courseID}
              required
              disabled
            ></input>
          </fieldset>
          <fieldset>
            <h4>School Day:</h4>
            <select name="week" id="week" onChange={handleInputChange} required>
            <option value="" disabled >Select a weekday</option>
            <option value="Mon" {...(classInfo.week === "Mon" && {selected: true})}>Monday</option>
            <option value="Tue" {...(classInfo.week === "Tue" && {selected: true})}>Tuesday</option>
            <option value="Wed" {...(classInfo.week === "Wed" && {selected: true})}>Wednesday</option>
            <option value="Thu" {...(classInfo.week === "Thu" && {selected: true})}>Thursday</option>
            <option value="Fri" {...(classInfo.week === "Fri" && {selected: true})}>Friday</option>
            <option value="Sat" {...(classInfo.week === "Sat" && {selected: true})}>Saturday</option>
            <option value="Sun" {...(classInfo.week === "Sun" && {selected: true})}>Sunday</option>
          </select>
          </fieldset>
          <br/>
          <fieldset>
            <h4>Class Start Time:</h4>
            <input
              placeholder="Input in the format: hh:mm"
              type="datetime-local"
              tabIndex="3"
              name="start_time"
              id="start_time"
              //pattern="\d{2}:\d{2}"
              onChange={handleInputChange}
              defaultValue={classInfo.start_time.slice(0,16)}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Class End Time:</h4>
            <input
              placeholder="Input in the format: hh:mm"
              type="datetime-local"
              tabIndex="4"
              name="end_time"
              id="end_time"
              //pattern="\d{2}:\d{2}"
              onChange={handleInputChange}
              defaultValue={classInfo.end_time.slice(0,16)}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Teacher in Charge:</h4>
            <input
              placeholder="Input instructor's name here"
              type="text"
              tabIndex="5"
              name="lectureName"
              id="lectureName"
              maxLength={30}
              onChange={handleInputChange}
              defaultValue={classInfo.lectureName}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Maximum Capacity:</h4>
            <input
              placeholder="Input maximum capacity of the course here"
              type="number"
              tabIndex="6"
              max={200}
              name="capacity"
              id="capacity"
              onChange={handleInputChange}
              defaultValue={classInfo.maxCapacity}
              required
            ></input>
          </fieldset>
          <fieldset>
            <h4>Class Place:</h4>
            <input
              placeholder="Input location for the course lecture here"
              type="text"
              tabIndex="7"
              name="location"
              id="location"
              maxLength={100}
              onChange={handleInputChange}
              defaultValue={classInfo.location}
              required
            ></input>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              className="custom-btn btn"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default AdminEditClass;
