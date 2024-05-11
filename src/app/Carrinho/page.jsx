"use client";

import Link from "next/link";

import { ProductContext } from "@/Context/Product/ProductContext";
import { useContext } from "react";

import { ChevronLeft } from "lucide-react";

import CarrinhoAdd from "@/components/Carrinho/CarrinhoAdd";
import CarrinhoVazio from "@/components/Carrinho/CarrinhoVazio";

export default function Carrinho() {
  const { arrayCarrinho } = useContext(ProductContext);

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#F5F5F5]">
      <div className="flex-shrink-0 w-full bg-redPrimary">
        <div className="max-w-[393px] mx-auto px-[33px] py-9">
          <div>
            <Link
              href="/Home"
              className="w-12 h-12 flex justify-center items-center bg-white rounded-full"
            >
              <ChevronLeft size={24} />
            </Link>
          </div>
          <div className="h-[100px] flex justify-center items-end">
            <p className="text-4xl text-white font-semibold">Carrinho</p>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-[393px] mx-auto px-[33px]">
        {arrayCarrinho.length === 0 && <CarrinhoVazio />}

        {arrayCarrinho.length >= 1 && <CarrinhoAdd />}
      </div>
    </div>
  );
}
