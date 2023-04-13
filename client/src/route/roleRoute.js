import React, { useEffect } from 'react'
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUserLoginStatusWithAuth } from '../redux/actions/authAndUserAction.js'
import SSideBar from "../components/sidebar/sidebar_s";
import Topbar from "../components/sidebar/topbar";
import ASideBar from "../components/sidebar/sidebar_a";


const RoleRoutes = (require, handleLogin,  isLoggedIn, isAdmin) => {
  // fetch the role from redux store
  // if no role, redirect to login page
  const { role } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserLoginStatusWithAuth());
  }, [])
  const location = useLocation()

  const roleRoutes = () => {
    if (!role) return <Navigate to="/" state={{ from: location }} replace/>

    if ((require === "admin" && role === "admin") || isAdmin)  {
      return (
        <div>
          <div>
            <Topbar handleLogin={handleLogin} />
            <div className="side">
              <SSideBar />
            </div>
          </div>
          <div id="align-main">
            <Outlet />
          </div>
        </div>
      )
    } 

    if ((require === "student" && role === "student") || isLoggedIn) {
      return (
        <>
          <div>
            <Topbar handleLogin={handleLogin} />
            <div className="side">
              <ASideBar />
            </div>
          </div>
          <Outlet />
        </>
      )
    }
    return <Navigate to="/" state={{ from: location }} replace/>
  }

  return roleRoutes
}

export default RoleRoutes
