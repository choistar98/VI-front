
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {

  const [showProductsMenu, setShowProductsMenu] = useState(false);

  const handleProductsMenuHover = () => {
    console.log("hi");
    setShowProductsMenu(true);
  };

  const handleProductsMenuLeave = () => {
    console.log("bye");
    setShowProductsMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="nav_item_left">
      <a></a>
      </div>
      
      <div className="nav_item_center">
        <ul className="nav_ul">
          <li className="nav-item" 
            onMouseEnter={
              handleProductsMenuHover}
            onMouseLeave={
              handleProductsMenuLeave
            }>
            <Link to="/" className="nav-link">Home{showProductsMenu && (
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="/products/shirts" className="sub-menu-item-link">Shirts</Link>
                </li>
                <li className="sub-menu-item" >
                  <Link to="/products/pants" className="sub-menu-item-link">Pants</Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/products/shoes" className="sub-menu-item-link">Shoes</Link>
                </li>
              </ul>
            )}</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">모의면접{showProductsMenu && (
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="/products/shirts" className="sub-menu-item-link">Shirts</Link>
                </li>
                <li className="sub-menu-item" >
                  <Link to="/products/pants" className="sub-menu-item-link">Pants</Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/products/shoes" className="sub-menu-item-link">Shoes</Link>
                </li>
              </ul>
            )}</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">스터디그룹{showProductsMenu && (
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="/products/shirts" className="sub-menu-item-link">Shirts</Link>
                </li>
                <li className="sub-menu-item" >
                  <Link to="/products/pants" className="sub-menu-item-link">Pants</Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/products/shoes" className="sub-menu-item-link">Shoes</Link>
                </li>
              </ul>
            )}</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">커뮤티니{showProductsMenu && (
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="/products/shirts" className="sub-menu-item-link">Shirts</Link>
                </li>
                <li className="sub-menu-item" >
                  <Link to="/products/pants" className="sub-menu-item-link">Pants</Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/products/shoes" className="sub-menu-item-link">Shoes</Link>
                </li>
              </ul>
            )}</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">고객센터{showProductsMenu && (
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <Link to="/products/shirts" className="sub-menu-item-link">Shirts</Link>
                </li>
                <li className="sub-menu-item" >
                  <Link to="/products/pants" className="sub-menu-item-link">Pants</Link>
                </li>
                <li className="sub-menu-item">
                  <Link to="/products/shoes" className="sub-menu-item-link">Shoes</Link>
                </li>
              </ul>
            )}</Link>
          </li>
        </ul>
      </div>
      <div className="nav_itme_right">
        <p>사람로고</p>
      </div>
    </nav>
  );
}

export default NavigationBar;