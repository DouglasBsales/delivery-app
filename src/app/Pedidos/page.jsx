"use client";

import { useContext } from "react";
import { ProductContext } from "@/Context/Product/ProductContext";

import PedidoVazio from "@/components/Pedidos/PedidoVazio";
import PedidosRealizados from "@/components/Pedidos/PedidosRealizados";


export default function Pedidos() {
  const { arrayPedidosRealizados } = useContext(ProductContext);

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#F5F5F5]">
      <div className="flex-shrink-0 w-full bg-redPrimary">
        <div className="max-w-[393px] mx-auto px-[33px] py-9">
          <div className="h-[100px] flex justify-center items-end">
            <p className="text-4xl text-white font-semibold">Pedidos</p>
          </div>
        </div>
      </div>
      <div className="w-[393px] flex flex-col px-[33px] mx-auto">
        {arrayPedidosRealizados.length === 0 ? (
          <PedidoVazio />
        ) : (
          <PedidosRealizados />
        )}
      </div>
    </div>
  );
}
