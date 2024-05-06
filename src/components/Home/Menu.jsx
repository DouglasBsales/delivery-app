import { Home, ShoppingCart, Heart, ClipboardList } from "lucide-react";
import Link from "next/link";

const Menu = ({ home, pageCarrinho, pagePedido, arrayProductCarrinho }) => {
  const pageHome = () => {
    pageCarrinho(false);
    home(true);
  };

  const pageCarrinhoProduct = () => {
    pageCarrinho(true);
    home(false);
  };

  const isPagePedido = () => {
    pagePedido(true);
    home(false);
  };


  return (
    <div className="fixed bottom-0">
      <div className="w-[393px] h-[65px] flex items-center justify-around bg-redPrimary rounded-t-md pt-2">
        <button onClick={pageHome}>
          <Home className="text-white" size={30} />
        </button>
        <div className="flex flex-col relative">
          <button onClick={pageCarrinhoProduct}>
          <div className="absolute top-[-12px] left-5 ">
            <p className=" text-white text-xs">
              {arrayProductCarrinho.reduce(
                (total, produto) => total + produto.quantity,
                0
              )}
            </p>
          </div>
            <ShoppingCart className="text-white" size={30} />
          </button>
        </div>
        <button>
          <Heart className="text-white" size={30} />
        </button>
        <button onClick={isPagePedido}>
          <ClipboardList className="text-white" size={30} />
        </button>
      </div>
    </div>
  );
};

export default Menu;
