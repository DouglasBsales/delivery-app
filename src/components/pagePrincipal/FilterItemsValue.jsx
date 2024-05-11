import { useContext } from "react";
import CardsProducts from "../Home/CardsProducts";
import { HomeContext } from "@/Context/Home/HomeContext";

const FilterItemsValue = () => {
  const { filteredItems, arrayFavoritos, setArrayFavoritos, items } =
    useContext(HomeContext);

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
