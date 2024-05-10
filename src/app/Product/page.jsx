import { ChevronLeft, Minus, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Bounce, ToastContainer } from "react-toastify";

export default function Product() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] pb-4">
      <div className="flex-shrink-0 w-full h-[408px] bg-redPrimary rounded-b-[200px]">
        <div className="mx-auto py-9 px-[33px]">
          <div>
            <Link href="/Home"
              className="w-12 h-12 flex justify-center items-center bg-white rounded-full"
            >
              <ChevronLeft size={24} />
            </Link>
          </div>
          <div className="flex justify-center items-center pt-[130px]">
            <Image src={""} alt="item" width={300} height={300} />
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-[393px] px-[33px]">
        <div className="flex flex-col items-start h-full">
          <div className="w-full flex justify-between pt-[100px]">
            <p className="w-[200px] text-xl font-bold text-blackPrimary">
           
            </p>
            <p className="text-xl font-bold text-redPrimary">
 
            </p>
          </div>
          <div>
            <p className="text-redPrimary font-semibold"></p>
          </div>
          <div>
            <p className="text-redPrimary font-semibold"></p>
          </div>
          <div>
            <p className="text-xs font-semibold text-blackOpacity">

            </p>
          </div>
          <div className="w-[100px] h-[37px] flex items-center justify-center  rounded-[30px] bg-redPrimary mt-5">
            <p className="text-white text-xs font-semibold">Detalhes</p>
          </div>
          <div className="pt-5">
            <p className="font-semibold text-blackOpacity text-sm">

            </p>
          </div>
          <div className="flex justify-between pt-[70px] gap-3">
            <div className="w-[148px] h-[61px] flex items-center justify-center rounded-[30px] bg-white">
              <div className="w-[125px] flex justify-between">
                <button
                  className="w-[41px] h-[41px] flex items-center justify-center bg-redPrimary rounded-full"
                >
                  <Minus className="text-white" />
                </button>
                <div className="flex items-center">
                  <p className="font-semibold text-lg"></p>
                </div>
                <button
                  className="w-[41px] h-[41px] flex items-center justify-center bg-redPrimary rounded-full"
                >
                  <Plus className="text-white" />
                </button>
              </div>
            </div>
            <button
              className="w-[167px] h-[61px] flex items-center justify-center bg-redPrimary rounded-[30px]"
            >
              <p className="text-white text-xs font-semibold">
                Adicionar ao carrinho
              </p>
            </button>
            <ToastContainer
              position="top-right"
              autoClose={120}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              transition={Bounce}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
