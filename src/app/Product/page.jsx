"use client";

import Image from "next/image";
import Link from "next/link";

import { useContext, useEffect } from "react";
import { HomeContext } from "@/Context/Home/HomeContext";
import { ProductContext } from "@/Context/Product/ProductContext";

import { Minus, Plus } from "lucide-react";
import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Product() {
  const { productExib } = useContext(HomeContext);
  const {
    countItem,
    handleClickAddItem,
    handleClickMinusItem,
    arrayCarrinho,
    setArrayCarrinho,
    valuePayment,
  } = useContext(ProductContext);

  const handleAddToCart = () => {
    const existingItemIndex = arrayCarrinho.findIndex(
      (item) => item.name === productExib.name
    );

    if (existingItemIndex !== -1) {
      const newArrayCarrinho = [...arrayCarrinho];
      newArrayCarrinho[existingItemIndex] = {
        ...newArrayCarrinho[existingItemIndex],
        quantity: newArrayCarrinho[existingItemIndex].quantity + countItem,
      };
      setArrayCarrinho(newArrayCarrinho);
    } else {
      // Adicionando a informação de pagamento ao novo objeto do carrinho
      setArrayCarrinho([
        ...arrayCarrinho,
        {
          photo: productExib.photo,
          name: productExib.name,
          category: productExib.category,
          price: productExib.price,
          description: productExib.description,
          portion: productExib.portion,
          quantity: countItem,
          payment: valuePayment,
        },
      ]);
    }

    // lib da progress bar
    toast.success("Produto adicionado com sucesso", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  useEffect(() => {
    const storedItems = globalThis.localStorage.getItem("itens_carrinho");
    if (storedItems) {
      setArrayCarrinho(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    globalThis.localStorage.setItem("itens_carrinho",JSON.stringify(arrayCarrinho));
  }, [arrayCarrinho]);

  if (!productExib) return null;

  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5] pb-4 overflow-x-hidden">
      <div className="flex-shrink-0 w-full h-[350px] bg-redPrimary rounded-b-[200px]">
        <div className="mx-auto py-9 px-[33px]">
          <div className="flex justify-center items-center pt-[120px]">
            <Image
              src={productExib.photo}
              alt="item"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <div className="w-[393px] flex flex-col px-[33px] mx-auto pt-[37px] pb-20">
        <div className="flex flex-col items-start h-full">
          <div className="w-full flex justify-between pt-[100px]">
            <p className="w-[200px] text-xl font-bold text-blackPrimary">
              {productExib.name}
            </p>
            <p className="text-xl font-bold text-redPrimary">
              R$ {productExib.price.toFixed(2).replace(".", ",")}
            </p>
          </div>
          <div>
            <p className="text-redPrimary font-semibold">
              {productExib.gramas}
            </p>
          </div>
          <div>
            <p className="text-redPrimary font-semibold">{productExib.ml}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-blackOpacity">
              {productExib.category}
            </p>
          </div>
          <div className="w-[100px] h-[37px] flex items-center justify-center  rounded-[30px] bg-redPrimary mt-5">
            <p className="text-white text-xs font-semibold">Detalhes</p>
          </div>
          <div className="pt-5">
            <p className="font-semibold text-blackOpacity text-sm">
              {productExib.description}
            </p>
          </div>
          <div className="flex justify-between pt-[70px] gap-3">
            <div className="w-[148px] h-[61px] flex items-center justify-center rounded-[30px] bg-white">
              <div className="w-[125px] flex justify-between">
                <button
                  className="w-[41px] h-[41px] flex items-center justify-center bg-redPrimary rounded-full"
                  onClick={handleClickMinusItem}
                >
                  <Minus className="text-white" />
                </button>
                <div className="flex items-center">
                  <p className="font-semibold text-lg">{countItem}</p>
                </div>
                <button
                  className="w-[41px] h-[41px] flex items-center justify-center bg-redPrimary rounded-full"
                  onClick={handleClickAddItem}
                >
                  <Plus className="text-white" />
                </button>
              </div>
            </div>
            <button
              className="w-[167px] h-[61px] flex items-center justify-center bg-redPrimary rounded-[30px]"
              onClick={handleAddToCart}
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
          <div className="w-full flex justify-center pt-7">
            <Link href="/Home" className="flex items-center gap-2">
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="text-redPrimary size-9"
              />
              <p className="text-blackPrimary font-semibold">Voltar</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
