"use client";

import { createContext, useState } from "react";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [countItem, setCountItem] = useState(1);

  const getItensCarrinho = () => {
    let list = null;

    if (typeof window !== "undefined") {
      list = window.localStorage.getItem("itens_carrinho");
    }

    if (list) {
      return JSON.parse(list);
    } else {
      return [];
    }
  };

  const [arrayCarrinho, setArrayCarrinho] = useState(getItensCarrinho());
  const [valuePayment, setValuePayment] = useState("0");
  const [modalPagamento, setModalPagamento] = useState(false);

  const getPedidosRealizados = () => {
    let listPedidos = null;

    if (typeof window !== "undefined") {
      listPedidos = window.localStorage.getItem("pedidos_realizados");
    }

    if (listPedidos) {
      return JSON.parse(listPedidos);
    } else {
      return [];
    }
  };
  const [arrayPedidosRealizados, setArrayPedidosRealizados] = useState(
    getPedidosRealizados()
  );

  const handleClickAddItem = () => {
    // funcao usada na page Product
    setCountItem((prevNumber) => prevNumber + 1);
  };

  const handleClickMinusItem = () => {
    // funcao usada na page Product
    if (countItem === 1) {
      return;
    } else {
      setCountItem((prevNumber) => prevNumber - 1);
    }
  };

  const [modalPedido, setModalPedido] = useState(false);
  const [pagamentoTrue, setPagamentotrue] = useState(false);
  const handleClickAddPedido = () => {
    // funcao usada na page Product
    if (valuePayment === "0") {
      setPagamentotrue(true);
      setModalPagamento(true);
      return;
    }

    // Adiciona o valor de pagamento ao objeto do carrinho antes de adicionar ao array de pedidos
    const carrinhoComPagamento = arrayCarrinho.map((item) => ({
      ...item,
      payment: valuePayment,
    }));

    const novosPedidos = [...arrayPedidosRealizados, carrinhoComPagamento];
    localStorage.setItem("pedidos_realizados", JSON.stringify(novosPedidos));
    setArrayPedidosRealizados(novosPedidos);
    console.log(arrayPedidosRealizados);

    setModalPedido(true);
    setPagamentotrue(false);
    setValuePayment("0");
  };

  return (
    <ProductContext.Provider
      value={{
        countItem,
        setCountItem,
        handleClickAddItem,
        handleClickMinusItem,
        arrayCarrinho,
        setArrayCarrinho,
        valuePayment,
        setValuePayment,
        modalPedido,
        setModalPedido,
        pagamentoTrue,
        handleClickAddPedido,
        arrayPedidosRealizados,
        setArrayPedidosRealizados,
        modalPagamento,
        setModalPagamento,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
