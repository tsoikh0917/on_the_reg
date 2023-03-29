import React from "react";
function AdminEditUser() {
  return (
    <div id="resize">
      <h1>Edit User</h1>
      <form id="form_info" action="" method="post">
        <fieldset>
          <h4>Name:</h4>
          <input
            placeholder="Input name here"
            type="text"
            tabindex="1"
            required
            autofocus
          ></input>
        </fieldset>
        <fieldset>
          <h4>ID:</h4>
          <input
            placeholder="Input ID here"
            type="email"
            tabindex="2"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Date of Birth:</h4>
          <input
            placeholder="Input date of birth here"
            type="tel"
            tabindex="3"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Gender:</h4>
          <input
            placeholder="Input gender here"
            type="url"
            tabindex="4"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Major:</h4>
          <input
            placeholder="Input study major here"
            type="url"
            tabindex="4"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Email:</h4>
          <input
            placeholder="Input email address here"
            type="url"
            tabindex="4"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Contact Number:</h4>
          <input
            placeholder="Input phone number here"
            type="url"
            tabindex="4"
            required
          ></input>
        </fieldset>
        <fieldset>
          <h4>Year:</h4>
          <input
            placeholder="Input year of study here"
            type="url"
            tabindex="4"
            required
          ></input>
        </fieldset>

        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default AdminEditUser;
