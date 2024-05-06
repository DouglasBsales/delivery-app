import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ListaCarrinho = ({ item, arrayCarrinho, setArrayCarrinho }) => {
  const [countItem, setCountItem] = useState(item.quantity);

  const handleClickAddItem = () => {
    const countItemAdd = countItem + 1;
    setCountItem(countItemAdd);
    handleUpdateCart(countItemAdd);
  };

  const handleClickMinusItem = () => {
    if (countItem === 1) {
      return;
    } else {
      const countItemMinus = countItem - 1;
      setCountItem(countItemMinus);
      handleUpdateCart(countItemMinus);
    }
  };

  const handleRemoveItem = () => {
    const newArrayCarrinho = arrayCarrinho.filter(
      (cartItem) => cartItem.name !== item.name
    );
    setArrayCarrinho(newArrayCarrinho);
  };

  const handleUpdateCart = (updatedCount) => {
    const existingItemIndex = arrayCarrinho.findIndex(
      (cartItem) => cartItem.name === item.name
    );

    if (existingItemIndex !== -1) {
      const newArrayCarrinho = [...arrayCarrinho];
      newArrayCarrinho[existingItemIndex] = {
        ...newArrayCarrinho[existingItemIndex],
        quantity: updatedCount,
      };
      setArrayCarrinho(newArrayCarrinho);
    } else {
      setArrayCarrinho([
        ...arrayCarrinho,
        {
          photo: item.photo,
          name: item.name,
          category: item.category,
          price: item.price,
          description: item.description,
          portion: item.portion,
          quantity: updatedCount,
        },
      ]);
    }
  };

  return (
    <div className="w-full flex justify-between">
      <div className="w-[326px] pt-[21px] text-start">
        <div className="flex items-center ">
          <div>
            <Image src={item.photo} alt="item" width={95} height={95} />
          </div>
          <div className="w-full flex justify-between">
            <div className="flex flex-col">
              <div className="flex gap-[6px]">
                <p className="text-xs font-semibold text-blackOpacity">
                  {item.quantity}x
                </p>
                <div>
                  <p className="text-xs font-semibold text-blackOpacity">
                    {item.name}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-xs text-redPrimary font-semibold">
                  R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                </p>
              </div>
            </div>
            <div className="pl-2">
              <div className="w-[79px] h-[28px] bg-redPrimary rounded-md">
                <div className="flex justify-between p-[7px]">
                  {countItem === 1 && (
                    <button onClick={handleRemoveItem}>
                      <Trash2 className="text-white" size={16} />
                    </button>
                  )}
                  {countItem > 1 && (
                    <button onClick={handleClickMinusItem}>
                      <Minus className="text-white" size={16} />
                    </button>
                  )}
                  <div className="text-xs font-semibold text-white">
                    {countItem}
                  </div>
                  <button onClick={handleClickAddItem}>
                    <Plus className="text-white" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaCarrinho;
