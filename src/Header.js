import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { ShoppingCartRounded } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <nav className="header">
      {/* logo part with link  */}
      <Link to="/">
        <img className="header__logo" src="/image/logo.png"></img>
      </Link>

      {/* searchbox   */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links */}
      <div className="header__nav">
        {/* 1stlinkk */}

        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLinTwo">Sign In</span>
          </div>
        </Link>
        <div className="header__hide">
          {/* 2ndlinkk */}
          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLinTwo"> & Order</span>
            </div>
          </Link>
          {/* 3rdlinkk */}
          <Link to="/" className="header__link ">
            <div className="header__option">
              <span className="header__optionLineOne">Your</span>
              <span className="header__optionLinTwo">Prime</span>
            </div>
          </Link>
        </div>
        {/* Basket Icon */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* shopping Icon  */}
            <ShoppingCartRounded />
            {/* number of item in basket  */}
            <span className="header__optionLinTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
