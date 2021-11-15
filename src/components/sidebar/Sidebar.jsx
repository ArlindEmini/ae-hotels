import React from "react";

import "./Sidebar.scss";

import { ReactComponent as HomeIcon } from "../../assets/home.svg";
import { AiFillHome, GiAirplaneDeparture, FaKey, FiMap } from "react-icons/all";

const Sidebar = () => {
  const screenshots = [
    {
      id: 1,
      screen: "OG Documentation",
    },
    {
      id: 2,
      screen: "OG Blog",
    },
    {
      id: 3,
      screen: "OG Shop",
    },
    {
      id: 4,
      screen: "OG Shop | Home",
    },
  ];
  const idd = 5;

  console.log(screenshots[0].id);

  return (
    <div className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item active">
          <div className="side-nav__link">
            <AiFillHome className="side-nav__icon" />
            <span>Hotel</span>
          </div>
        </li>

        <li className="side-nav__item">
          <div className="side-nav__link">
            <GiAirplaneDeparture className="side-nav__icon" />
            <span>Flight</span>
          </div>
        </li>
        <li className="side-nav__item">
          <div className="side-nav__link">
            <FaKey className="side-nav__icon" />
            <span>Car Rental</span>
          </div>
        </li>
        <li className="side-nav__item">
          <div className="side-nav__link">
            <FiMap className="side-nav__icon" />
            <span>Tour</span>
          </div>
        </li>
      </ul>

      <div className="legal">&copy; 2021 by Arlind, All rights reserved</div>
    </div>
  );
};

export default Sidebar;
