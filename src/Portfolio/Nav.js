import React from "react";
import "./portfolio.css"


export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg container-fluid navbar-light bg-dark">
      <a className="navbar-brand text-white" href="#">
      <h5 id="signature">Hasmuddin Ansari</h5>
      </a>
      <button
        className="navbar-toggler text-white bg-white"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse justify-content-end navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link text-white " href="#about">
              About <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#proficiency">
              Proficiency
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
