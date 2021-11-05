import React from "react";
import Header from "../components/header/Header";
import HotelView from "../components/hotel-view/HotelView";
import Sidebar from "../components/sidebar/Sidebar";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <HotelView />
      </div>
    </div>
  );
};

export default HomePage;
