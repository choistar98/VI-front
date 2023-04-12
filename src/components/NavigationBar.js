
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
  const mainMenuTag = [
    {name: "모의면접", subMenu:["면접보기","나의 면접결과 보기"]},
    {name: "스터디그룹", subMenu:["화상회의하기","그룹만들기","그룹 신청하기"]},
    {name: "커뮤니티", subMenu:["자유게시판", "면접게시판","취업게시판","스터디그룹모집게시판"]},
    {name: "고객센터", subMenu:["건의/질의하기","자주묻는 질문", "공지사항"]}
  ]

  const myPageSubMenu = {
    name:"마이페이지", subMenu:["정보 수정","면접 결과","내가 쓴글", "나의 스터디 그룹", "로그아웃", "회원 탈퇴"]
  }

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
        <Link to="/products/shoes"  className="nav-link">로그인</Link>
        <Link to="/products/shoes"  className="nav-link">마이메뉴</Link>
      </div>
    </nav>
  );
}

export default NavigationBar;