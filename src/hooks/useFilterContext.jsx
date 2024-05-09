import { useContext } from "react";
import { FilterItensContext } from "../Context/FilterItensContext";

export const useFilterContext = () => {
  const context = useContext(FilterItensContext);

  if (context === undefined) {
    throw new Error("Não está definido no contexto ");
  }

  return context;
};
