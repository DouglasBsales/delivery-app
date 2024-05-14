"use client";

import { useContext, useEffect } from "react";
import { ProductContext } from "@/Context/Product/ProductContext";

import PedidoVazio from "@/components/Pedidos/PedidoVazio";
import PedidosRealizados from "@/components/Pedidos/PedidosRealizados";

export default function Pedidos() {
  const { arrayPedidosRealizados, setArrayPedidosRealizados } =
    useContext(ProductContext);

  useEffect(() => {
    if (localStorage.getItem("pedidos_realizados") !== null) {
      setArrayPedidosRealizados(
        JSON.parse(localStorage.getItem("pedidos_realizados"))
      );
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pedidos_realizados",JSON.stringify(arrayPedidosRealizados));
  }, [arrayPedidosRealizados]);

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#F5F5F5] overflow-x-hidden">
      <div className="flex-shrink-0 w-full bg-redPrimary">
        <div className="max-w-[393px] mx-auto px-[33px] py-9">
          <div className="h-[100px] flex justify-center items-end">
            <p className="text-4xl text-white font-semibold">Pedidos</p>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-[393px] mx-auto px-[33px]">
        {arrayPedidosRealizados.length === 0 ? (
          <PedidoVazio />
        ) : (
          <PedidosRealizados />
        )}
      </div>
    </div>
  );
}
