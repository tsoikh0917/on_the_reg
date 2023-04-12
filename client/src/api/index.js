import axios from 'axios';

const url = "http://localhost:8080/";
const adminUrl = url + "admin";
const authUrl = url + "auth";
const classUrl = url + "class";
const courseUrl = url + "course";
const registeredCourseUrl = url + "registeredCourse";
const studentUrl = url + "student";
const waitlistUrl = url + "waitlist";

export const fetchPosts = () => {
  return axios.get(url + "student")
    .then(response => response.data)
    .catch(error => console.log(error));
}

export const fetchPosts1 = () => {
    return axios.get(url)
      .then(response => response.data)
      .catch(error => console.log(error));
  }