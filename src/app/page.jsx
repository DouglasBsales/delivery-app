"use client";

import Buttons from "@/components/Home/Buttons";
import CardsProducts from "@/components/Home/CardsProducts";
import Header from "@/components/Home/Header";
import Menu from "@/components/Home/Menu";
import SearchItens from "@/components/Home/SearchItens";
import { useFetch } from "@/hooks/useFetch";

const url = "http://localhost:5000/products";

export default function Home() {
  const { data: items } = useFetch(url);

  return (
    <div className="w-full flex justify-center items-center bg-[#F5F5F5] overflow-x-hidden">
      <div>
        <div className="w-[393px] min-h-screen flex flex-col px-[33px] pt-[37px]">
          <Header />
          <SearchItens />
          <Buttons />
          <div className="pt-[36px]">
            <p className="font-semibold text-[18px] text-blackPrimary">
              Mais procurados
            </p>
          </div>
          {items &&
            items.map((products) => (
              <CardsProducts
                name={products.name}
                category={products.category}
                photo={products.photo}
                price={products.price}
                description={products.description}
                descriptionCard={products.descriptionCard}
              />
            ))}
        </div>
        <Menu />
      </div>
    </div>
  );
}
