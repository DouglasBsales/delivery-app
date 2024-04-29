import { ChevronLeft } from "lucide-react";
import pedidoNaoRealizado from "../../assets/PedidoNaoRealizado.png";
import Link from "next/link";
import Image from "next/image";

export default function Pedidos() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      <div className="flex-shrink-0 w-full bg-redPrimary">
        <div className="max-w-[393px] mx-auto px-[33px] py-9">
          <div className="pl-[34px]">
            <Link
              href="/Home"
              className="w-12 h-12 flex justify-center items-center bg-white rounded-full"
            >
              <ChevronLeft size={24} />
            </Link>
          </div>
          <div className="h-[100px] flex justify-center items-end">
            <p className="text-4xl text-white font-semibold">Pedidos</p>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-[393px] mx-auto px-[33px]">
        <div className="flex flex-col items-center">
          <div className="pt-[60px]">
            <Image src={pedidoNaoRealizado} alt="" width={250} height={250}/>
          </div>
          <div className="w-[270px] flex flex-col items-center pt-5">
            <p className="text-2xl font-ligther">Você ainda não pediu</p>
            <p className="text-blackOpacity text-center">Hora de agir! Faça seu pedido agora e aproveite!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
