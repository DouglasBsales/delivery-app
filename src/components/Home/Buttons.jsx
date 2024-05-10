"use client";
import { useHomeContext } from "@/hooks/useHomeContext";
import "./Buttons.css";

const Buttons = ({ setAllItens, setFilteredItems }) => {
  const { setIsSelected, isSelected, setCategoryItem } = useHomeContext();

  const categoryPizza = () => {
    setCategoryItem("Pizza");
    setIsSelected("Pizza");
    setFilteredItems([]);
    setAllItens(false);
  };

  const categoryBurguer = () => {
    setCategoryItem("Burguer");
    setIsSelected("Burguer");
    setAllItens(false);
    setFilteredItems([]);
  };

  const categoryBatata = () => {
    setCategoryItem("batata");
    setIsSelected("batata");
    setFilteredItems([]);
    setAllItens(false);
  };

  const categoryRefri = () => {
    setCategoryItem("refrigerante");
    setIsSelected("refrigerante");
    setFilteredItems([]);
    setAllItens(false);
  };

  const categoryAgua = () => {
    setCategoryItem("agua");
    setIsSelected("agua");
    setFilteredItems([]);
    setAllItens(false);
  };

  const allItensView = () => {
    setCategoryItem(null);
    setFilteredItems([]);
    setAllItens(true);
    setIsSelected("Todos");
  };

  return (
    <div className="w-full flex gap-[8px] pt-[18px] overflow-x-auto container">
      <div>
        <button
          className={`px-6 py-2  rounded-[30px] outline-none ${
            isSelected === "Todos"
              ? "bg-redPrimary text-white "
              : "bg-white text-blackPrimary "
          }`}
          onClick={allItensView}
        >
          <p className="font-semibold text-[14px]">Todos</p>
        </button>
      </div>

      <div>
        <button
          className={`px-6 py-2 rounded-[30px] outline-none ${
            isSelected === "Burguer"
              ? "bg-redPrimary text-white "
              : "bg-white text-blackPrimary "
          }`}
          onClick={categoryBurguer}
        >
          <p className="font-bold text-[14px]">Burguer</p>
        </button>
      </div>
      <div>
        <button
          className={`px-6 py-2  rounded-[30px] outline-none ${
            isSelected === "Pizza"
              ? "bg-redPrimary text-white "
              : "bg-white text-blackPrimary "
          }`}
          onClick={categoryPizza}
        >
          <p className="font-semibold text-[14px]">Pizza</p>
        </button>
      </div>
      <div>
        <button
          className={`px-6 py-2  rounded-[30px] outline-none ${
            isSelected === "batata"
              ? "bg-redPrimary text-white "
              : "bg-white text-blackPrimary "
          }`}
          onClick={categoryBatata}
        >
          <p className="font-semibold text-[14px]">Batata</p>
        </button>
      </div>

      <div>
        <button
          className={`px-6 py-2 rounded-[30px] outline-none ${
            isSelected === "refrigerante"
              ? "bg-redPrimary text-white "
              : "bg-white text-blackPrimary "
          }`}
          onClick={categoryRefri}
        >
          <p className="font-semibold text-[14px]">Refrigerante</p>
        </button>
      </div>
      <div>
        <button
          className={`px-6 py-2 rounded-[30px] outline-none ${
            isSelected === "agua"
              ? "bg-redPrimary text-white "
              : "bg-white text-blackPrimary "
          }`}
          onClick={categoryAgua}
        >
          <p className="font-semibold text-[14px]">Água</p>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
