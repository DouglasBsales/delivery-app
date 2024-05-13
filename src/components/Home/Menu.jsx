"use client";

import Link from "next/link";

import { useContext } from "react";
import { ProductContext } from "@/Context/Product/ProductContext";

import { Home, ShoppingCart, Heart, ClipboardList } from "lucide-react";
import { HomeContext } from "@/Context/Home/HomeContext";

const Menu = () => {
  const { arrayCarrinho } = useContext(ProductContext);
  const { isPageSelected, setIsPageSelected } = useContext(HomeContext);

  return (
    <div className="fixed bottom-0">
      <div className="w-[393px] h-[65px] flex items-center justify-around bg-redPrimary rounded-t-md ">
        <Link
          href="/Home"
          className={`${
            isPageSelected === "Home"
              ? "bg-white p-3 rounded-md"
              : "bg-redPrimary"
          } ease-in duration-200`}
          onClick={() => setIsPageSelected("Home")}
        >
          <Home
            size={30}
            className={`${
              isPageSelected === "Home" ? "text-redPrimary" : "text-white"
            }  ease-in duration-200`}
          />
        </Link>
        <div className="flex flex-col relative">
          <Link
            href="/Carrinho"
            className={`${
              isPageSelected === "Carrinho"
                ? "bg-white p-3 pr-4 rounded-md"
                : "bg-redPrimary"
            }  ease-in duration-200`}
            onClick={() => setIsPageSelected("Carrinho")}
          >
            <div
              className={`absolute ${
                isPageSelected === "Carrinho"
                  ? "top-[2px] left-7"
                  : "top-[-10px] left-4"
              } ease-in duration-200`}
            >
              <div
                className={`w-[25px] h-[25px] flex justify-center itens-end rounded-full ${
                  isPageSelected === "Carrinho" ? "bg-redPrimary" : "bg-white "
                } ease-in duration-200`}
              >
                <p
                  className={`font-semibold relative top-[1px] ${
                    isPageSelected === "Carrinho"
                      ? "text-white"
                      : "text-redPrimary "
                  } ease-in duration-200`}
                >
                  {arrayCarrinho.reduce(
                    (total, produto) => total + produto.quantity,
                    0
                  )}
                </p>
              </div>
            </div>
            <ShoppingCart
              className={`${
                isPageSelected === "Carrinho" ? "text-redPrimary" : "text-white"
              } ease-in duration-200`}
              size={30}
            />
          </Link>
        </div>
        <Link
          href="/Favoritos"
          className={`${
            isPageSelected === "Favoritos"
              ? "bg-white p-3 rounded-md"
              : "bg-redPrimary"
          }  ease-in duration-100 `}
          onClick={() => setIsPageSelected("Favoritos")}
        >
          <Heart
            className={`${
              isPageSelected === "Favoritos" ? "text-redPrimary" : "text-white"
            }  ease-in duration-100 `}
            size={30}
          />
        </Link>
        <Link
          href="/Pedidos"
          className={`${
            isPageSelected === "Pedidos"
              ? "bg-white p-3 rounded-md"
              : "bg-redPrimary"
          } ease-in duration-200`}
          onClick={() => setIsPageSelected("Pedidos")}
        >
          <ClipboardList
            className={`${
              isPageSelected === "Pedidos" ? "text-redPrimary" : "text-white"
            } ease-in duration-200`}
            size={30}
          />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
