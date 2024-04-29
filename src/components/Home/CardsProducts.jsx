import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

const CardsProducts = ({ name, portion, category, photo, price, descriptionCard}) => {
  return (
    <div className="flex flex-col pt-8">
      <Link
        href="#"
        className="w-[326px] flex flex-col bg-white rounded-[8px] pl-[16px] relative"
      >
        <div className="flex justify-between">
          <div className="w-[305px] justify-end flex absolute pt-[5px]">
            <button>
              <Heart className={"text-redPrimary"} />
            </button>
          </div>
          <div className="w-[160px] pt-[21px]">
            <p className="text-xs text-blackOpacity font-semibold">{category}</p>
            <p className="text-[18px] text-blackPrimary font-semibold relative top-[-3px]">
              {name}
            </p>
            <p className="text-redPrimary text-xs relative bottom-2">{portion}</p>
            <p className="text-[10px] font-semibold text-blackOpacity">
            {descriptionCard}...
            </p>
            <p className="text-redPrimary font-bold text-[18px] pb-3 pt-2">R$ {price.toFixed(2).replace('.', ",")}</p>
          </div>
          <div className="flex items-center">
            <Image src={photo} alt="hamburguer" width={134} height={135}/>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardsProducts;
