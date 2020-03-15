import React, { Component } from "react";
import "./NavBar.css";

let data = require("../../data/navigation.json");

class NavBar extends Component {
  constructor(props) {
    super(props);

    /* TODO: toggle the state to change the class to active to keep the line underneath */

    this.state = {
      active: false
    };
  }

  render() {
    return (
      <ul className="container">
        {data.cities.map((city, index) => {
          return (
            <li className={"num" + index} key={city.section}>
              <a href="#" id={"num" + index}>
                {city.label}
              </a>
            </li>
          );
        })}
        <hr />
      </ul>
    );
  }
}

export default NavBar;
