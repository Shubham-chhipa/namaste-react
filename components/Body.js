import RestaurantCard from "./Restaurantcard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; //component
import useOnlineStatus from "../utils/useOnlineStatus";

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
      //we can call setsatevariablename methods anywhere inside our component
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus(); //custom hook

  if (onlineStatus === false) {
    return (
      <h1>It seems you're offline, please check your internet connection!!</h1>
    );
  }

  return listOfRestaurants.length === 0 ? ( //Conditional rendering
    <Shimmer />
  ) : (
    <div className="mx-70">
      <div className="flex items-center  ">
        <div className="px-4 ">
          <input
            type="text"
            className="border-1 m-2 bg-white "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              console.log(e.target.value);
            }}
          />
          <button
            className="mx-2 px-2 border-[1px] text-[#E4D6E5] bg-[#984216] rounded-md"
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
        <div>
          <button
            className="filter-btn mx-2 px-2 border-[1px] text-[#E4D6E5] bg-[#984216] rounded-md"
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
      </div>

      <div className="flex flex-wrap ">
        {filteredRestaurants.map(
          (
            restaurant //If listOfRestaurants changes then our cards in UI will change
          ) => (
            <Link
              to={"restaurants/" + restaurant.info.id}
              key={restaurant.info.id} //Now we are mapping over  <Link> </Link> component so key should be on <Link>  and not on <RestaurantCard />, Key should be over the parent JSX  i.e, <Link> coz we are mapping over it.
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Body;
