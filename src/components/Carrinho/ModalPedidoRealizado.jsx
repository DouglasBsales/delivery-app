import { ProductContext } from "@/Context/Product/ProductContext";
import { useContext } from "react";
import { CircleCheckBig } from "lucide-react";
import Link from "next/link";

const ModalPedidoRealizado = () => {
  const { setArrayCarrinho } = useContext(ProductContext);

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
            onClick={() => setArrayCarrinho([])}
          >
            <Link href="/Pedidos" className="text-white font-semibold">
              Visualizar pedido
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPedidoRealizado;
