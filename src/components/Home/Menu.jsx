import { Home, ShoppingCart, Heart, ClipboardList } from "lucide-react";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="fixed bottom-0">
      <div className="w-[393px] h-[61px] flex items-center justify-around bg-redPrimary rounded-[px]">
        <Link href="#">
          <Home className="text-white" size={30} />
        </Link>
        <Link href="#">
          <ShoppingCart className="text-white" size={30} />
        </Link>
        <Link href="#">
          <Heart className="text-white" size={30} />
        </Link>
        <Link href="/Pedidos">
          <ClipboardList className="text-white" size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Menu;
