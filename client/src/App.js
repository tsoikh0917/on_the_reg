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
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function StudentPage() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainS />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/viewClass" element={<ViewClass />} />
        <Route path="/classSchedule" element={<ClassSchedule />} />
        <Route path="/enrollment" element={<EnrollmentStatus />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/classOption" element={<Option />} />
        <Route path="/search/classOption/confirm" element={<Confirm />} />
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
        <Route path="/aAddCourse" element={<AdminAddCourse />} />
        <Route path="/aEditCourse" element={<AdminEditCourse />} />
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  function handleLogin(state) {
    setIsLoggedIn((current) => state);
    console.log("argument from logout: ", state);
  }

  if (isLoggedIn === false) {
    return <Login handleLogin={handleLogin} />;
  } else if (isAdmin === false) {
    return (
      <ProSidebarProvider>
        <Topbar handleLogin={handleLogin} />
        <div class="side">
          <SSideBar />
        </div>
        <StudentPage />
      </ProSidebarProvider>
    );
  } else {
    return (
      <ProSidebarProvider>
        <Topbar handleLogin={handleLogin} />
        <div class="side">
          <ASideBar />
        </div>
        <Admin />
      </ProSidebarProvider>
    );
  }
}

export default App;
