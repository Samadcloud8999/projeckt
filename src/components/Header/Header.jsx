import React from "react";
import "./Header.module.css";
import logo from "../assets/logo.svg"; // Замените на свой логотип

function Header() {
  return (
    <header className="header-top">
      <div className="header-top__container">
        <div className="logo">
          <img src={logo} alt="Логотип" />
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#">Главная</a>
            </li>
            <li className="nav__item">
              <a href="#">О нас</a>
            </li>
            <li className="nav__item">
              <a href="#">Услуги</a>
            </li>
            <li className="nav__item">
              <a href="#">Контакты</a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="btn btn-primary">Связаться</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
