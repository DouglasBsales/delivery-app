import Image from "next/image";
import Link from "next/link";
import Burguer from "../../assets/Burguer.png";
import { Heart } from "lucide-react";

const CardsProducts = () => {
  return (
    <div className="pt-[27px]">
      <Link
        href="#"
        className="w-[326px] h-[146px] flex flex-col bg-white rounded-[8px] pl-[16px] relative"
      >
        <div className="flex justify-between">
          <div className="w-[305px] justify-end flex absolute pt-[5px]">
            <button>
              <Heart className={"text-redPrimary"} />
            </button>
          </div>
          <div className="w-[160px] pt-[21px]">
            <p className="text-xs text-blackOpacity font-semibold">Burguer</p>
            <p className="text-[18px] text-blackPrimary font-semibold relative top-[-8px]">
              Hamburguer
            </p>
            <p className="text-[10px] font-semibold text-blackOpacity relative top-[-8px]">
              Um hambúrguer simples com carne suculenta grelhada, queijo
              derretido, alface ...
            </p>
            <p className="text-redPrimary font-bold text-[18px]">R$ 12,00</p>
          </div>
          <div>
            <Image src={Burguer} alt="" width={134} height={135} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardsProducts;
