import React from "react";
import CardsProducts from "../Home/CardsProducts";

const MaisProcurados = ({ itemsBest, clickPageProduct }) => {
  return (
    <div>
      <div className="pt-[36px]">
        <p className="font-semibold text-[18px] text-blackPrimary">
          Mais procurados
        </p>
      </div>
      {itemsBest &&
        itemsBest.map((product) => (
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

export default MaisProcurados;
