import React from "react";

import logo from "../../assets/logo.png";
import user from "../../assets/user.jpg";
import bookmark from "../../assets/bookmark.svg";

import search from "../../assets/magnifying-glass.svg";
import chat from "../../assets/chat.svg";

import { ReactComponent as BookMark } from "../../assets/bookmark.svg";
import { ReactComponent as Search } from "../../assets/magnifying-glass.svg";
import { ReactComponent as Chat } from "../../assets/chat.svg";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search hotels"
        />
        <button className="search__button">
          {/* <img src={search} alt="sea" className="search__icon" /> */}
          <Search />
        </button>
      </form>
      <div className="user-nav">
        <div className="user-nav__icon-box">
          {/* <img src={bookmark} alt="" className="user-nav__iconbookmark" /> */}
          <BookMark className="user-nav__iconbookmark" />
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          {/* <img src={chat} alt="" className="user-nav__iconchat" /> */}
          <Chat className="user-nav__iconchat" />
          <span className="user-nav__messages">7</span>
        </div>

        <div className="user-nav__user">
          <img src={user} alt="user" className="user-nav__user-photo" />
          <span className="user-nav__user-name">Arlind</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
