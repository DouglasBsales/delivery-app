import CardsProducts from "../Home/CardsProducts";

const FilterRefrigerante = ({ items, clickPageProduct }) => {
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
                ml={product.ml}
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

export default FilterRefrigerante;
