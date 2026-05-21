import logo from "../../assets/logored2.png"
import { Nav } from "../Nav/Nav";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} />
        <span>Tecnologia</span>
      </div>
      <Nav />
    </header>
  );
};