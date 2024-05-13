import Image from "next/image";
import pedidoNaoRealizado from "../../assets/PedidoNaoRealizado.png";

const PedidoVazio = () => {
  return (
    <div className="flex flex-col mx-auto">
      <div className="flex justify-center pt-[50px] ">
        <Image src={pedidoNaoRealizado} alt="imagem" width={250} height={250} />
      </div>
      <div className="w-[270px] flex flex-col items-center justify-center pt-5">
        <p className="text-2xl font-ligther text-center">
          Você ainda não pediu
        </p>
        <p className="text-blackOpacity text-center">
          Hora de agir! Faça seu pedido agora e aproveite!
        </p>
      </div>
    </div>
  );
};

export default PedidoVazio;
