import Image from "next/image";

import pedidoNaoRealizado from "../../assets/PedidoNaoRealizado.png";

const CarrinhoVazio = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="pt-[60px]">
        <Image src={pedidoNaoRealizado} alt="imagem" width={250} height={250} />
      </div>
      <div className="w-[270px] flex flex-col items-center pt-5">
        <p className="text-2xl font-ligther text-center">
          Você ainda não possui itens no carrinho
        </p>
      </div>
    </div>
  );
};

export default CarrinhoVazio;