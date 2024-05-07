import CardsProducts from "../Home/CardsProducts";

const FilterRefrigerante = ({
  clickPageProduct,
  toggleFavoritos,
  arrayFavoritos,
  setArrayFavoritos,
  items,
  setIsHome,
  setIsPageProduct,
}) => {
  return (
    <div>
      <div>
        <p className="font-semibold text-[18px] text-blackPrimary pt-8">
          Refrigerante
        </p>
      </div>
      {items &&
        items
          .filter((product) => product.category === "refrigerante")
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
                clickPageProduct={clickPageProduct}
                toggleFavoritos={toggleFavoritos}
                arrayFavoritos={arrayFavoritos}
                setArrayFavoritos={setArrayFavoritos}
                items={items}
                setIsHome={setIsHome}
                setIsPageProduct={setIsPageProduct}
              />
            </div>
          ))}
    </div>
  );
};

export default FilterRefrigerante;
