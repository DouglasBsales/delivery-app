import { useContext } from "react";
import { HomeContext } from "@/Context/Home/HomeContext";

import CardsProducts from "./CardsProducts";

const FilterItemsValue = () => {
  const { filteredItems } = useContext(HomeContext);

  return filteredItems.map((item) => (
    <div key={item.id}>
      <CardsProducts item={{ ...item }} />
    </div>
  ));
};

export default FilterItemsValue;
