import { HomeContext } from "@/Context/Home/HomeContext";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";

export default function Pedidos() {
  return (
    <div className="w-full flex flex-col min-h-screen bg-[#F5F5F5]">
      <div className="flex-shrink-0 w-full bg-redPrimary">
        <div className="max-w-[393px] mx-auto px-[33px] py-9">
          <div className="h-[100px] flex justify-center items-end">
            <p className="text-4xl text-white font-semibold">Pedidos</p>
          </div>
        </div>
      </div>
      <div className="w-[393px] flex flex-col px-[33px] mx-auto"></div>
    </div>
  );
}
