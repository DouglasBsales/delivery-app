import React from "react";
import CardsProducts from "../Home/CardsProducts";

const FilterItemsValue = ({filteredItems, clickPageProduct}) => {
  return filteredItems.map((product) => (
    <div key={product.id}>
      <CardsProducts
        id={product.id}
        name={product.name}
        category={product.category}
        photo={product.photo}
        price={product.price}
        descriptionCard={product.descriptionCard}
        clickPageProduct={clickPageProduct}
      />
    </div>
  ));
};

export default FilterItemsValue;
