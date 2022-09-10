import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import "./SearchArea.css";

const SearchArea = () => {
  return (
    <div className="navbar-and-searchbar">
      <nav className="nav-bar">
        <span className="main-heading">Search</span>
      </nav>
      <div className="text-box">
        <SearchOutlined
          size={10}
          style={{
            position: "absolute",
            left: "30px",
            color: "#30384d",
            bottom: "2rem",
          }}
        />
        <input type="text" placeholder="Food name" className="searchbar" />
      </div>
    </div>
  );
};

export default SearchArea;
