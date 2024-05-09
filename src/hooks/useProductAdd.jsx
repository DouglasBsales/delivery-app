import { ProductItensAdd } from "@/Context/Product/ProductItensAdd";
import { useContext } from "react";

export const useProductAdd = () => {
  const context = useContext(ProductItensAdd);

  if (context === undefined) {
    throw new Error("Não está dentro do contexto");
  }

  return context;
};
