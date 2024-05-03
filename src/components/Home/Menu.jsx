import { Home, ShoppingCart, Heart, ClipboardList } from "lucide-react";
import Link from "next/link";

const Menu = ({ home, pageCarrinho, pagePedido }) => {
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
      <div className="w-[393px] h-[61px] flex items-center justify-around bg-redPrimary rounded-[px]">
        <button onClick={pageHome}>
          <Home className="text-white" size={30} />
        </button>
        <button onClick={pageCarrinhoProduct}>
          <ShoppingCart className="text-white" size={30} />
        </button>
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
