import Image from "next/image";

import pedidoNaoRealizado from "../../assets/PedidoNaoRealizado.png";

const CarrinhoVazio = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center pt-[50px] ">
        <Image src={pedidoNaoRealizado} alt="imagem" width={200} height={200} />
      </div>
      <div className="w-[270px] flex flex-col items-center pt-5">
        <p className="text-xl font-ligther text-center">
          Você ainda não possui itens no carrinho
        </p>
      </div>
    </div>
  );
};

export default CarrinhoVazio;
