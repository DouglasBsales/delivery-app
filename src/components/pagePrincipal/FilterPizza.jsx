import React from "react";
import CardsProducts from "../Home/CardsProducts";

const FilterPizza = ({items, clickPageProduct}) => {
  return (
    <div>
      <div>
        <p className="font-semibold text-[18px] text-blackPrimary pt-8">
          Pizza
        </p>
      </div>
      {items &&
        items
          .filter((products) => products.category === "Pizza")
          .map((product) => (
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
          ))}
    </div>
  );
};

export default FilterPizza;
