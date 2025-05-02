import React, { useState } from "react";
import "../App.css";
export function FolioHeader() {
  const [active, setActive] = useState(null);

  return (
    <>
      <nav className="navbar navbar-expand-md header-navbar  mx-md-4 mt-md-2 fixed-top ">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">
            <img src="../../public/n_icon_2.png" alt="" width={50} />
          </a>

          <button
            className="navbar-toggler d-md-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse d-none d-md-flex"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-center justify-content-end">
            
              {[
                {
                  id: "aboutMe",
                  label: "About",
                  no: "01.",
                  link: "#aboutMe-container",
                },
                {
                  id: "Experience",
                  label: "Experience",
                  no: "02.",
                  link: "#about-container",
                },
                {
                  id: "Work",
                  label: "Work",
                  no: "03.",
                  link: "#about-container",
                },
                {
                  id: "Contact",
                  label: "Contact",
                  no: "04.",
                  link: "#about-container",
                },
              ].map((item) => (
                <li key={item.id} className="nav-item ms-lg-3">
                  <a
                    href={item.link}
                    className={`nav-link ${active === item.id ? "active" : ""}`}
                    onClick={() => setActive(item.id)}
                  >
                    <span>{item.no}</span> {item.label}
                  </a>
                </li>
              ))}
              <li className="nav-item ms-lg-2 nav-item-resume">
                <a className="nav-link" href="#">
                  <button className="btn">Resume</button>
                </a>
              </li>
            </ul>
          </div>

          {/* Offcanvas Menu for Mobile (before md) */}
          <div
            className="offcanvas offcanvas-end d-md-none custom-offcanvas"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title d-none" id="offcanvasNavbarLabel">
                Menu
              </h5>
              <div class="d-flex justify-content-end">
                <button
                  type="button"
                  class="btn border-0"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#64ffda"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2 2l12 12M2 14L14 2"
                      stroke="#64ffda"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="offcanvas-body d-flex justify-content-center align-items-center text-center">
              <ul className="navbar-nav d-flex ">
                {[
                  {
                    id: "aboutMe",
                    label: "About",
                    no: "01.",
                    link: "#aboutMe-container",
                  },
                  {
                    id: "Experience",
                    label: "Experience",
                    no: "02.",
                    link: "#about-container",
                  },
                  {
                    id: "Work",
                    label: "Work",
                    no: "03.",
                    link: "#about-container",
                  },
                  {
                    id: "Contact",
                    label: "Contact",
                    no: "04.",
                    link: "#about-container",
                  },
                ].map((item) => (
                  <li key={item.id} className="nav-item ">
                    <a
                      href={item.link}
                      className={`nav-link  fs-6${
                        active === item.id ? "active" : ""
                      }`}
                      onClick={() => setActive(item.id)}
                    >
                      <span>{item.no}</span> <p>{item.label}</p>
                    </a>
                  </li>
                ))}
                <li className="nav-item nav-item-resume mt-3">
                  <a className="nav-link" href="#">
                    <button className="btn w-100">Resume</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
