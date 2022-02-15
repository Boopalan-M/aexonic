import Favorite from "@mui/icons-material/Favorite";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import React, { useContext } from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import Home from "../Home/Home";
import "./Header.css";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
function Header() {
  const { cartItems, onAdd, prodcts } = useContext(cartContext);
  return (
    <>
      <div className="header">
        <div className="header_text">
          <div className="header_heading">McDonald's</div>
          <div className="header_ratings">
            <div className="header__option">
              <span>
                {" "}
                <AiFillStar /> 4.3{" "}
              </span>
            </div>
            <div className="header__option">
              <span>| </span>
            </div>
            <div className="header__option">
              <span> 35 Mins </span>
            </div>
            <div className="header__option">
              <span>| </span>
            </div>
            <div className="header__option">
              <span>₹ 400 for two </span>
            </div>
          </div>

          <div className="header__search">
            <SearchIcon className="header__searchicon" />
            <input
              type="text"
              placeholder="Search for dishes..."
              className="header__searchinput"
            />
            <div className="header__checkboxouter">
              <FormControlLabel
                control={<Checkbox />}
                className="header__checkbox"
                label="Veg Only"
              />
            </div>
            <div className="header__checkboxouter">
              <span className="header__favourites">
                {" "}
                <Checkbox
                  className="header__checkbox"
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </span>
              <span> Favourite</span>
            </div>
          </div>
        </div>

        <Link to="/cart">
          <div className="Header_carticon">
            {" "}
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartItems?.length} color="secondary">
                <ShoppingCartIcon className="Header_Shoppingcart" />
              </StyledBadge>
            </IconButton>
          </div>
        </Link>
      </div>
      <Home />
    </>
  );
}

export default Header;
