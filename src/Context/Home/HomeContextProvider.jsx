import { useFetchBest } from "@/hooks/useFetchBest";
import { useState } from "react";

const { useFetch } = require("@/hooks/useFetch");
const { HomeContext } = require("./HomeContext");

export const HomeContextProvider = ({ children }) => {
  const url = "https://josn-delivery-app.vercel.app/products";
  const urlBest = "https://josn-delivery-app.vercel.app/BestProducts";

  const { data: items } = useFetch(url);
  const { dados: itemsBest } = useFetchBest(urlBest);

  const [categoryItem, setCategoryItem] = useState(null);
  const [isSelected, setIsSelected] = useState("Todos");

  const [arrayProductCarrinho, setArrayProductCarrinho] = useState([]);
  const [arrayFavoritos, setArrayFavoritos] = useState([]);
  const [arrayPedidos, setArraypedidos] = useState([]);
  const [arrayPedidosRealizados, setArrayPedidosRealizados] = useState([]);

  const [valuePayment, setValuePayment] = useState("0");

  const [value, setValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const handleClickFilterItem = () => {
    if (value.trim() === "") {
      alert("Insira um item, por favor");
      return;
    }

    if (!items) {
      return;
    }

    const filteredItemsSearch = items.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setValue("");
    setFilteredItems(filteredItemsSearch);
  };

  return (
    <HomeContext.Provider
      value={{
        items,
        itemsBest,
        arrayFavoritos,
        setArrayFavoritos,
        filteredItems,
        setFilteredItems,
        categoryItem,
        setCategoryItem,
        isSelected,
        setIsSelected,
        handleClickFilterItem,
        value,
        setValue,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
