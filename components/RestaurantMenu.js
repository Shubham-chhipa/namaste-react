import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  console.log("menu rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2215115&lng=73.1644628&restaurantId=831927&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);

    // console.log(
    //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
    //     ?.card?.itemCards
    // );
    setResInfo(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };

  if (resInfo === null) {
    return <Shimmer />;
  }
  console.log(resInfo);
  console.log(resInfo[0]); ///null due to initial render so need to use null condition before
  const { name } = resInfo[0]?.card?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Chhole Kulche</li>
        <li>Paneer Tikka</li>
        <li>Pizza</li>
        <li>Samosa</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
