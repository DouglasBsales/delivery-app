"use client";

import Link from "next/link";

import { useContext } from "react";
import { ProductContext } from "@/Context/Product/ProductContext";

import { Home, ShoppingCart, Heart, ClipboardList } from "lucide-react";

const Menu = () => {
  const { arrayCarrinho } = useContext(ProductContext);

  return (
    <div className="fixed bottom-0">
      <div className="w-[393px] h-[65px] flex items-center justify-around bg-redPrimary rounded-t-md pt-2">
        <Link href="/Home">
          <Home className="text-white" size={30} />
        </Link>
        <div className="flex flex-col relative">
          <Link href="/Carrinho">
            <div className="absolute top-[-10px] left-4 ">
              <div className=" w-[25px] h-[25px] flex justify-center itens-end  bg-white rounded-full">
                <p className="text-redPrimary font-semibold relative top-[1px]">
                  {arrayCarrinho.reduce(
                    (total, produto) => total + produto.quantity,
                    0
                  )}
                </p>
              </div>
            </div>
            <ShoppingCart className="text-white" size={30} />
          </Link>
        </div>
        <Link href="/Favoritos">
          <Heart className="text-white" size={30} />
        </Link>
        <Link href="/Pedidos">
          <ClipboardList className="text-white" size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
