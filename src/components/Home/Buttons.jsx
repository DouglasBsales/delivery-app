"use client";
import "./Buttons.css";

const Buttons = ({
  filterPizza,
  filterTodos,
  filterBurguer,
  filterBatata,
  filterRefri,
  filterAgua,
  isSelected,
}) => {
  return (
    <div className="w-full flex gap-[8px] pt-[18px] overflow-x-auto container">
      <div>
        <button
          className={`px-6 py-2  rounded-[30px] outline-none ${
            isSelected === "Todos"
              ? "bg-redPrimary text-white "
              : "bg-white text-blackPrimary "
          }`}
          onClick={filterTodos}
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
          onClick={filterBurguer}
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
          onClick={filterPizza}
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
          onClick={filterBatata}
        >
          <p className="font-semibold text-[14px]">Batata</p>
        </button>
      </div>

      <div>
        <button
          className={`px-6 py-2 rounded-[30px] outline-none ${
            isSelected === "Refrigerante"
              ? "bg-redPrimary text-white "
              : "bg-white text-blackPrimary "
          }`}
          onClick={filterRefri}
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
          onClick={filterAgua}
        >
          <p className="font-semibold text-[14px]">Água</p>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
