import Buttons from "@/components/Home/Buttons";
import CardsProducts from "@/components/Home/CardsProducts";
import Header from "@/components/Home/Header";
import Menu from "@/components/Home/Menu";
import SearchItens from "@/components/Home/SearchItens";

export default function Home() {
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
          <CardsProducts />
        </div>
        <Menu />
      </div>
    </div>
  );
}
