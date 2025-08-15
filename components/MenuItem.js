import { RESTAURANT_MENU_IMG } from "../utils/constants";

const MenuItem = (props) => {
  // console.log(props);
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
        <button className="absolute px-7 mt-28 m-5  bg-white text-green-400 font-semibold border-gray-600 border-1 rounded-md">
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
