import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

const CardsProducts = ({ name, category, photo, price, description, descriptionCard}) => {
  return (
    <div className="flex flex-col gap-5 pt-8 pb-20">
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
            <p className="text-xs text-blackOpacity font-semibold">{category}</p>
            <p className="text-[18px] text-blackPrimary font-semibold relative top-[-3px]">
              {name}
            </p>
            <p className="text-[10px] font-semibold text-blackOpacity relative top-[-8px]">
            {descriptionCard}...
            </p>
            <p className="text-redPrimary font-bold text-[18px]">R$ {price.toFixed(2).replace('.', ",")}</p>
          </div>
          <div>
            <Image src={photo} alt="" width={134} height={135} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardsProducts;
