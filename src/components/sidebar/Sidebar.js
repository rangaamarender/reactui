import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import MenuItems from "./SidebarMenu";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="" style={{ display: "flex" }}>
      <div style={{ width: isOpen ? "250px" : "60px" }} className="sidebar">
        <div className="top_section">
          <div
            style={{ display: isOpen ? "flex" : "none" }}
            className="logo-text"
          >
            <img src="./lucid.png" alt="logo"></img>
            <h1>Software</h1>
          </div>
          <div style={{ marginLeft: isOpen ? "60px" : "0px" }} className="bars">
            {/* <FaBars onClick={toggle} /> */}
            <img src="./menu.svg" alt="menu" onClick={toggle} />
            {/* <img src="./close-menu.svg" alt="closemenu" onClick={toggle}/> */}
          </div>
        </div>
        {MenuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon" onClick={()=>{localStorage.setItem("selectedPath",item.path)}} >{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
