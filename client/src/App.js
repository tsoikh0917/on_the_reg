import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import MainS from "./components/studentCourseManage/main_S";
import MainA from "./components/Admin/main_A";
import Option from "./components/studentCourseManage/classOption";
import Confirm from "./components/studentCourseManage/confirmAdd";
import Profile from "./components/studentCourseManage/profile";
import Search from "./components/studentCourseManage/search";
import AdminAddCourse from "./components/Admin/manageCourse/addCourse";
import AdminEditCourse from "./components/Admin/manageCourse/editCourse";
import AdminViewCourse from "./components/Admin/manageCourse/viewCourse";
import AdminAddUser from "./components/Admin/manageUser/addUser";
import AdminEditUser from "./components/Admin/manageUser/editUser";
import AdminViewUser from "./components/Admin/manageUser/viewUser";
import SSideBar from "./components/sidebar/sidebar_s";
import ViewClass from "./components/studentCourseManage/viewClass";
import ClassSchedule from "./components/studentCourseManage/classSchedule";
import EnrollmentStatus from "./components/studentCourseManage/enrollmentStatus";
import Topbar from "./components/sidebar/topbar";
import ASideBar from "./components/sidebar/sidebar_a";
import Login from "./components/Login/login";
import ConfirmDelete from "./components/studentCourseManage/confirmDelete";
import SignUp from "./components/Login/signUp";
import ChangePW from "./components/Login/changePW";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function StudentPage() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainS />} />
        <Route path="/changePW" element={<ChangePW />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/viewClass" element={<ViewClass />} />
        <Route
          path={"/viewClass/confirmDelete/:type"}
          element={<ConfirmDelete />}
        />
        <Route path="/classSchedule" element={<ClassSchedule />} />
        <Route path="/enrollment" element={<EnrollmentStatus />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/classOption" element={<Option />} />
        <Route path="/search/confirm" element={<Confirm />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  );
}
function Admin() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainA />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changePW" element={<ChangePW />} />
        <Route path="/aAddCourse" element={<AdminAddCourse />} />
        <Route path="/aEditCourse/:type" element={<AdminEditCourse />} />
        <Route path="/aViewCourse" element={<AdminViewCourse />} />
        <Route path="/aAddUser" element={<AdminAddUser />} />
        <Route path="/aEditUser" element={<AdminEditUser />} />
        <Route path="/aViewUser" element={<AdminViewUser />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [count, setCount] = useState(0);
  const [isAdmin, setIsAdmin] = useState(true);
  function handleLogin(state) {
    console.log("argument from state: ", state);
    console.log("argument from isloggedIn1: ", isLoggedIn);
    setIsLoggedIn((isLoggedIn) => state);
    console.log("argument from isloggedIn2: ", isLoggedIn);
    setCount((count) => count + 1);
    console.log("count: ", count);
  }

  if (isLoggedIn === false) {
    document.body.style.backgroundColor = "#243b55";
    return (
      <Routes>
        <Route path="" element={<Login handleLogin={handleLogin} />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    );
  } else if (isAdmin === false) {
    document.body.style.backgroundColor = "#F5F5F5";
    return (
      <ProSidebarProvider>
        <div>
          <Topbar handleLogin={handleLogin} />
          <div className="side">
            <SSideBar />
          </div>
        </div>

        <StudentPage />
      </ProSidebarProvider>
    );
  } else {
    document.body.style.backgroundColor = "#F5F5F5";
    return (
      <ProSidebarProvider>
        <div>
          <Topbar handleLogin={handleLogin} />
          <div className="side">
            <ASideBar />
          </div>
        </div>

        <Admin />
      </ProSidebarProvider>
    );
  }
}

export default App;
