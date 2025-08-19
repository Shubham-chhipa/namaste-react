import { useDispatch } from "react-redux";
import { RESTAURANT_MENU_IMG } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const MenuItem = (props) => {
  // console.log(props);
  const dispatch = useDispatch(); //use dispatch is a hook which gives us access to dispatch function

  const handleAddClick = () => {
    //dispatch an action
    dispatch(addItem("pizza")); //we will pass the action inside the dispatch method and now whatever i will pass inside that action as an argument will be added to our cart, so basically whatever i will pass inside the action(addItem)  that will go the
    //reducer function action adn that too  inside a payload i.e, action.payload = passed value in action(addItem). Don't worry about he reducer function having 1st argument state and 2nd action , internally redux is handlig everything
    //So when you dispatch an action passing an argument lets say "pizza" then redux will create an object
    // {
    //   payload: "pizza"
    // } // and pass this as the 2nd argument: action to the respective action:reducer
  };

  const { name, description, price, defaultPrice, imageId } = props?.menuInfo;
  return (
    <li className="flex justify-between border-b border-gray-300 ">
      <div className="w-11/12 my-4">
        <h4 className="text-xl font-semibold">{name}</h4>
        {price && <span className="text-md font-bold">₹{price / 100}</span>}
        {defaultPrice && (
          <span className="text-md font-bold">₹{defaultPrice / 100}</span>
        )}
        {description && (
          <p className="my-4 text-gray-600 font-semibold w-3/4">
            {description}
          </p>
        )}
      </div>
      <div className="w-32 h-32 my-4 overflow-hidden rounded-xl ">
        <button
          className="absolute px-7 mt-28 m-5  bg-white text-green-400 font-semibold border-gray-300 border-1 rounded-md shadow-xl"
          onClick={handleAddClick}
        >
          ADD
        </button>
        {imageId && (
          <img
            className="w-full h-full object-cover "
            src={RESTAURANT_MENU_IMG + imageId}
          />
        )}
      </div>
    </li>
  );
};

export default MenuItem;
