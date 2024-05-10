import { useContext } from "react";
import { HomeContext } from "../Context/Home/HomeContext";

export const useHomeContext = () => {
  const context = useContext(HomeContext);

  if (context === undefined) {
    throw new Error("Não está definido no contexto ");
  }

  return context;
};
