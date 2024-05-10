import React from "react";
import CardsProducts from "../Home/CardsProducts";

const TodosItens = ({
  itemsBest,
  clickPageProduct,
  arrayFavoritos,
  setArrayFavoritos,
  items,
}) => {
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
                clickPageProduct={clickPageProduct}
                arrayFavoritos={arrayFavoritos}
                setArrayFavoritos={setArrayFavoritos}
                items={items}
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
                  clickPageProduct={clickPageProduct}
                  arrayFavoritos={arrayFavoritos}
                  setArrayFavoritos={setArrayFavoritos}
                  items={items}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TodosItens;