import Image from "next/image";
import React from "react";

const ListaCarrinho = ({ item }) => {
  return (
    <div className="flex justify-between">
      <div className="w-[326px] pt-[21px] text-start">
        <div className="flex items-center ">
          <div>
            <Image src={item.photo} alt="item" width={95} height={95} />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-[6px]">
              <p className="text-xs font-semibold text-blackOpacity">
                {item.quantity}
              </p>
              <p className="text-xs font-semibold text-blackOpacity">
                {item.name}
              </p>
            </div>
            <div>
              <p className="text-xs text-redPrimary font-semibold">
                R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center"></div>
    </div>
  );
};

export default ListaCarrinho;
