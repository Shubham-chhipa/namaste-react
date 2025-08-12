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
    <div className="menu">
      {/* {RestaurantInfo} */}
      <h1>{name}</h1>
      <h2>
        {avgRating} stars | {costForTwoMessage}
      </h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>Outlet: {areaName}</h4>
      <h4>{sla.slaString}</h4>
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
