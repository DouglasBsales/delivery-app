"use client";

import { Search, SlidersHorizontal } from "lucide-react";

import { useFetch } from "@/hooks/useFetch";
import { useFetchBest } from "@/hooks/useFetchBest";
import { useState } from "react";

import Header from "@/components/Home/Header";
import Buttons from "@/components/Home/Buttons";
import Menu from "@/components/Home/Menu";

import FilterItemsValue from "@/components/pagePrincipal/FilterItemsValue";

import CarrinhoPage from "@/components/Carrinho/CarrinhoPage";
import ProductPage from "@/components/pageProduct/ProductPage";
import PagePedidos from "@/components/PagePedidos/PagePedidos";
import PageFavoritos from "@/components/ItensFavoritos/PageFavoritos";
import FilterCategory from "@/components/pagePrincipal/FilterCategory";
import { FilterItensContext } from "@/Context/FilterItensContext";
import AllItens from "@/components/pagePrincipal/allItens";
import TodosItens from "@/components/pagePrincipal/TodosItens";

const url = "https://josn-delivery-app.vercel.app/products";
const urlBest = "https://josn-delivery-app.vercel.app/BestProducts";

export default function Home() {
  const { data: items } = useFetch(url);
  const { dados: itemsBest } = useFetchBest(urlBest);

  const [allItens, setAllItens] = useState(true);
  const [isSelected, setIsSelected] = useState("Todos");
  const [filteredItems, setFilteredItems] = useState([]);

  const [value, setValue] = useState("");

  const [isHome, setIsHome] = useState(true);
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

  const handleClickFilterItem = () => {
    if (value.trim() === "") {
      alert("Insira um item, por favor");
      return;
    }

    if (!items) {
      return;
    }

    const filteredItemsSearch = items.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setValue("");
    setAllItens(false);
    setFilteredItems(filteredItemsSearch);
  };

  const clickPageProduct = (id) => {
    const selected = items.find((product) => product.id === id);
    setIsHome(false);
    setIsPageFavoritos(false);
    setIsPageProduct(true);
    setProductExib(selected);
    setFilteredItems(selected);
    setValue("");
  };

  const [categoryItem, setCategoryItem] = useState(null);

  return (
    <div className="w-full flex justify-center items-center bg-[#F5F5F5] overflow-x-hidden">
      {isHome && (
        <div>
          <div className="w-[393px] min-h-screen flex flex-col px-[33px] pt-[37px] pb-20">
            <Header />
            <div className="flex pt-[44px]">
              <div className="w-[263px] h-[60px] flex items-center justify-center bg-[#fff] rounded-[30px]">
                <div className="w-[210px] h-[50px] flex items-center">
                  <div>
                    <Search className="text-blackOpacity " size={26} />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Pesquise"
                      value={value}
                      className="w-[180px] h-[50px] text-blackOpacity outline-none pr-[16px] pl-3"
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="pl-5">
                <button
                  className="w-[54px] h-[54px] flex items-center justify-center text- bg-redPrimary rounded-full"
                  onClick={handleClickFilterItem}
                >
                  <SlidersHorizontal className="text-white" />
                </button>
              </div>
            </div>

            <FilterItensContext.Provider
              value={{
                items,
                clickPageProduct,
                isSelected,
                setCategoryItem,
                setIsSelected,
                setAllItens,
                setFilteredItems,
              }}
            >
              <Buttons setCategoryItem={setCategoryItem} />
              <FilterCategory categoryItem={categoryItem} />
            </FilterItensContext.Provider>

            {allItens && (
              <TodosItens
                itemsBest={itemsBest}
                clickPageProduct={clickPageProduct}
                arrayFavoritos={arrayFavoritos}
                setArrayFavoritos={setArrayFavoritos}
                items={items}
              />
            )}

            {filteredItems && (
              <FilterItemsValue
                clickPageProduct={clickPageProduct}
                arrayFavoritos={arrayFavoritos}
                setArrayFavoritos={setArrayFavoritos}
                items={items}
                filteredItems={filteredItems}
              />
            )}
          </div>
          <Menu
            home={setIsHome}
            pageCarrinho={setIsPageCarrinho}
            pagePedido={setIsPagePedido}
            favoritosPage={setIsPageFavoritos}
            arrayProductCarrinho={arrayProductCarrinho}
          />
        </div>
      )}

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
          handleClickFilterTodos={handleClickFilterTodos}
          valuePayment={valuePayment}
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
      )}
    </div>
  );
}
