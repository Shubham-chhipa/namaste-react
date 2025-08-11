import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom"; //Hook
import { MENU_API } from "../utils/constants";
import ItemCategory from "./ItemCategory";
import NestedItemCategory from "./NestedItemCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const [resMenu, setResMenu] = useState([]);
  // console.log("menu rendered");
  const { resId } = useParams(); //This hook gives us access to params(as an object) passed in request

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    //finding array of cards where @type includes food.v2.ItemCategory || food.v2.NestedItemCategory
    const menuData = json?.data?.cards
      ?.find((obj) => obj?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (obj) =>
          obj?.card?.card["@type"].includes("ItemCategory") ||
          obj?.card?.card["@type"].includes("NestedItemCategory")
      );

    // console.log(menuData);

    //bringing out only the necessary fields from each card of menuData array
    const organizedMenuData = menuData.map((item) => {
      const type = item?.card?.card["@type"];
      const title = item?.card?.card?.title;
      const itemCards = item?.card?.card?.itemCards || []; //some card don't have itemCards coz they are nested(NestedItemCategory)
      const categories = item?.card?.card?.categories || []; //some card don't have categories coz they are nornal item(ItemCategory)

      //based on the type value of card returning  an object
      if (type.includes("NestedItemCategory")) {
        return {
          title,
          type: "nested", //custom field
          categories: categories.map((subCategory) => {
            //removed the not needed data from categories
            return {
              title: subCategory.title,
              itemCards: subCategory.itemCards,
            };
          }),
        };
      } else {
        return {
          title,
          type: "item", //custom field
          itemCards,
        };
      }
    });

    setResInfo(
      //found restuarant data independent of array element position
      json?.data?.cards.find((item) =>
        item?.card?.card["@type"]?.includes("food.v2.Restaurant")
      )?.card?.card?.info
    );
    setResMenu(organizedMenuData);
  };

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
      <h1>{name}</h1>
      <h2>
        {avgRating} stars | {costForTwoMessage}
      </h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>Outlet: {areaName}</h4>
      <h4>{sla.slaString}</h4>
      <h4>
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
