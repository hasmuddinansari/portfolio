import React from "react";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg container-fluid navbar-light bg-dark">
      <a className="navbar-brand text-white" href="#">
        Home
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

      <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
          <li className="nav-item active">
            <a className="nav-link text-white " href="#">
              About <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Projects
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
