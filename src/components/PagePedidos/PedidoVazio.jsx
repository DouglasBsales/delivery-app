import Image from "next/image";
import pedidoNaoRealizado from "../../assets/PedidoNaoRealizado.png";

const PedidoVazio = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="pt-[60px]">
          <Image src={pedidoNaoRealizado} alt="photo" width={250} height={250} />
        </div>
        <div className="w-[270px] flex flex-col items-center pt-5">
          <p className="text-2xl font-ligther text-center">
          Você ainda não pediu
          </p>
          <p className="text-blackOpacity text-center">Hora de agir! Faça seu pedido agora e aproveite!</p>
        </div>
      </div>
    </div>
  );
};

export default PedidoVazio;
