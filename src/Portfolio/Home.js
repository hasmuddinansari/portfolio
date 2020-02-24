import React, { Component } from "react";
import WOW from "wowjs";
import EmailIcon from "@material-ui/icons/Email";
import CallIcon from "@material-ui/icons/Call";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true
    }).init();
  }
  render() {
    return (
      <div className="container pt-5">
        <div className="row p-1">
          <div
            data-wow-duration="0.6s"
            className="col-md-6 margin col-12 row justify-content-center order-md-1 wow slideInLeft order-2"
          >
            <div>
              <span className="header">Hello I'm</span>

              <h1 id="poppin">Hasmuddin Ansari</h1>

              <h3 className="text-success">Full Stack Developer</h3>
              <p className="d-flex flex-wrap">
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

              <p className="p-3">
                <span>
                  <GitHubIcon className="mr-3" />
                </span>
                <span>
                  <LinkedInIcon className="mr-3" />
                </span>
                <span>
                  <TwitterIcon className="mr-3" />
                </span>
                <span>
                  <span
                    class="iconify"
                    data-icon="simple-icons:hackerrank"
                    data-inline="false"
                  ></span>
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12 order-md-2  order-1 row justify-content-center ">
            <div className="col-md-8 p-2 col-8">
              <img
                src="./images/profile.jpg"
                className="img-fluid wow fadeIn rounded-circle border border-dark p-2"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
