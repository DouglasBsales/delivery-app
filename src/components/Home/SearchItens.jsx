import { HomeContext } from "@/Context/Home/HomeContext";
import { Search, SlidersHorizontal } from "lucide-react";
import { useContext } from "react";

const SearchItens = ({setAllItens}) => {

  const {value, setValue, items, setFilteredItems} = useContext(HomeContext)

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
    setFilteredItems(filteredItemsSearch);
    setAllItens(false)
  };

  return (
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
        <button className="w-[54px] h-[54px] flex items-center justify-center text- bg-redPrimary rounded-full" onClick={handleClickFilterItem}>
          <SlidersHorizontal className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default SearchItens;
