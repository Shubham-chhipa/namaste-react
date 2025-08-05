import React from "react";
import ReactDOM from "react-dom/client"; //earlier it used to work with react-dom but now we need to go inside client
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //RouterProvider and Outlet are  React components

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
}; //Outlet component will be replaced with the component according to the route path

//Used to give route configuration
const appRouter = createBrowserRouter([
  //Takes a list of objects as argument each object has path and respective element which we want to render //Just creating configuration is not enough we need to pass it too
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />, //In case of error render Error component
    children: [
      //Children  routes:
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ], //<Body />. <About /> and <Contact /> are children of AppLayout
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Earlier here we were rendering AppLAyout directly now to make it dynamic w.r.t routes
root.render(<RouterProvider router={appRouter} />); //here we pass the route configuration as props to our RouterProvider component to render
