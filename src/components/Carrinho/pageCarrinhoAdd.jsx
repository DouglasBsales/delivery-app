import ListaCarrinho from "./ListaCarrinho";
import { ToastContainer, toast } from "react-toastify";
import { Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PageCarrinhoAdd = ({
  arrayCarrinho,
  pageHome,
  setArrayCarrinho,
  arrayPedidos,
  setArrayPedidos,
}) => {
  const handleClickAddPedido = () => {
    setArrayPedidos([arrayCarrinho]);

    // lib para progress bar
    toast.success("Pedido realizado!", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  console.log(arrayPedidos);

  return (
    <div className="pb-[50px]">
      <div className="pt-[50px]">
        <p className="font-semibold text-blackPrimary text-xl">
          Itens adicionados
        </p>
      </div>
      <div className="flex flex-col pt-8">
        {arrayCarrinho.map((item) => (
          <div key={item.id} className="w-[326px] flex flex-col pl-[16px]">
            <ListaCarrinho
              item={item}
              arrayCarrinho={arrayCarrinho}
              setArrayCarrinho={setArrayCarrinho}
            />
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
              R${" "}
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
      <div className="pt-[70px]">
        <button
          className="flex justify-center items-center w-[320px] h-[39px] bg-redPrimary rounded-[30px]"
          onClick={handleClickAddPedido}
        >
          <p className="text-white font-semibold text-xl">Realizar pedido</p>
        </button>
        <ToastContainer
          position="top-right"
          autoClose={120}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </div>
  );
};

export default PageCarrinhoAdd;
