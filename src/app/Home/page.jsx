"use client";

import { Search, SlidersHorizontal } from "lucide-react";

import { useFetch } from "@/hooks/useFetch";
import { useFetchBest } from "@/hooks/useFetchBest";
import { useState } from "react";

import Header from "@/components/Home/Header";
import Buttons from "@/components/Home/Buttons";
import Menu from "@/components/Home/Menu";

import MaisProcurados from "@/components/pagePrincipal/MaisProcurados";
import FilterBurguer from "@/components/pagePrincipal/FilterBurguer";
import FilterPizza from "@/components/pagePrincipal/FilterPizza";
import FilterBatata from "@/components/pagePrincipal/FilterBatata";
import FilterRefrigerante from "@/components/pagePrincipal/FilterRefrigerante";
import FilterAgua from "@/components/pagePrincipal/FilterAgua";
import FilterItemsValue from "@/components/pagePrincipal/FilterItemsValue";

import CarrinhoPage from "@/components/Carrinho/CarrinhoPage";
import ProductPage from "@/components/pageProduct/ProductPage";
import PagePedidos from "@/components/PagePedidos/PagePedidos";

const url = "https://josn-delivery-app.vercel.app/products";
const urlBest = "https://josn-delivery-app.vercel.app/BestProducts";

export default function Home() {
  const { data: items } = useFetch(url);
  const { dados: itemsBest } = useFetchBest(urlBest);

  const [maisProcurados, setMaisProcurados] = useState(true);
  const [burguer, setBurguer] = useState(true);
  const [pizza, setPizza] = useState(true);
  const [batata, setBatata] = useState(true);
  const [refrigerante, setRefrigerante] = useState(true);
  const [agua, setAgua] = useState(true);
  const [isSelectd, setIsSelected] = useState("Todos");
  const [filteredItems, setFilteredItems] = useState([]);

  const [value, setValue] = useState("");

  const [isHome, setIsHome] = useState(true);
  const [isPageProduct, setIsPageProduct] = useState(false);
  const [productExib, setProductExib] = useState(null);

  const [isPageCarrinho, setIsPageCarrinho] = useState(false);
  const [isPagePedido, setIsPagePedido] = useState(false);
  const [arrayPedidosRealizados, setArrayPedidosRealizados] = useState([]);

  const [arrayProductCarrinho, setArrayProductCarrinho] = useState([]);
  const [arrayPedidos, setArraypedidos] = useState([]);
  const [valuePayment, setValuePayment] = useState("0");

  const handleClickFilterItem = () => {
    if (value.trim() === "") {
      alert("Insira um item, por favor");
      return;
    }

    if (!items) {
      return;
    }

    setMaisProcurados(false);
    setBurguer(false);
    setPizza(false);
    setBatata(false);
    setRefrigerante(false);
    const filteredItems = items.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredItems(filteredItems);
  };

  const handleClickFilterTodos = () => {
    setMaisProcurados(true);
    setBurguer(true);
    setPizza(true);
    setBatata(true);
    setRefrigerante(true);
    setAgua(true)
    setIsSelected("Todos");
    setValue("");
    setFilteredItems([]);
  };

  const handleClickFilterBurguer = () => {
    setMaisProcurados(false);
    setPizza(false);
    setBatata(false);
    setRefrigerante(false);
    setBurguer(true);
    setAgua(false)
    setIsSelected("Burguer");
    setValue("");
    setFilteredItems([]);
  };

  const handleClickFilterPizza = () => {
    setMaisProcurados(false);
    setBurguer(false);
    setBatata(false);
    setRefrigerante(false);
    setPizza(true);
    setAgua(false)
    setIsSelected("Pizza");
    setValue("");
    setFilteredItems([]);
  };

  const handleClickFilterRefri = () => {
    setMaisProcurados(false);
    setBurguer(false);
    setBatata(false);
    setPizza(false);
    setAgua(false)
    setRefrigerante(true);
    setIsSelected("Refrigerante");
    setValue("");
    setFilteredItems([]);
  };

  const handleClickFilterAgua = ()=>{
    setMaisProcurados(false);
    setBurguer(false);
    setBatata(false);
    setPizza(false);
    setRefrigerante(false);
    setAgua(true)
    setIsSelected("agua");
    setValue("");
    setFilteredItems([]);
  }

  const clickPageProduct = (id) => {
    const selected = items.find((product) => product.id === id);
    setIsHome(false);
    setIsPageProduct(true);
    setProductExib(selected);
    setFilteredItems(selected);
    setValue("");
  };

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

            <Buttons
              filterPizza={handleClickFilterPizza}
              filterTodos={handleClickFilterTodos}
              filterBurguer={handleClickFilterBurguer}
              filterRefri={handleClickFilterRefri}
              filterAgua={handleClickFilterAgua}
              isSelected={isSelectd}
            />

            {maisProcurados && (
              <MaisProcurados
                itemsBest={itemsBest}
                clickPageProduct={clickPageProduct}
              />
            )}

            {burguer && (
              <FilterBurguer
                items={items}
                clickPageProduct={clickPageProduct}
              />
            )}

            {pizza && (
              <FilterPizza items={items} clickPageProduct={clickPageProduct} />
            )}

            {batata && (
              <FilterBatata items={items} clickPageProduct={clickPageProduct} />
            )}

            {refrigerante && (
              <FilterRefrigerante
                items={items}
                clickPageProduct={clickPageProduct}
              />
            )}

            {agua && (
              <FilterAgua items={items} clickPageProduct={clickPageProduct} />
            )}

            {filteredItems && (
              <FilterItemsValue
                filteredItems={filteredItems}
                clickPageProduct={clickPageProduct}
              />
            )}
          </div>
          <Menu
            home={setIsHome}
            pageCarrinho={setIsPageCarrinho}
            pagePedido={setIsPagePedido}
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
