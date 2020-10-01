import React, { useState } from "react";

// external libraries
import { Link, NavLink } from "react-router-dom";

// my components
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { ButtonPrimary } from "../Button/Button.component";
import { SearchInput } from "../search-input/search-input.component";

//styles
import "./Header.styles.scss";

export const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const handleNavToggle = () => {
    console.log(isNavCollapsed);
    if (isNavCollapsed) return setIsNavCollapsed(false);
    setIsNavCollapsed(true);
  };

  return (
    <header className="header container">
      <div className="header__left">
        <Link to="/">
          <Logo className="header-logo" />
        </Link>
      </div>
      <div className={`header__right ${isNavCollapsed ? "show" : ""}`}>
        <SearchInput placeholder="Search Me" />
        <ul className="nav-list">
          <li className="nav-list__item">
            <NavLink className="nav-list__link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink className="nav-list__link" to="/p">
              Posts
            </NavLink>
          </li>
          <li className="nav-list__item">
            <NavLink className="nav-list__link" to="#">
              Contact Me
            </NavLink>
          </li>
        </ul>
        <ButtonPrimary className="header__button">Random</ButtonPrimary>
      </div>
      <button onClick={handleNavToggle} className="header__toggle-nav">
        <span
          className={`header__toggle-nav__button ${
            isNavCollapsed ? "active" : ""
          }`}
        ></span>
      </button>
    </header>
  );
};
