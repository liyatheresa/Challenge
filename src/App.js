import React from "react";
import "./App.css";
import "antd/dist/antd.min.css";
import SearchArea from "./Components/SearchArea/index.jsx";
import Contents from "./Components/Contents/index.jsx";

const App = () => {
  return (
    <>
      <SearchArea />
      <Contents />
    </>
  );
};

export default App;
