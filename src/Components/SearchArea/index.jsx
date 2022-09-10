import React from "react";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./SearchArea.css";

const SearchArea = () => {
  return (
    <div className="navbar-and-searchbar">
      <nav className="nav-bar">
        <span className="main-heading">Search</span>
      </nav>
      <div className="text-box">
        <Input
          type="text"
          placeholder="Food name"
          prefix={<SearchOutlined />}
        />
      </div>
    </div>
  );
};

export default SearchArea;
