import React, { Component } from "react";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import "./portfolio.css"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="about" className="container pt-4">
        <div className="row p-1">
          <div
            data-wow-duration="0.6s"
            className="col-md-6 margin col-12 row justify-content-center order-md-1 wow slideInLeft order-2"
          >
            <div>
              <span className="header">Hello I'm</span>

              <h1>Hasmuddin Ansari</h1>

              <h3 className="text-success">Full Stack Developer</h3>
              <p  className="d-flex flex-wrap h4 my-3">
              A dedicated and passionate full stack developer
              trained and skilled in MERN stack at Masai school,
              looking forward to join a startup where I can enhance 
              my skills and can become an asset to the organisation.
              </p>

              <p>
                <span>
                  <EmailIcon className="mr-1" />
                  mdaliansari33@gmail.com
                </span>
              </p>
              <p>
                <CallIcon />
                +91 7053 2134 49
              </p>
              <p>
                <LocationOnOutlinedIcon /> Banglore (India)
              </p>

              <p className="py-3 pr-3">
                <span>
  
                <a target="_blank" href="https://github.com/hasmuddinansari"><i className="fab fa-github h2 mr-4"></i></a>

                </span>
                <span>
                <a target="_blank" href="https://linkedin.com/in/hasmuddin-ansari-397825156"><i className="fab fa-linkedin h2 mr-4"></i></a>
                </span>
                <span>
                <a target="_blank" href="https://twitter.com/hasmuddin1998"><i className="fab fa-twitter h2 mr-4"></i></a>
                </span>
                <span>
                <a  target="_blank" href="https://www.hackerrank.com/Hasmuddin"><i className="fab fa-hackerrank h2 mr-4"></i></a>
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-2  order-1 row justify-content-center ">
            <div className="col-md-8 col-8  d-flex flex-column justify-content-center">
              <img
                src="/images/profile.jpg"
                className="img-fluid rounded-circle border border-dark mb-3 p-1"
                alt=""
              />
              <a className="download_btn mb-3">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
