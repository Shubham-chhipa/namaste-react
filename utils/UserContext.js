import { createContext } from "react"; //utility function to create context given by react

//Creating context
const UserContext = createContext({
  loggedInUser: "Default User",
});

export default UserContext;
