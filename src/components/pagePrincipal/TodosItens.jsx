import React from "react";
import CardsProducts from "../Home/CardsProducts";
import { useHomeContext } from "@/hooks/useHomeContext";

const TodosItens = () => {
  const { itemsBest, items } = useHomeContext();

  return (
    <div>
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
                portion={product.portion}
                ml={product.ml}
                photo={product.photo}
                price={product.price}
                descriptionCard={product.descriptionCard}
              />
            </div>
          ))}
        <div>
          <div className="pt-[36px]">
            <p className="font-semibold text-[18px] text-blackPrimary">
              Demais itens
            </p>
          </div>
          {items &&
            items.map((product) => (
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
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodosItens;
