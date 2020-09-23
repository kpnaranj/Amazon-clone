import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      {/*The header itself will contain the following */}
      <Link to="/">
        <img
          className="header__logo"
          src="https://onlinebusinessmanager.com/wp-content/uploads/2018/09/white-amazon-logo-png-6.png"
          alt="logo"
        />
      </Link>
      {/*This is the search */}
      <div className="header__search">
        <input className="header__searchInput" type="text"></input>
        <SearchIcon className="header__searchIcon" />
      </div>

      {/**This is the nav var  */}
      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__Line1">
              Hello {!user ? "Guess" : user?.email}
            </span>
            <span className="header__Line2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        {/**This is opt2 */}
        <Link to="/orders">
          <div className="header__option">
            <span className="header__Line1">Returns</span>
            <span className="header__Line2">& Orders</span>
          </div>
        </Link>
        {/**This is opt3 */}

        <div className="header__option">
          <span className="header__Line1">Your</span>
          <span className="header__Line2">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__Line2 header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
