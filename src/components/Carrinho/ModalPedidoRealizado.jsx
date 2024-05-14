import Link from "next/link";

import { HomeContext } from "@/Context/Home/HomeContext";
import { ProductContext } from "@/Context/Product/ProductContext";
import { useContext, useEffect } from "react";

import { CircleCheckBig } from "lucide-react";

const ModalPedidoRealizado = () => {
  const { setArrayCarrinho, setModalPedido } = useContext(ProductContext);
  const { setIsPageSelected } = useContext(HomeContext);

  const closeModal = () => {
    localStorage.setItem("itens_carrinho", JSON.stringify([]));
    
    setArrayCarrinho([]);
    setModalPedido(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[300px] bg-white rounded-md p-4 shadow-lg">
        <div className="flex items-center justify-center gap-3">
          <div>
            <CircleCheckBig className="text-[#45D960]" />
          </div>
          <div>
            <p className="text-blackPrimary font-semibold">Pedido Realizado!</p>
          </div>
        </div>
        <div className="flex justify-center pt-4 pb-2">
          <button
            className="w-[200px] flex justify-center items-center bg-blackPrimary rounded-[30px] py-1"
            onClick={closeModal}
          >
            <Link
              href="/Pedidos"
              className="text-white font-semibold"
              onClick={() => setIsPageSelected("Pedidos")}
            >
              Visualizar pedido
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPedidoRealizado;
