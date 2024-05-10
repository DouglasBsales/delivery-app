"use client";
import { useState } from "react";

import Header from "@/components/Home/Header";
import Buttons from "@/components/Home/Buttons";
import Menu from "@/components/Home/Menu";

import TodosItens from "@/components/pagePrincipal/TodosItens";
import FilterCategory from "@/components/pagePrincipal/FilterCategory";
import FilterItemsValue from "@/components/pagePrincipal/FilterItemsValue";
import SearchItens from "@/components/Home/SearchItens";

export default function Home() {
  const [allItens, setAllItens] = useState(true);

  {
    /* 
  const [arrayPedidosRealizados, setArrayPedidosRealizados] = useState([]);

  const [arrayProductCarrinho, setArrayProductCarrinho] = useState([]);
  const [arrayPedidos, setArraypedidos] = useState([]);
  const [arrayFavoritos, setArrayFavoritos] = useState([]);
  const [valuePayment, setValuePayment] = useState("0");

  /*/
  }

  return (
    <div className="w-full flex justify-center items-center bg-[#F5F5F5] overflow-x-hidden">
      <div>
        <div className="w-[393px] min-h-screen flex flex-col px-[33px] pt-[37px] pb-20">
          <Header />
          <SearchItens setAllItens={setAllItens} />

          <Buttons setAllItens={setAllItens} />
          <FilterCategory />
          {allItens && <TodosItens />}

          <FilterItemsValue />
        </div>
        <Menu />
      </div>
    </div>
  );
}
