import "./App.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import MainS from "./components/studentCourseManage/main_S";
import MainA from "./components/Admin/main_A";
import Option from "./components/studentCourseManage/classOption";
import Confirm from "./components/studentCourseManage/confirmAdd";
import Profile from "./components/studentCourseManage/profile";
import Search from "./components/studentCourseManage/search";
import AdminProfile from "./components/Admin/profile_A";
import AdminAddCourse from "./components/Admin/manageCourse/addCourse";
import AdminEditCourse from "./components/Admin/manageCourse/editCourse";
import AdminViewCourse from "./components/Admin/manageCourse/viewCourse";
import AdminAddUser from "./components/Admin/manageUser/addUser";
import AdminEditUser from "./components/Admin/manageUser/editUser";
import AdminViewUser from "./components/Admin/manageUser/viewUser";
import AdminAddClass from "./components/Admin/manageCourse/addClass";
import AdminSelectClass from "./components/Admin/manageCourse/selectClass_A";
import AdminEditClass from "./components/Admin/manageCourse/editClass";
import AdminTopbar from "./components/sidebar/topbar_a";
import SSideBar from "./components/sidebar/sidebar_s";
import ViewClass from "./components/studentCourseManage/viewClass";
import ClassSchedule from "./components/studentCourseManage/classSchedule";
import EnrollmentStatus from "./components/studentCourseManage/enrollmentStatus";
import Topbar from "./components/sidebar/topbar";
import ASideBar from "./components/sidebar/sidebar_a";
import Login from "./components/Login/login";
import SignUp from "./components/Login/signUp";
import ChangePW from "./components/Login/changePW";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SelectClass from "./components/studentCourseManage/selectClass";
import SelectCourse from "./components/studentCourseManage/selectCourse";
import RoleRoutes from "./route/roleRoute";
import { getUserLoginStatusWithAuth } from './redux/actions/authAndUserAction.js'

function App() {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserLoginStatusWithAuth());
  }, [])

  // use here to change is user are logged in or admin
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const [isAdmin, setIsAdmin] = useState(true);


  // show different page according to the role
  function checkLogin() {
    // if (auth?.role === 'student' || (isLoggedIn && !isAdmin) ){
    //   return (
    //   <>
    //     <div>
    //       <Topbar handleLogin={handleLogin} />
    //       <div className="side">
    //         <SSideBar />
    //       </div>
    //     </div>
    //     <div id="align-main">
    //       <MainS />
    //     </div>
    //   </>
    //   )
    // }
    // if (auth?.role === 'admin' || (isLoggedIn && isAdmin) ){
    //   return (
    //     <>
    //       <div>
    //         <AdminTopbar handleLogin={handleLogin} />
    //         <div className="side">
    //           <ASideBar />
    //         </div>
    //       </div>
    //       <div id="align-main">
    //         <MainA />
    //       </div>
    //     </>
    //   )
    // }  
    return <Login handleLogin={handleLogin} />
  }


  function handleLogin(state) {
    console.log("argument from state: ", state);
    console.log("argument from isloggedIn1: ", isLoggedIn);
    setIsLoggedIn((isLoggedIn) => state);
    console.log("argument from isloggedIn2: ", isLoggedIn);
    setCount((count) => count + 1);
    console.log("count: ", count);
  }

  return (
    <ProSidebarProvider>
      <Routes>
        {/* todo: distinct the user and admin and login */}
        <Route path="/" element={checkLogin()} />
        <Route path="/signUp" element={<SignUp />} />
        
        {/* need login to access */}
        {/* student */}
        <Route path="/" element={<RoleRoutes required='student' isLoggedIn={isLoggedIn} isAdmin={isAdmin} />}>
          <Route path="/changePW" element={<ChangePW />} />
          <Route path="/studProfile" element={<Profile />} />
          <Route path="/viewClass" element={<ViewClass />} />
          <Route path="/classSchedule" element={<ClassSchedule />} />
          <Route path="/enrollment" element={<EnrollmentStatus />} />
          <Route path="/search" element={<Search />} />
          <Route path="/selectCourse/:type" element={<SelectCourse />} />
          <Route path="/selectClass/:type" element={<SelectClass />} />
          <Route path="/search/classOption" element={<Option />} />
          <Route path="/search/confirm/:type" element={<Confirm />} />
        </Route>

        {/* admin */}
        <Route path="/" element={<RoleRoutes required='admin' isLoggedIn={isLoggedIn} isAdmin={isAdmin}/>}>
          {/* <Route path="/" element={<MainA />} /> */}
          <Route path="/profile" element={<AdminProfile />} />
          <Route path="/changePW" element={<ChangePW />} />
          <Route path="/aAddCourse" element={<AdminAddCourse />} />
          <Route path="/aSelectClass/:id" element={<AdminSelectClass />} />
          <Route path="/aAddClass/:id" element={<AdminAddClass />} />
          <Route path="/aEditClass/:id" element={<AdminEditClass />} />
          <Route path="/aEditCourse/:id" element={<AdminEditCourse />} />
          <Route path="/aViewCourse" element={<AdminViewCourse />} />
          <Route path="/aAddUser" element={<AdminAddUser />} />
          <Route path="/aEditUser/:id" element={<AdminEditUser />} />
          <Route path="/aViewUser" element={<AdminViewUser />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />}></Route>
      </Routes>
    </ProSidebarProvider>
  )




  // const store = createStore(reducers, compose(applyMiddleware(thunk)))

// function StudentPage() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<MainS />} />
//         <Route path="/changePW" element={<ChangePW />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/viewClass" element={<ViewClass />} />
//         <Route path="/classSchedule" element={<ClassSchedule />} />
//         <Route path="/enrollment" element={<EnrollmentStatus />} />
//         <Route path="/search" element={<Search />} />
//         <Route path="/selectCourse/:type" element={<SelectCourse />} />
//         <Route path="/selectClass/:type" element={<SelectClass />} />
//         <Route path="/search/classOption" element={<Option />} />
//         <Route path="/search/confirm/:type" element={<Confirm />} />
//         <Route path="*" element={<Navigate to="/" />}></Route>
//       </Routes>
//     </div>
//   );
// }
// function Admin() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<MainA />} />
//         <Route path="/profile" element={<AdminProfile />} />
//         <Route path="/changePW" element={<ChangePW />} />
//         <Route path="/aAddCourse" element={<AdminAddCourse />} />
//         <Route path="/aSelectClass/:id" element={<AdminSelectClass />} />
//         <Route path="/aEditClass/:id" element={<AdminEditClass />} />
//         <Route path="/aEditCourse/:id" element={<AdminEditCourse />} />
//         <Route path="/aViewCourse" element={<AdminViewCourse />} />
//         <Route path="/aAddUser" element={<AdminAddUser />} />
//         <Route path="/aEditUser/:id" element={<AdminEditUser />} />
//         <Route path="/aViewUser" element={<AdminViewUser />} />
//         <Route path="*" element={<Navigate to="/" />}></Route>
//       </Routes>
//     </div>
//   );
// }


  // if (isLoggedIn === false) {
  //   document.body.style.backgroundColor = "#F3F3F9";
  //   return (
  //     <Routes>
  //       <Route path="" element={<Login handleLogin={handleLogin} />} />
  //       <Route path="/signUp" element={<SignUp />} />
  //       <Route path="*" element={<Navigate to="/" />}></Route>
  //     </Routes>
  //   );
  // } else if (isAdmin === false) {
  //   document.body.style.backgroundColor = "#F5F5F5";
  //   return (
  //     <ProSidebarProvider>
  //       <div>
  //         <div>
  //           <Topbar handleLogin={handleLogin} />
  //           <div className="side">
  //             <SSideBar />
  //           </div>
  //         </div>
  //         <div id="align-main">
  //           <StudentPage />
  //         </div>
  //       </div>
  //     </ProSidebarProvider>
  //   );
  // } else {
  //   document.body.style.backgroundColor = "#F5F5F5";
  //   return (
  //     <ProSidebarProvider>
  //       <div>
  //         <Topbar handleLogin={handleLogin} />
  //         <div className="side">
  //           <ASideBar />
  //         </div>
  //       </div>
  //       <Admin />
  //     </ProSidebarProvider>
  //   );
  // }
}

export default App;
