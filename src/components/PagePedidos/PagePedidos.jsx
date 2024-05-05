import { ChevronLeft } from "lucide-react";
import React from "react";
import PedidoVazio from "./PedidoVazio";
import PedidosRealizados from "./PedidosRealizados";

const PagePedidos = ({ home, pagePedido, pedidosRealizados }) => {
  const pageHome = () => {
    home(true);
    pagePedido(false);
  };

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#F5F5F5]">
      <div className="flex-shrink-0 w-full bg-redPrimary">
        <div className="max-w-[393px] mx-auto px-[33px] py-9">
          <div>
            <button
              onClick={pageHome}
              className="w-12 h-12 flex justify-center items-center bg-white rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="h-[100px] flex justify-center items-end">
            <p className="text-4xl text-white font-semibold">Pedidos</p>
          </div>
        </div>
      </div>
      <div className="max-w-[393px] px-[33px]">
        {pedidosRealizados.length === 0 ? (
          <PedidoVazio />
        ) : (
          <PedidosRealizados pedidosRealizados={pedidosRealizados} />
        )}
      </div>
    </div>
  );
};

export default PagePedidos;
