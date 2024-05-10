"use client";

import { useState } from "react";
import { HomeContextProvider } from "@/Context/Home/HomeContextProvider";

import Header from "@/components/Home/Header";
import Buttons from "@/components/Home/Buttons";
import Menu from "@/components/Home/Menu";

import TodosItens from "@/components/pagePrincipal/TodosItens";
import CarrinhoPage from "@/components/Carrinho/CarrinhoPage";
import ProductPage from "@/components/pageProduct/ProductPage";
import PagePedidos from "@/components/PagePedidos/PagePedidos";
import PageFavoritos from "@/components/ItensFavoritos/PageFavoritos";
import FilterCategory from "@/components/pagePrincipal/FilterCategory";
import FilterItemsValue from "@/components/pagePrincipal/FilterItemsValue";
import SearchItens from "@/components/Home/SearchItens";

export default function Home() {
  const [allItens, setAllItens] = useState(true);

  {
    /* const [isHome, setIsHome] = useState(true);
  const [isPageProduct, setIsPageProduct] = useState(false);
  const [productExib, setProductExib] = useState(null);

  const [isPageCarrinho, setIsPageCarrinho] = useState(false);
  const [isPagePedido, setIsPagePedido] = useState(false);
  const [isPageFavoritos, setIsPageFavoritos] = useState(false);
  const [arrayPedidosRealizados, setArrayPedidosRealizados] = useState([]);

  const [arrayProductCarrinho, setArrayProductCarrinho] = useState([]);
  const [arrayPedidos, setArraypedidos] = useState([]);
  const [arrayFavoritos, setArrayFavoritos] = useState([]);
  const [valuePayment, setValuePayment] = useState("0");

  const clickPageProduct = (id) => {
    const selected = items.find((product) => product.id === id);
    setProductExib(selected);
    setFilteredItems(selected);
    setValue("");
  };
  /*/
  }

  return (
    <div className="w-full flex justify-center items-center bg-[#F5F5F5] overflow-x-hidden">
      <div>
        <HomeContextProvider>
          <div className="w-[393px] min-h-screen flex flex-col px-[33px] pt-[37px] pb-20">
            <Header />
            <SearchItens />

            <Buttons setAllItens={setAllItens} />
            <FilterCategory />
            {allItens && <TodosItens />}

            <FilterItemsValue />
          </div>
          <Menu />
        </HomeContextProvider>
      </div>

      {/*
      {isPageProduct && (
        <ProductPage
          setIsHome={setIsHome}
          setIsPageProduct={setIsPageProduct}
          setFilteredItems={setFilteredItems}
          photo={productExib.photo}
          name={productExib.name}
          category={productExib.category}
          price={productExib.price}
          description={productExib.description}
          portion={productExib.portion}
          ml={productExib.ml}
          arrayCarrinho={arrayProductCarrinho}
          setArrayCarrinho={setArrayProductCarrinho}
          valuePayment={valuePayment}
          setAllItens={setAllItens}
        />
      )}

      {isPageCarrinho && (
        <CarrinhoPage
          home={setIsHome}
          pageCarrinho={setIsPageCarrinho}
          arrayCarrinho={arrayProductCarrinho}
          setArrayCarrinho={setArrayProductCarrinho}
          arrayPedidos={arrayPedidos}
          setArrayPedidos={setArraypedidos}
          arrayPedidosRealizados={arrayPedidosRealizados}
          setArrayPedidosRealizados={setArrayPedidosRealizados}
          setIsPageCarrinho={setIsPageCarrinho}
          setIsPagePedido={setIsPagePedido}
          valuePayment={valuePayment}
          setValuePayment={setValuePayment}
        />
      )}

      {isPageFavoritos && (
        <PageFavoritos
          home={setIsHome}
          setIsPageFavoritos={setIsPageFavoritos}
          arrayFavoritos={arrayFavoritos}
          clickPageProduct={clickPageProduct}
          setArrayFavoritos={setArrayFavoritos}
        />
      )}

      {isPagePedido && (
        <PagePedidos
          home={setIsHome}
          pagePedido={setIsPagePedido}
          pedidosRealizados={arrayPedidosRealizados}
        />
      )} */}
    </div>
  );
}
