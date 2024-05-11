"use client";

import { createContext, useState } from "react";

export const ProductContext = createContext();

export default function ProductContextProvider({ children }) {
  const [countItem, setCountItem] = useState(1);
  const [arrayCarrinho, setArrayCarrinho] = useState([]);
  const [valuePayment, setValuePayment] = useState("0");

  const [arrayPedidos, setArrayPedidos] = useState([]);
  const [arrayPedidosRealizados, setArrayPedidosRealizados] = useState([]);

  const handleClickAddItem = () => {
    setCountItem((prevNumber) => prevNumber + 1);
  };

  const handleClickMinusItem = () => {
    if (countItem === 1) {
      return;
    } else {
      setCountItem((prevNumber) => prevNumber - 1);
    }
  };


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

    setModalPedido(true);
  };

  return (
    <ProductContext.Provider
      value={{
        countItem,
        handleClickAddItem,
        handleClickMinusItem,
        arrayCarrinho,
        setArrayCarrinho,
        valuePayment,
        setValuePayment,
        modalPedido, 
        pagamentoTrue,
        handleClickAddPedido
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
