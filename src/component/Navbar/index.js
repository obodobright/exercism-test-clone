import React from "react";
import logo from "../../img/logo.png";
import dashboard from "../../img/dashboard.png";
import mentor from "../../img/mentor.png";
import railroad from "../../img/railroad.png";
import mesenger from "../../img/mesenger.png";
import chat from "../../img/chat.png";
import notify from "../../img/notify.png";
import badge from "../../img/badge.png";
import conversation from "../../img/conversation.png";
import menu from "../../img/menu.png";

import erik from "../../img/erik.png";

import "./style.css";

export default function Navbar() {
  return (
    <nav className="containers">
      <main className="wrapper">
        <div className="logo mr-4">
          <img src={logo} alt="" />
        </div>
        <div className="left-bar">
          <div className="flex items-center mx-4 btn-cursor ">
            <img src={dashboard} alt="" className="pr-2" />
            <p>Dashboard</p>
          </div>
          <div className="flex items-center mx-4 btn-cursor ">
            <img src={railroad} alt="" className="pr-2" />
            <p>Tracks</p>
          </div>
          <div className="flex items-center mx-4 btn-cursor">
            <img src={conversation} alt="" className="pr-2" />
            <p>Mentoring</p>
          </div>
          <div className="flex items-center mx-4 btn-cursor">
            <img src={mentor} alt="" className="pr-2" />
            <p>Contribute</p>
          </div>
        </div>
        <div className="right-bar">
          <div className="mx-3 btn-cursor">
            <img src={mesenger} alt="" />
          </div>
          <div className="mx-3 btn-cursor">
            <img src={chat} alt="" />
          </div>
          <div className="mx-3 btn-cursor notify-me">
            <img src={notify} alt="" />
            <div className="alert">2</div>
          </div>
          <div className="mx-3 btn-cursor">
            <img src={badge} alt="" />
          </div>
          <div className="mx-3 btn-cursor">
            <img src={erik} alt="" className="profile-img" />
          </div>
          <div className="more-btn mx-3 btn-cursor">
            <img src={menu} alt="" />
          </div>
        </div>
      </main>
    </nav>
  );
}
