import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; //Hook

import ItemCategory from "./ItemCategory";
import NestedItemCategory from "./NestedItemCategory";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  // console.log("menu rendered");
  const { resId } = useParams(); //This hook gives us access to params(as an object) passed in request

  const [resInfo, resMenu] = useRestaurantMenu(resId); //custom hook(utility function) for data fetching logic
  // console.log(resInfo);
  // console.log(resMenu);
  if (resInfo === null) {
    return <Shimmer />;
  }
  // console.log(resMenu);
  const { name, areaName, price, cuisines, costForTwoMessage, avgRating, sla } =
    resInfo;
  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="px-150">
      <div className="pt-16">
        {/* {RestaurantInfo} */}
        <h1 className="font-bold text-3xl">{name}</h1>
      </div>
      <div className="pt-4 p-3 my-8 border-1 border-gray-300 rounded-3xl shad">
        <h2 className="text-lg font-bold">
          {avgRating} stars | {costForTwoMessage}
        </h2>
        <h3 className="text-orange-500 font-bold text-sm">
          {cuisines.join(", ")}
        </h3>
        <h4>
          <span className="font-bold text-sm">Outlet:</span>{" "}
          <span className="text-gray-500 font-medium text-sm">{areaName}</span>
        </h4>
        <h4 className="text-sm font-bold">{sla.slaString}</h4>
      </div>

      <h4>
        {/* {Restaurant Menu Categories} */}
        {resMenu.map((obj) =>
          obj.type === "item" ? (
            <ItemCategory key={obj?.title} data={obj} />
          ) : (
            <NestedItemCategory key={obj?.title} data={obj} />
          )
        )}
      </h4>
    </div>
  );
};

export default RestaurantMenu;
