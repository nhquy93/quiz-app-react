import React from "react";
import "./PageNotFound.css";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="not-found">
      <Link to="/" className="redirect" >Go Home</Link>
      <div className="wrapper">
        <img
          src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
          alt="not-found"
        />
      </div>
    </div>
  );
}
