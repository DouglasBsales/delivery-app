"use client";

import Link from "next/link";

import { useContext, useEffect } from "react";
import { ProductContext } from "@/Context/Product/ProductContext";
import { HomeContext } from "@/Context/Home/HomeContext";

import ListaCarrinho from "./ListaCarrinho";
import ModalPedidoRealizado from "./ModalPedidoRealizado";

const CarrinhoAdd = () => {
  const {
    arrayCarrinho,
    setArrayCarrinho,
    valuePayment,
    setValuePayment,
    modalPedido,
    pagamentoTrue,
    handleClickAddPedido,
  } = useContext(ProductContext);

  const { setIsPageSelected } = useContext(HomeContext);

  return (
    <div>
      <div className="pt-[50px]">
        <p className="font-semibold text-blackPrimary text-xl">
          Itens adicionados
        </p>
      </div>
      <div className="flex flex-col">
        {arrayCarrinho.map((item) => (
          <div key={item.id} className="w-[326px] flex flex-col pl-[16px]">
            <ListaCarrinho item={{ ...item }} />
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-4">
        <Link
          href="/Home"
          className="py-2 px-4 bg-blackPrimary rounded-md"
          onClick={() => setIsPageSelected("Home")}
        >
          <p className="text-white font-semibold text-sm">
            Adicionar mais itens
          </p>
        </Link>
      </div>
      <div className="flex flex-col itens-center pt-5">
        <div>
          <p
            className={`text-center font-semibold ${
              pagamentoTrue
                ? "bg-[red] text-blackPrimary rounded-md"
                : "text-blackPrimary"
            }`}
          >
            Pagamento:
          </p>
        </div>
        <div>
          <select
            className="bg-transparent outline-none"
            value={valuePayment}
            onChange={(e) => setValuePayment(e.target.value)}
          >
            <option value="0">Selecione uma opção de pagamento</option>
            <option value="Dinheiro">Dinheiro</option>
            <option value="Pix">Pix</option>
            <option value="Crédito">Cartão de crédito</option>
            <option value="Débito">Cartão de débito</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between pt-[46px]">
        <div>
          <p className="font-semibold text-blackPrimary text-sm">Total: </p>
        </div>
        <div>
          <p className="font-semibold text-sm text-redPrimary">
            <p className="font-semibold text-sm text-redPrimary">
              R${" "}
              {arrayCarrinho
                .reduce((total, item) => {
                  return total + item.quantity * item.price;
                }, 0)
                .toFixed(2)
                .replace(".", ",")}
            </p>
          </p>
        </div>
      </div>
      <div className="pt-[40px] pb-[150px]">
        <button
          className="flex justify-center items-center w-[320px] h-[39px] bg-redPrimary rounded-[30px]"
          onClick={handleClickAddPedido}
        >
          <p className="text-white font-semibold text-xl">Realizar pedido</p>
        </button>
        {modalPedido && <ModalPedidoRealizado />}
      </div>
    </div>
  );
};

export default CarrinhoAdd;
