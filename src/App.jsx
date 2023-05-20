import { useState } from "react";
import "./App.css";
import Barchart from "./components/Barchart";
import { chartData } from "./data";
import logo from "./assets/images/logo.svg";

function App() {
  return (
    <section className="container">
      <div className="balance">
        <div>
          <p className="balance-title">My balance</p>
          <p className="balance-total">$921.48</p>
        </div>
        <div className="balance-logo">
          {" "}
          <img src={logo} alt="" />
        </div>
      </div>
      <Barchart />
    </section>
  );
}

export default App;
