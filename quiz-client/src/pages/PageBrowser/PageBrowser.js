import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSidebar } from "../../redux/sidebar/sidebarSlice";
import NavDivider from "../../components/Nav-Divider/NavDivider";
import Header from "../../components/Header/Header";
import SideMenu from "../../components/Side-Menu/SideMenu";
import "./PageBrowser.css";

export default function PageBrowser() {
  const sidebar = useSelector(selectSidebar);
  return (
    <div className="layout">
      {sidebar && <SideMenu />}
      <div className="Page">
        <Header />
        <div className="content">
          <NavDivider />
          <Outlet />
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}
