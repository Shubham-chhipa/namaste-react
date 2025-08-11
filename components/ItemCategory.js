import MenuItem from "./MenuItem";

const ItemCategory = (props) => {
  const { title, itemCards } = props?.data;
  // console.log(props);
  return (
    <div>
      <h2>
        {title}({itemCards.length})
      </h2>
      <ul>
        {itemCards.map((item) => (
          <MenuItem key={item?.card?.info?.id} menuInfo={item?.card?.info} />
        ))}
      </ul>
    </div>
  );
};

export default ItemCategory;
