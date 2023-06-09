import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavDivider from "../../components/Nav-Divider/NavDivider";
import "./PageBrowser.css";
import { withAuthRequired } from "../../hoc/withAuthRequired";

function PageBrowser() {
  return (
    <div className="Page">
      <Header />
      <div className="content">
        <NavDivider />
        <Outlet />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export const ProtectedPageBrowser = withAuthRequired(PageBrowser);