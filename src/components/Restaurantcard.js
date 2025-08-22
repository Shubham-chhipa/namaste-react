import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="w-[463px] p-2 m-4 rounded-xl overflow-hidden bg-white transform transition duration-300 hover:scale-105  hover:shadow-xl cursor-pointer">
      <div className="w-full h-[300px] overflow-hidden rounded-xl mb-4">
        <img
          className="w-full h-full object-cover object-center"
          alt="res-logo"
          src={CDN_URL + resData.info.cloudinaryImageId}
        />
      </div>

      <h3 className="font-bold">{name}</h3>
      <h4>
        <span className="font-medium">{avgRating} ⭐</span> |{" "}
        <span className="font-semibold">{sla.deliveryTime} mins</span>
      </h4>
      <h4 className="text-gray-700">{cuisines.join(", ")}</h4>
      <h4 className="text-gray-700">{costForTwo}</h4>
    </div>
  );
};

export const withNewLabel = (RestaurantCard) => {
  //Higher order Component
  return (props) => {
    return (
      <div className="relative w-fit">
        <label className="absolute top-0 left-0 bg-black text-white m-4 px-2 py-1 z-10 rounded ">
          Newly Onboarded
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
