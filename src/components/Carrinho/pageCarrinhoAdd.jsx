import Image from "next/image";
import LIstaCarrinho from "./LIstaCarrinho";

const PageCarrinhoAdd = ({ arrayCarrinho, pageHome }) => {
  return (
    <div className="px-[33px] pb-[50px]">
      <div className="pt-[50px]">
        <p className="font-semibold text-blackPrimary text-xl">
          Itens adicionados
        </p>
      </div>
      <div className="flex flex-col pt-8">
        {arrayCarrinho.map((item) => (
          <div key={item.id} className="w-[326px] flex flex-col pl-[16px]">
            <LIstaCarrinho item={item} />
          </div>
        ))}
      </div>
      <div className="flex justify-center pt-4">
        <button onClick={pageHome}>
          <p className="text-blackPrimary font-semibold text-sm">
            Adicionar mais itens
          </p>
        </button>
      </div>
      <div className="flex justify-between pt-[46px]">
        <div>
          <p className="font-semibold text-blackPrimary text-sm">Total: </p>
        </div>
        <div>
          <p className="font-semibold text-sm text-redPrimary">
            <p className="font-semibold text-sm text-redPrimary">
              {arrayCarrinho
                .reduce((total, item) => {
                  return total + item.quantity * item.price;
                }, 0)
                .toFixed(2)
                .replace(".", ",")}
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageCarrinhoAdd;
