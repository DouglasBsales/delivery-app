import { Home, ShoppingCart, Heart, ClipboardList } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  
  return (
    <div className="fixed bottom-0">
      <div className="w-[393px] h-[65px] flex items-center justify-around bg-redPrimary rounded-t-md pt-2">
        <Link href="/Home">
          <Home className="text-white" size={30} />
        </Link>
        <div className="flex flex-col relative">
          <Link href="/Carrinho">
            <div className="absolute top-[-12px] left-5 ">
              <p className=" text-white text-xs">
                {/*{arrayProductCarrinho.reduce(
                (total, produto) => total + produto.quantity,
                0
              )} */}
              </p>
            </div>
            <ShoppingCart className="text-white" size={30} />
          </Link>
        </div>
        <button>
          <Heart className="text-white" size={30} />
        </button>
        <Link href="/Pedidos">
          <ClipboardList className="text-white" size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
