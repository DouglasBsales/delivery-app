import { Search, SlidersHorizontal } from "lucide-react";

const SearchItens = () => {
  return (
    <div className="flex gap-[19px] pt-[44px]">
      <div className="w-[263px] h-[60px] flex items-center bg-[#fff] rounded-[30px]">
        <div className="flex items-center pl-[16px] gap-[12px]">
          <div>
            <Search className="text-blackOpacity" size={26} />
          </div>
          <div>
            <input
              type="text"
              placeholder="Pesquise"
              className="text-blackOpacity outline-none rounded-r-[30px]"
            />
          </div>
        </div>
      </div>
      <button className="w-[54px] h-[54px] flex items-center justify-center text- bg-redPrimary rounded-full">
      <SlidersHorizontal className="text-white"/>
      </button>
    </div>
  );
};

export default SearchItens;
