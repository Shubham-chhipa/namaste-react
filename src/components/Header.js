import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom"; //Link component given us by react-router-dom it will refresh the components which needs to be changed, avoiding whole page reload.
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const { loggedInUser } = useContext(UserContext); //useContext is a hook given to us by react to use a context and we need to pass the context from which we want to access the data, coz there can be multiple different  contexts in our app

  //console.log("Header render"); //To see that header component is rendered/called again.
  const onlineStatus = useOnlineStatus();

  //Using selector to subscribing the store for READING the store data
  const cartItems = useSelector((store) => store.cart.items); //useSelector is a hook which gives us access to the whole store, It takes a callback function and the argument of that callback function has access of the whole store from which we need only items portion of cart slice.
  //the name is useSelector coz you are selecting a portion of your store, so you are subscribing to teh selected portion of the store
  // console.log(cartItems); //cartItems will have the value of store.cart.items

  //In each case useEffect will be called on/after initial render
  //If no dependency array  => useEffect is called on/after every render
  //If dependency array is empty [] => useEffect is only called on/after initial render(just once)
  //If dependency array is [btnNameReact] => useEffect is called everytime btnNameReact is updated (after component render)
  useEffect(() => {
    //console.log("useEffect called");
  }, [btnNameReact]); // we can pass multiple dependecies in dependency array so if one or(||) the other dependency changes then useEffect() wil be called
  //If we want to do 2 different things on change of 2 different state variables then we can use 2 useEffect hooks for each state variable(dependency)

  return (
    <div className="flex justify-between shadow-xl  mb-0">
      <div className="logo-container">
        <img className="w-30" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="flex items-center">
        <ul className="mr-4 p-2 flex text-lg font-medium">
          <li className="m-2 p-2">Online: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="m-2 p-2">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2 p-2 ">
            <Link to="/about">About Us</Link>
          </li>
          <li className="m-2 p-2">
            <Link to="/contact">Conatct Us</Link>
          </li>
          <li className="m-2 p-2">
            <Link to="/groceries">Groceries</Link>
          </li>
          <li className="m-2 p-2">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
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
          <li className="m-2 p-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
