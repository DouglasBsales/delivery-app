import { ChevronLeft } from "lucide-react";
import pedidoNaorealizado from "../../assets/PedidoNaoRealizado.png";
import Image from "next/image";
import PageCarrinhoAdd from "./pageCarrinhoAdd";

const CarrinhoPage = ({
  home,
  pageCarrinho,
  arrayCarrinho,
  setArrayCarrinho,
  arrayPedidos,
  setArrayPedidos,
  arrayPedidosRealizados,
  setArrayPedidosRealizados,
  setIsPageCarrinho,
  setIsPagePedido,
  valuePayment,
  setValuePayment

}) => {
  const pageHome = () => {
    pageCarrinho(false);
    home(true);
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
            <p className="text-4xl text-white font-semibold">Carrinho</p>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-[393px] mx-auto px-[33px]">
        {arrayCarrinho.length === 0 && (
          <div className="flex flex-col items-center">
            <div className="pt-[60px]">
              <Image src={pedidoNaorealizado} alt="" width={250} height={250} />
            </div>
            <div className="w-[270px] flex flex-col items-center pt-5">
              <p className="text-2xl font-ligther text-center">
                Você ainda não possui itens no carrinho
              </p>
            </div>
          </div>
        )}

        {arrayCarrinho.length >= 1 && (
          <PageCarrinhoAdd
            arrayCarrinho={arrayCarrinho}
            pageHome={pageHome}
            setArrayCarrinho={setArrayCarrinho}
            arrayPedidos={arrayPedidos}
            setArrayPedidos={setArrayPedidos}
            arrayPedidosRealizados={ arrayPedidosRealizados}
            setArrayPedidosRealizados={setArrayPedidosRealizados}
            setIsPageCarrinho={setIsPageCarrinho}
            setIsPagePedido={setIsPagePedido}
            valuePayment={valuePayment}
            setValuePayment={setValuePayment}
          />
        )}
      </div>
    </div>
  );
};

export default CarrinhoPage;
