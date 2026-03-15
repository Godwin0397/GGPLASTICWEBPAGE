import React, { useRef, useState } from "react";
import Devicemark from "../assets/Images/Devicemark.jpeg";
import "../assets/CssFolder/homePageStyle.css";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

function Topbar() {

  const location = useLocation()
  const [active, setActive] = useState(location.pathname)

  const homeRef = useRef()
  const featureRef = useRef()
  const pricingRef = useRef()

  const activeTab = (pathName)=>{
    setActive(pathName)
    const offcanvasEl = document.getElementById("offcanvasNavbar")
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl)
    if (bsOffcanvas) bsOffcanvas.hide()
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={Devicemark} alt="GG Plastic Logo" height="50" />
          </Link>

          {/* Hamburger */}
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Offcanvas */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                GG Plastix
              </h5>

              {/* Close button */}
              <button
                type="button"
                className="btn-close custom-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>

            <div className="offcanvas-body">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink
                    className={`nav-link ${active==="/" ? "active": ""}`}
                    to={"/"}
                    onClick={()=>activeTab("/")}
                    ref={homeRef}
                  >
                    Home
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className={`nav-link ${active==="/features" ? "active": ""}`} to={"/features"} onClick={()=>activeTab("/features")} ref={featureRef}>
                    Products
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className={`nav-link ${active==="/pricing" ? "active": ""}`} to={"/pricing"} onClick={()=>activeTab("/pricing")} ref={pricingRef}>
                    Pricing
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Topbar;
