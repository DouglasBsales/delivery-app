import { HomeContext } from "@/Context/Home/HomeContext";
import { useContext } from "react";

import CardsProducts from "./CardsProducts";

const FilterCategory = () => {
  const { items, categoryItem } = useContext(HomeContext);

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
          .map((item) => (
            <div key={item.id}>
              <CardsProducts item={{ ...item }} />
            </div>
          ))}
    </div>
  );
};

export default FilterCategory;
