import React from "react";
import ReactDOM from "react-dom/client"; //earlier it used to work with react-dom but now we need to go inside client
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
