import React, { Component } from "react";
import WOW from "wowjs";

export class ReactWow extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    new WOW.WOW().init();
  }
  render() {
    return (
      <div className="text-info">
        {/* <h3 className="wow lightSpeedIn">Hi, This is Ayaan Ansari</h3> */}
        <h3 className="wow bounceInUp">Welcome to my page</h3>
        <div className="wow bounceInDown">
          <h3 className="wow fadeInUp">
            <a>Click here</a>
          </h3>
        </div>
      </div>
    );
  }
}

export default ReactWow;
