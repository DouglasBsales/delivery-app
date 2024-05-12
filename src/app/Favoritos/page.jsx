"use client";

import { HomeContext } from "@/Context/Home/HomeContext";
import { useContext } from "react";

import CardsFavoritos from "@/components/Favoritos/CardsFavoritos";
import FavoritosVazio from "@/components/Favoritos/FavoritosVazio";
export default function Favoritos() {
  const { arrayFavoritos } = useContext(HomeContext);

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#F5F5F5] overflow-x-hidden">
      <div className="flex-shrink-0 w-full bg-redPrimary">
        <div className="max-w-[393px] mx-auto px-[33px] py-9">
          <div className="h-[100px] flex justify-center items-end">
            <p className="text-4xl text-white font-semibold">Favoritos</p>
          </div>
        </div>
      </div>
      <div className="flex-1 max-w-[393px] mx-auto px-[33px]">
        {arrayFavoritos.length === 0 ? <FavoritosVazio /> : <CardsFavoritos />}
      </div>
    </div>
  );
}
