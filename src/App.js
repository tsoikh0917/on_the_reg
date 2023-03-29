import "./App.css";
import { Route, Routes } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import Main from "./components/main";
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
import SideBar from "./components/sidebar/sidebar";
import ViewClass from "./components/studentCourseManage/viewClass";
import ClassSchedule from "./components/studentCourseManage/classSchedule";
import EnrollmentStatus from "./components/studentCourseManage/enrollmentStatus";
import Topbar from "./components/sidebar/topbar";

function App() {
  return (
    <ProSidebarProvider>
      <Topbar />

      <div class="side">
        <SideBar />
      </div>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/viewClass" element={<ViewClass />} />
          <Route path="/classSchedule" element={<ClassSchedule />} />
          <Route path="/enrollment" element={<EnrollmentStatus />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/classOption" element={<Option />} />
          <Route path="/search/classOption/confirm" element={<Confirm />} />
          <Route path="/aAddCourse" element={<AdminAddCourse />} />
          <Route path="/aEditCourse" element={<AdminEditCourse />} />
          <Route path="/aViewCourse" element={<AdminViewCourse />} />
          <Route path="/aAddUser" element={<AdminAddUser />} />
          <Route path="/aEditUser" element={<AdminEditUser />} />
          <Route path="/aViewUser" element={<AdminViewUser />} />
        </Routes>
      </div>
    </ProSidebarProvider>
  );
}

export default App;
