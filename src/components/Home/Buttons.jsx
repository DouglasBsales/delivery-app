"use client";


const Buttons = ({ filterPizza, filterTodos, filterBurguer, isSelected }) => {
  return (
    <div className="w-full flex gap-[15px] pt-[18px]">
      <div>
        <button 
          className={`w-[100px] h-[37px] h-[37px rounded-[30px] outline-none ${
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
          className={`w-[100px] h-[37px] h-[37px rounded-[30px] outline-none ${
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
          className={`w-[100px] h-[37px] h-[37px rounded-[30px] outline-none ${
          isSelected === "Pizza"
              ? "bg-redPrimary text-white "
              : "bg-white text-blackPrimary "
          }`}
          onClick={filterPizza}
        >
          <p className="font-semibold text-[14px]">Pizza</p>
        </button>
      </div>
    </div>
  );
};

export default Buttons;
