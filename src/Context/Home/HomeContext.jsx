"use client";

import { createContext } from "react";
import { useFetchBest } from "@/hooks/useFetchBest";
import { useState } from "react";
import { useFetch } from "@/hooks/useFetch";


export const HomeContext = createContext();

export default function HomeContextProvider({ children }) {
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

  const [value, setValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const [productExib, setProductExib] = useState(null);


  const [countItem, setCountItem] = useState(1);

  const handleClickAddItem = () => {
    setCountItem((prevNumber) => prevNumber + 1);
  };

  const handleClickMinusItem = () => {
    if (countItem === 1) {
      return;
    } else {
      setCountItem((prevNumber) => prevNumber - 1);
    }
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
        value,
        setValue,
        productExib,
        setProductExib,
        handleClickAddItem,
        handleClickMinusItem,
        countItem
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
