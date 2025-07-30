import RestaurantCard from "./Restaurantcard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  //Local state variable -Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //you can name state variable and its update function anything you want . You pass the default value for the state variable inside useState.
  useEffect(() => {
    //useEffect take 2 arguments a callback function and a dependency array
    fetchData(); //This callback will be called after the component(Body) is rendered
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2215115&lng=73.1644628&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map(
          (
            restaurant //If listOfRestaurants changes then our cards in UI will change
          ) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
