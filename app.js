import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"; //earlier it used to work with react-dom but now we need to go inside client
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Groceries from "./components/Groceries";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; //RouterProvider and Outlet are  React components
import { Provider } from "react-redux"; //Provider component from react redux coz it has to do with react-redux stuff
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//lazy loading/Chunking/Code Splitting/dynamic bundling/on demand loading/dynamic import Groceries
const Groceries = lazy(() => import("./components/Groceries")); //lazy is a function which takes a callback function which returns result of import function which takes path of Groceries

const AppLayout = () => {
  const [userName, setUserName] = useState(); //we linked state variable with the context(UserContext)

  //authetication logic
  useEffect(() => {
    //Make an api call and send username and password
    const data = {
      //simulating data received from api call
      name: "Shubham Chhipa",
    };
    setUserName(data.name);
  }, []);

  //We use UserCOntext.Provider(Provider power given by r eact when we create UserCOntext) and pass value which will update react context , basically the value overwrites the context, and wrapping our whole app inside Userconetxt.Provider makes the
  //context(variables in context) available anywhere inside our app
  //we tied our UserCOntext with a local state variable, so whwnever our state variable changes the UserContext changes, and we can also pass in setUserName, So we can access setUserName and loggedInUser from anywhere in my app. So i can do a read write
  // on my context from anywhere i want to
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}; //Outlet component will be replaced with the component according to the route path

//Used to give route configuration
const appRouter = createBrowserRouter([
  //Takes a list of objects as argument each object has path and respective element which we want to render //Just creating configuration is not enough we need to pass it too
  {
    path: "/",
    element: <AppLayout />,

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
        path: "/groceries",
        element: (
          <Suspense fallback={<div>Loading....</div>}>
            <Groceries />
          </Suspense>
        ), //Suspense is component given by react, we wrap our component which we are trying to lazy load around Suspense component, it takes time when we press Groceries link to load the Groceries bundle file , So during that time Suspenese shows a fallback JSX in the browser which we pass to it
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ], //<Body />. <About /> and <Contact /> are children of AppLayout
    errorElement: <Error />, //In case of error render Error component
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Earlier here we were rendering AppLAyout directly now to make it dynamic w.r.t routes
root.render(<RouterProvider router={appRouter} />); //here we pass the route configuration as props to our RouterProvider component to render
