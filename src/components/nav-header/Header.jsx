import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Header.scss";
const Header = () => {
  return (
    <div className="container">
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/One_Piece_Logo.svg/640px-One_Piece_Logo.svg.png"
          alt="logo"
        />
      </div>
      <div className="buttons">
        <button>Home</button>
        <button>Store</button>
        <button>Account</button>
        <button>Contact</button>
        <button>About</button>
        <button>
          <AiOutlineShoppingCart size={28} />
        </button>
      </div>
    </div>
  );
};

export default Header;
