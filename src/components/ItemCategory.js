import MenuItem from "./MenuItem";

const ItemCategory = (props) => {
  const { title, itemCards } = props?.data;
  // console.log(props);
  return (
    <div className="pt-4 border-t-10 border-gray-300">
      <h2 className="text-xl font-bold">
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
