import React from "react";
import CardsProducts from "../Home/CardsProducts";

const FilterItemsValue = ({
  clickPageProduct,
  arrayFavoritos,
  setArrayFavoritos,
  items,
  filteredItems
}) => {
 
  return (
    filteredItems.map((product) => (
      <div key={product.id}>
        <CardsProducts
          id={product.id}
          name={product.name}
          category={product.category}
          portion={product.portion}
          ml={product.ml}
          photo={product.photo}
          price={product.price}
          descriptionCard={product.descriptionCard}
          clickPageProduct={clickPageProduct}
          arrayFavoritos={arrayFavoritos}
          setArrayFavoritos={setArrayFavoritos}
          items={items}
        />
      </div>
    ))
  );
};

export default FilterItemsValue;
