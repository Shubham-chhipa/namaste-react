import RestaurantCard from "./Restaurantcard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local state variable -Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList); //you can name state variable and its update function anything you want . You pass the default value for the state variable inside useState.
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("Clicled");
            console.log(listOfRestaurants);
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            console.log(filteredList);
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
