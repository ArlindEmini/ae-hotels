import React from "react";

import "./Sidebar.scss";

import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { AiFillHome, GiAirplaneDeparture, FaKey, FiMap } from "react-icons/all";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <div className="side-bar__link">
            <AiFillHome />
            <span>Hotel</span>
          </div>
        </li>

        <li className="side-nav__item">
          <div className="side-bar__link">
            <GiAirplaneDeparture />
            <span>Flight</span>
          </div>
        </li>
        <li className="side-nav__item">
          <div className="side-bar__link">
            <FaKey />
            <span>Car Rental</span>
          </div>
        </li>
        <li className="side-nav__item">
          <div className="side-bar__link">
            <FiMap />
            <span>Tour</span>
          </div>
        </li>
      </ul>

      <div className="legal">&copy; 2021 by Arlind, All rights reserved</div>
    </div>
  );
};

export default Sidebar;
