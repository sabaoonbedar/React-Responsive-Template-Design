import React from "react";
import "../App.css";
// import Typical from 'react-typical'

import Image from "./assets/bodyImage.png";
function Body() {
  return (
    <div>
      <div className="body-content">
        <div className="app-text">
          <h1>You can make anything by writing</h1>
          <p>
            Writing skills are not ordinary skills, people with these skills are
            advance in their thoughts and ideas. A writer would always observe
            things with different angle.
          </p>
        </div>

        <div className="body-image">
          <img src={Image} />
        </div>
      </div>
    </div>
  );
}

export default Body;
