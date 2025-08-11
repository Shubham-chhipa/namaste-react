import { RESTAURANT_MENU_IMG } from "../utils/constants";

const MenuItem = (props) => {
  // console.log(props);
  const { name, description, price, defaultPrice, imageId } = props?.menuInfo;
  return (
    <li>
      <div>
        <h4>{name}</h4>
        {price && <span>₹{price / 100}</span>}
        {defaultPrice && <span>₹{defaultPrice / 100}</span>}
        {description && <p>{description}</p>}
      </div>
      <div>{imageId && <img src={RESTAURANT_MENU_IMG + imageId} />}</div>
    </li>
  );
};

export default MenuItem;
