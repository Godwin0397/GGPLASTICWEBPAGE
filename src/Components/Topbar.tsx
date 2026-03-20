import React, { useRef, useState } from "react";
import "../assets/CssFolder/homePageStyle.css";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import * as bootstrap from "bootstrap";

function Topbar() {

  const location = useLocation()
  const [active, setActive] = useState<string>(location.pathname)

  const homeRef = useRef<any>(null)
  const featureRef = useRef<any>(null)
  const pricingRef = useRef<any>(null)

  const activeTab = (pathName:string)=>{
    setActive(pathName)
    const offcanvasEl = document.getElementById("offcanvasNavbar")
    const bsOffcanvas = offcanvasEl ? bootstrap.Offcanvas.getInstance(offcanvasEl) : null
    if (bsOffcanvas) bsOffcanvas.hide()
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar" style={{ position: "sticky", top: 0, zIndex: 1000 }}>
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src="https://ggplastics3bucket01.s3.ap-south-2.amazonaws.com/DevicemarkOther.jpeg" alt="GG Plastic Logo" height="50" />
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
            tabIndex={-1}
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
