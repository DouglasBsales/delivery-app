"use client";

import { createContext, useState } from "react";

export const ProductContext = createContext({ countItem: 1 });

export default function ProductContextProvider({ children }) {
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
    <ProductContext.Provider
      value={{ countItem, handleClickAddItem, handleClickMinusItem }}
    >
      {children}
    </ProductContext.Provider>
  );
}
