import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Groceries = () => {
  const { loggedInUser } = useContext(UserContext);

  return (
    <div>
      <h1 className="font-bold">{loggedInUser}</h1>
      <h1>
        Our grocery online store, and we have a lot of components inside this
        web page
      </h1>
    </div>
  );
};

export default Groceries;
