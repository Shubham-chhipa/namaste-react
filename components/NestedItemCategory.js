import MenuItem from "./MenuItem";

const NestedItemCategory = (props) => {
  //   console.log(props);
  const { title, categories } = props?.data;
  //   console.log(categories);
  return (
    <div>
      <h2>{title}</h2>
      <div>
        {categories.map((subcategory) => (
          <div key={subcategory?.title}>
            <h3>
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
