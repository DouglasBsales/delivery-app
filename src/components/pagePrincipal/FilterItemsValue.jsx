import React from "react";
import CardsProducts from "../Home/CardsProducts";
import { useHomeContext } from "@/hooks/useHomeContext";

const FilterItemsValue = () => {
  const { filteredItems, arrayFavoritos, setArrayFavoritos, items } =
    useHomeContext();

  return filteredItems.map((product) => (
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
        arrayFavoritos={arrayFavoritos}
        setArrayFavoritos={setArrayFavoritos}
        items={items}
      />
    </div>
  ));
};

export default FilterItemsValue;
