import React, { useEffect, Fragment } from 'react'
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getUserLoginStatusWithAuth } from '../redux/actions/authAndUserAction.js'
import SSideBar from "../components/sidebar/sidebar_s";
import Topbar from "../components/sidebar/topbar";
import ASideBar from "../components/sidebar/sidebar_a";

// required: "student" or "admin"
const RoleRoutes = ({required, handleLogin,  isAdmin, isLoggedIn}) => {
  // fetch the role from redux store
  // if no role, redirect to login page
  const { role } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserLoginStatusWithAuth());
  }, [])
  const location = useLocation()

  const RoutesByRole = () => {

    // if (!role) return <Navigate to="/"/>

    if (required === "student" && role === "student")  {
      console.log("student")
      return (
        <Fragment>
          <div>
            <Topbar handleLogin={handleLogin} />
            <div className="side">
              <SSideBar />
            </div>
          </div>
          <div id="align-main">
            <Outlet />
          </div>
        </Fragment>
      )
    } 

    if (required == "admin" && role == "admin") {
      console.log("admin")
      return (
        <Fragment>
          <div>
            <Topbar handleLogin={handleLogin} />
            <div className="side">
              <ASideBar />
            </div>
          </div>
          <div id="align-main">
            <Outlet />
          </div>
        </Fragment>
      )
    }

    console.log("no role")
    return <Navigate to="/"/>
  }

  return <RoutesByRole/>
}

export default RoleRoutes
