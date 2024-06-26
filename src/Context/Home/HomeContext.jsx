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
  const { dados: itemsBest, loading } = useFetchBest(urlBest);

  const [categoryItem, setCategoryItem] = useState(null);
  const [isSelected, setIsSelected] = useState("Todos");

  const itemsFavoritos = () => {

    let favoritos = null

    if(typeof window !== "undefined"){
      favoritos = localStorage.getItem("favoritos");
    }

    if (favoritos) {
      return JSON.parse(favoritos);
    } else {
      return [];
    }
  };

  const [arrayFavoritos, setArrayFavoritos] = useState(itemsFavoritos());
  const [arrayPedidosRealizados, setArrayPedidosRealizados] = useState([]);

  const [value, setValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const [productExib, setProductExib] = useState();
  const [isPageSelected, setIsPageSelected] = useState("Home");

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
        arrayPedidosRealizados,
        setArrayPedidosRealizados,
        loading,
        isPageSelected,
        setIsPageSelected,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
}
