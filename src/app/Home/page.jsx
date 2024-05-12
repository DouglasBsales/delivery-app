"use client";
import { useState } from "react";

import Header from "@/components/Home/Header";
import Buttons from "@/components/Home/Buttons";

import TodosItens from "@/components/Home/TodosItens";
import FilterCategory from "@/components/Home/FilterCategory";
import FilterItemsValue from "@/components/Home/FilterItemsValue";
import SearchItens from "@/components/Home/SearchItens";

export default function Home() {
  const [allItens, setAllItens] = useState(true);

  {
    /* 
  const [arrayPedidosRealizados, setArrayPedidosRealizados] = useState([]);
  const [arrayFavoritos, setArrayFavoritos] = useState([]);
  /*/
  }

  return (
    <div className="w-full flex justify-center  bg-[#F5F5F5] overflow-x-hidden">
      <div>
        <div className="w-[393px] min-h-screen flex flex-col px-[33px] pt-[37px] pb-20">
          <Header />
          <SearchItens setAllItens={setAllItens} />

          <Buttons setAllItens={setAllItens} />
          <FilterCategory />
          {allItens && <TodosItens />}

          <FilterItemsValue />
        </div>
      </div>
    </div>
  );
}
