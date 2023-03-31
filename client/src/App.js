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

const isLoggedIn = true;
const isAdmin = false;

function LoginPage() {
  return <Login />;
}

function StudentPage() {
  return (
    <ProSidebarProvider>
      <Topbar />

      <div class="side">
        <SSideBar />
      </div>
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
    </ProSidebarProvider>
  );
}
function Admin() {
  return (
    <ProSidebarProvider>
      <Topbar />

      <div class="side">
        <ASideBar />
      </div>
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
    </ProSidebarProvider>
  );
}

function App() {
  if (isLoggedIn === false) {
    return <LoginPage />;
  } else if (isAdmin === false) {
    return <StudentPage />;
  } else {
    return <Admin />;
  }
}

export default App;
