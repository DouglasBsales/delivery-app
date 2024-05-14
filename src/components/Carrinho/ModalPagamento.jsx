import { ProductContext } from "@/Context/Product/ProductContext";
import { useContext } from "react";

const ModalPagamento = () => {
  const { setModalPagamento } = useContext(ProductContext);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="w-[300px] bg-white rounded-md p-4 shadow-lg">
        <div className="flex items-end justify-center ">
          <p className="text-blackPrimary font-semibold text-center px-1">
            Selecione uma forma de pagamento válida!
          </p>
        </div>
        <div className="flex justify-center pt-4 pb-2">
          <button
            className="bg-[red] rounded-md py-1 px-4 "
            onClick={() => setModalPagamento(false)}
          >
            <p className="text-white font-semibold">Fechar</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPagamento;
