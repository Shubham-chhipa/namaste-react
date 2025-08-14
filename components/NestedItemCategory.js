import MenuItem from "./MenuItem";

const NestedItemCategory = (props) => {
  //   console.log(props);
  const { title, categories } = props?.data;
  //   console.log(categories);
  return (
    <div className="pt-4 border-t-10 border-gray-300">
      <h2 className="text-xl font-bold">{title}</h2>
      <div>
        {categories.map((subcategory) => (
          <div className="my-4" key={subcategory?.title}>
            <h3 className="text-xl font-semibold">
              {subcategory?.title}({subcategory.itemCards.length})
            </h3>
            <ul>
              {subcategory?.itemCards.map((item) => (
                <MenuItem
                  key={item?.card?.info?.id}
                  menuInfo={item?.card?.info}
                />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NestedItemCategory;
