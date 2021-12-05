import React, { useState } from "react";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
import "../../App.css";

function Home() {
  const [Theme, setTheme] = useState(true);

  function changeTheme() {
    setTheme((prev) => !prev);
  }

  return (
    <div className={Theme ? "main-container" : "theme-switch"}>
      {/* if child components are more in number, so then best would be to 'useContext' hook for passing props*/}
      <Header changeTheme={changeTheme} dark={Theme} />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
