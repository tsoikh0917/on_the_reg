import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../form.css";

function AdminEditCourse() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div id="resize">
      <form id="form_info" action="" method="post">
        <div id="main">
          <h1 id="alignLeft">Edit Course</h1>
          <button onClick={() => navigate(-1)} class="custom-fbtn fbtn">
            <span>Back</span>
          </button>
        </div>
        <fieldset>
          <h4>Course ID:</h4>
          <input
            placeholder="Input course code here"
            type="text"
            tabindex="1"
            required
            autofocus
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Name:</h4>
          <input
            placeholder="Input course name here"
            type="text"
            tabindex="2"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Day:</h4>
          <input
            placeholder="Input weekday here"
            type="text"
            tabindex="3"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Time:</h4>
          <input
            placeholder="Input time slot in the format: hh:mm-hh:mm here"
            type="text"
            tabindex="4"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Department:</h4>
          <input
            placeholder="Input faculty here"
            type="text"
            tabindex="4"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Teacher in Charge:</h4>
          <input
            placeholder="Input instructor's name here"
            type="text"
            tabindex="4"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Capacity:</h4>
          <input
            placeholder="Input maximum capacity of the course here"
            type="number"
            tabindex="4"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Place:</h4>
          <input
            placeholder="Input location for the course lecture here"
            type="text"
            tabindex="4"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Course Description:</h4>
          <textarea
            placeholder="Type course outline here...."
            type="text"
            tabindex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
            class="custom-btn btn"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default AdminEditCourse;
