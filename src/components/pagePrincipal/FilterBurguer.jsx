import React from "react";
import CardsProducts from "../Home/CardsProducts";

const FilterBurguer = ({ items, clickPageProduct }) => {
  return (
    <div>
      <div>
        <p className="font-semibold text-[18px] text-blackPrimary pt-8">
          Burguer
        </p>
      </div>
      {items &&
        items
          .filter((product) => product.category === "Burguer")
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

export default FilterBurguer;
