import RestaurantCard from "./Restaurantcard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  //Local state variable -Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]); //you can name state variable and its update function anything you want . You pass the default value for the state variable inside useState.
  const [filteredRestaurants, setFilteredRestaurants] = useState([]); //we created another state variable for managing the filtered restaurants so we don't update the listOfRestaurants
  const [searchText, setSearchText] = useState("");

  //Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

  useEffect(() => {
    //useEffect take 2 arguments a callback function and a dependency array. //This callback will be called after the component(Body) is rendered
    fetchData();
  }, []); //use useEffect whenever you have to do soemthing after the component is rendered

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2215115&lng=73.1644628&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? ( //Conditional rendering
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchBox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restaurants and update the UI
              const searchFilter = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              // console.log(listOfRestaurants);
              // console.log(searchFilter);
              setFilteredRestaurants(searchFilter);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList); //to update the state variable we have to use the setListOfRestuarants(setVariableName) and pass the new value as an argument, React will update the state variable and it will trigger the re-render of the respective component with the updated value. It triggered the Reconcilaation cycle.
          }}
        >
          Top rated restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.map(
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
