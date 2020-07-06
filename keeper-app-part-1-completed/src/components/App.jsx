import React from "react";
import Header from "./Header";
import Styles from "/public/styles.css"
import Year from "./Semester";

function App() {
  return (
    <div>
      <Header />
      <Year/>
      <Year/>
      <Year/>
    </div>
  );
}

export default App;
