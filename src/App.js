import './App.css';
import {Route, Routes} from "react-router-dom"
import Main from './components/main';
import Option from './components/studentCourseManage/classOption';
import Confirm from './components/studentCourseManage/confirmAdd';
import Profile from './components/studentCourseManage/profile';
import Search from './components/studentCourseManage/search';
import AdminAddCourse from './components/Admin/manageCourse/addCourse';
import AdminEditCourse from './components/Admin/manageCourse/editCourse';
import AdminViewCourse from './components/Admin/manageCourse/viewCourse';
import AdminAddUser from './components/Admin/manageUser/addUser';
import AdminEditUser from './components/Admin/manageUser/editUser';
import AdminViewUser from './components/Admin/manageUser/viewUser';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/classOption" element={<Option />}/>
        <Route path="/confirm" element={<Confirm />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/aAddCourse" element={<AdminAddCourse />}/>
        <Route path="/aEditCourse" element={<AdminEditCourse />}/>
        <Route path="/aViewCourse" element={<AdminViewCourse />}/>
        <Route path="/aAddUser" element={<AdminAddUser />}/>
        <Route path="/aEditUser" element={<AdminEditUser />}/>
        <Route path="/aViewUser" element={<AdminViewUser />}/>
      </Routes>
    </div>
  );
}

export default App;
