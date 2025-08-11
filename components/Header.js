import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //Link component given us by react-router-dom it will refresh the components which needs to be changed, avoiding whole page reload.
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  //console.log("Header render"); //To see that header component is rendered/called again.

  //In each case useEffect will be called on/after initial render
  //If no dependency array  => useEffect is called on/after every render
  //If dependency array is empty [] => useEffect is only called on/after initial render(just once)
  //If dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated (after component render)
  useEffect(() => {
    //console.log("useEffect called");
  }, [btnNameReact]); // we can pass multiple dependecies in dependency array so if one or(||) the other dependency changes then useEffect() wil be called
  //If we want to do 2 different things on change of 2 different state variables then we can use 2 useEffect hooks for each state variable(dependency)

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Conatct Us</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
