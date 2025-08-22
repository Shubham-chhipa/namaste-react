import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

//Custom hook for all the data fetching conatins:  useEffect fetchData and it just return the
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null); //we can do state variable creation in our custom hook
  const [resMenu, setResMenu] = useState([]);
  console.log("Custom hook ran");
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

      //based on the type value of card returning a custom object
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

  return [resInfo, resMenu];
};

export default useRestaurantMenu;
