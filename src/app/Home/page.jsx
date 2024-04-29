"use client";

import Buttons from "@/components/Home/Buttons";
import CardsProducts from "@/components/Home/CardsProducts";
import Header from "@/components/Home/Header";
import Menu from "@/components/Home/Menu";
import { useFetch } from "@/hooks/useFetch";
import { useFetchBest } from "@/hooks/useFetchBest";
import { useState } from "react";

import { Search, SlidersHorizontal } from "lucide-react";

const url = "https://josn-delivery-app.vercel.app/products";
const urlBest = "https://josn-delivery-app.vercel.app/BestProducts";

export default function Home() {
  const { data: items } = useFetch(url);
  const { dados: itemsBest } = useFetchBest(urlBest);

  const [maisProcurados, setMaisProcurados] = useState(true);
  const [burguer, setBurguer] = useState(true);
  const [pizza, setPizza] = useState(true);
  const [batata, setBatata] = useState(true);
  const [isSelectd, setIsSelected] = useState("Todos");
  const [filteredItems, setFilteredItems] = useState([]);

  const [value, setValue] = useState("");

  const handleClickFilterItem = () => {
    setMaisProcurados(false);
    setBurguer(false);
    setPizza(false);
    setBatata(false);
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
    setIsSelected("Todos");
    setValue("");
    setFilteredItems([]);
  };

  const handleClickFilterBurguer = () => {
    setMaisProcurados(false);
    setPizza(false);
    setBatata(false);
    setBurguer(true);
    setIsSelected("Burguer");
    setValue("");
    setFilteredItems([]);
  };

  const handleClickFilterPizza = () => {
    setMaisProcurados(false);
    setBurguer(false);
    setBatata(false);
    setPizza(true);
    setIsSelected("Pizza");
    setValue("");
    setFilteredItems([]);
  };

  return (
    <div className="w-full flex justify-center items-center bg-[#F5F5F5] overflow-x-hidden">
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
            isSelected={isSelectd}
          />

          {maisProcurados && (
            <div>
              <div className="pt-[36px]">
                <p className="font-semibold text-[18px] text-blackPrimary">
                  Mais procurados
                </p>
              </div>
              {itemsBest &&
                itemsBest.map((product) => (
                  <div key={product.id}>
                    <CardsProducts
                      name={product.name}
                      category={product.category}
                      photo={product.photo}
                      price={product.price}
                      descriptionCard={product.descriptionCard}
                    />
                  </div>
                ))}
            </div>
          )}

          {burguer && (
            <div>
              <div>
                <p className="font-semibold text-[18px] text-blackPrimary pt-8">
                  Burguer
                </p>
              </div>
              {items &&
                items
                  .filter((product) => product.category === "Burguer")
                  .map((product) => (
                    <div key={product.id}>
                      <CardsProducts
                        name={product.name}
                        category={product.category}
                        photo={product.photo}
                        price={product.price}
                        descriptionCard={product.descriptionCard}
                      />
                    </div>
                  ))}
            </div>
          )}

          {pizza && (
            <div>
              <div>
                <p className="font-semibold text-[18px] text-blackPrimary pt-8">
                  Pizza
                </p>
              </div>
              {items &&
                items
                  .filter((products) => products.category === "Pizza")
                  .map((products) => (
                    <div key={products.id}>
                      <CardsProducts
                        name={products.name}
                        category={products.category}
                        photo={products.photo}
                        price={products.price}
                        descriptionCard={products.descriptionCard}
                      />
                    </div>
                  ))}
            </div>
          )}

          {batata && (
            <div>
              <div>
                <p className="font-semibold text-[18px] text-blackPrimary pt-8">
                  Batata frita
                </p>
              </div>
              {items &&
                items
                  .filter((product) => product.category === "batata")
                  .map((products) => (
                    <div key={products.id}>
                      <CardsProducts
                        name={products.name}
                        category={products.category}
                        photo={products.photo}
                        price={products.price}
                        portion={products.portion}
                        descriptionCard={products.descriptionCard}
                      />
                    </div>
                  ))}
            </div>
          )}

          {filteredItems.map((product) => (
            <div key={product.id}>
              <CardsProducts
                name={product.name}
                category={product.category}
                photo={product.photo}
                price={product.price}
                portion={product.portion}
                descriptionCard={product.descriptionCard}
              />
            </div>
          ))}
        </div>
        <Menu />
      </div>
    </div>
  );
}
