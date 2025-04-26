import React from "react";
import { useState } from "react";
export function FolioHeader() {
  const [active, setActive] = useState("about");

  return (
    <>

        <nav className="navbar navbar-expand-lg header-navbar mx-md-5 mt-md-3">
          <div className="container-fluid">
            <a className="navbar-brand glitch-text " href="#">
              NK
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-center">
                {[
                  { id: "about", label: "About", no: "01" , link:"#about-container"},
                  { id: "Experience", label: "Experience", no: "02",link:"#about-container" },
                  { id: "Work", label: "Work", no: "03" ,link:"#about-container"},
                  { id: "Contact", label: "Contact", no: "04",link:"#about-container" },
                ].map((item) => (
                  <li className="nav-item ms-lg-3">
                    <a
                      href={item.link}
                      className={`nav-link ${
                        active === item.id ? "active" : ""
                      }`}
                      onClick={() => setActive(item.id)}
                    >
                      <span>{item.no}</span> {item.label}
                    </a>
                  </li>
                ))}

                <li className="nav-item  ms-lg-2 nav-item-resume">
                  <a className="nav-link" href="#">
                    <button className="btn">Resume</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
   
    </>
  );
}
