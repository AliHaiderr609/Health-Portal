import React, { useState } from "react";
import Login_nav_bar from "./LoginNavbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import "./MainDashboad.css";

const DashboardLayout = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  return (
    <>
      <Login_nav_bar />
      {/* <div style={{ display: 'flex' }} className={`toogle_bar ${isSidebarActive ? 'active' : ''}`}> */}
      <div style={{ display: "flex" }}>
        <Sidebar toggleSidebar={toggleSidebar} />
        <Outlet
          style={{ flex: 1 }}
          className={`dash ${isSidebarActive ? "active" : ""}`}
        />
      </div>

      {/* </div> */}
    </>
  );
};

export default DashboardLayout;
