import React from "react";
import "./navbar.css";
import logoDesktop from "../../assets/images/logo.png";
import logoMobile from "../../assets/images/mobile-logo.png";
import { FaUserPlus } from "react-icons/fa";

interface NavbarProps{
    onClick: () => void;
}
export default function Navbar({onClick}:NavbarProps) {
  return (
    <nav className="nav-container">
      <div className="logo-container">
        <img className="desktop-logo" src={logoDesktop} alt="logo" />
        <img className="mobile-logo" src={logoMobile} alt="logo" />
      </div>
      <div  onClick={onClick} className="add-employee">
        <FaUserPlus className="userplus-icon"/>
        <h2> Add New Employee</h2>
      </div>
    </nav>
  );
}
