import { createContext } from "react"; //utility function to create context given by react

//Creating context
const UserContext = createContext({
  //it takes an object as argument which is similar to global object, which we can access anywhere in our app
  loggedInUser: "Default User", //passing default value to initialize it
});

export default UserContext;
