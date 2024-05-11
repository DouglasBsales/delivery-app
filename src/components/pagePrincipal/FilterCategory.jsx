
import CardsProducts from "../Home/CardsProducts";
import { HomeContext } from "@/Context/Home/HomeContext";
import { useContext } from "react";

const FilterCategory = () => {
  const { items, categoryItem } = useContext(HomeContext)

  return (
    <div>
      <div>
        <p className="font-semibold text-[18px] text-blackPrimary pt-8">
          {categoryItem}
        </p>
      </div>
      {items &&
        items
          .filter((product) => product.category === categoryItem)
          .map((product) => (
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
  );
};

export default FilterCategory;
