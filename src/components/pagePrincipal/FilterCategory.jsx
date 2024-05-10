import { useHomeContext } from "@/hooks/useHomeContext";
import CardsProducts from "../Home/CardsProducts";

const FilterCategory = () => {
  const { items, arrayFavoritos, setArrayFavoritos, categoryItem } =
    useHomeContext();

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
                arrayFavoritos={arrayFavoritos}
                setArrayFavoritos={setArrayFavoritos}
                items={items}
              />
            </div>
          ))}
    </div>
  );
};

export default FilterCategory;
