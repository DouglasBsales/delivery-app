const Buttons = () => {
  return (
    <div className="w-full flex gap-[15px] pt-[18px]">
      <div>
        <button className="w-[100px] h-[37px] bg-redPrimary rounded-[30px]">
            <p className="text-white font-semibold text-[14px]">Todos</p>
        </button>
      </div>

      <div>
        <button className="w-[100px] h-[37px] bg-white rounded-[30px]">
            <p className="text-blackPrimary font-bold text-[14px]">Burguer</p>
        </button>
      </div>
      <div>

        <button className="w-[100px] h-[37px] bg-white rounded-[30px]">
            <p className="text-blackPrimary font-semibold text-[14px]">Pizza</p>
        </button>
      </div>
    </div>
  )
}

export default Buttons
