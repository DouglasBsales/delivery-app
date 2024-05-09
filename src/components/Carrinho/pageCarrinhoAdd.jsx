"use client";

import { useState } from "react";
import ListaCarrinho from "./ListaCarrinho";
import "react-toastify/dist/ReactToastify.css";
import ModalPedidoRealizado from "./ModalPedidoRealizado";

const PageCarrinhoAdd = ({
  arrayCarrinho,
  pageHome,
  setArrayCarrinho,
  setArrayPedidos,
  arrayPedidosRealizados,
  setArrayPedidosRealizados,
  setIsPageCarrinho,
  setIsPagePedido,
  valuePayment,
  setValuePayment,
}) => {
  const [modalPedido, setModalPedido] = useState(false);
  const [pagamentoTrue, setPagamentotrue] = useState(false);

  const handleClickAddPedido = () => {
    if (valuePayment === "0") {
      setPagamentotrue(true);
      alert("Selecione uma forma de pagamento");
      return;
    }

    // Adiciona o valor de pagamento ao objeto do carrinho antes de adicionar ao array de pedidos
    const carrinhoComPagamento = arrayCarrinho.map((item) => ({
      ...item,
      payment: valuePayment,
    }));

    setArrayPedidos([...arrayPedidosRealizados, carrinhoComPagamento]);
    setArrayPedidosRealizados([
      ...arrayPedidosRealizados,
      carrinhoComPagamento,
    ]);

    //abertura do modal após pedido realizado
    setModalPedido(true);
  };

  return (
    <div className="pb-[50px]">
      <div className="pt-[50px]">
        <p className="font-semibold text-blackPrimary text-xl">
          Itens adicionados
        </p>
      </div>
      <div className="flex flex-col pt-8">
        {arrayCarrinho.map((item) => (
          <div key={item.id} className="w-[326px] flex flex-col pl-[16px]">
            <ListaCarrinho
              item={item}
              arrayCarrinho={arrayCarrinho}
              setArrayCarrinho={setArrayCarrinho}
              valuePayment={valuePayment}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-4">
        <button onClick={pageHome} className="py-2 px-4 bg-blackPrimary rounded-md">
          <p className="text-white font-semibold text-sm">
            Adicionar mais itens
          </p>
        </button>
      </div>
      <div className="flex flex-col itens-center pt-5">
        <div>
          <p
            className={`text-center font-semibold ${
              pagamentoTrue ? "text-redPrimary" : "text-blackPrimary"
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
      <div className="pt-[70px]">
        <button
          className="flex justify-center items-center w-[320px] h-[39px] bg-redPrimary rounded-[30px]"
          onClick={handleClickAddPedido}
        >
          <p className="text-white font-semibold text-xl">Realizar pedido</p>
        </button>
        {modalPedido && (
          <ModalPedidoRealizado
            modalPedido={setModalPedido}
            setIsPageCarrinho={setIsPageCarrinho}
            setIsPagePedido={setIsPagePedido}
            setArrayCarrinho={setArrayCarrinho}
          />
        )}
      </div>
    </div>
  );
};

export default PageCarrinhoAdd;
