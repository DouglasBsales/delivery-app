import Image from "next/image";
import { useState, useEffect, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { HomeContext } from "@/Context/Home/HomeContext";

const CardsProducts = ({
  name,
  portion,
  ml,
  category,
  photo,
  price,
  descriptionCard,
  id,
}) => {
  const {
    arrayFavoritos,
    setArrayFavoritos,
    items,
    setProductExib,
    setValue,
  } = useContext(HomeContext)

  const [isFavorit, setIsFavorit] = useState(false);

  const exibirProduct = (id) => {
    const selected = items.find((product) => product.id === id);
    setValue("");
    setProductExib(selected);
  };

  // Verifica se o produto atual está nos favoritos ao carregar a página
  useEffect(() => {
    if (arrayFavoritos && arrayFavoritos.length > 0) {
      const isProductInFavoritos = arrayFavoritos.some(
        (product) => product.id === id
      );
      setIsFavorit(isProductInFavoritos);
    }
  }, [arrayFavoritos, id]);

  const toggleFavoritos = (id) => {
    setIsFavorit(!isFavorit);

    if (arrayFavoritos && arrayFavoritos.length > 0) {
      const isProductInFavoritos = arrayFavoritos.some(
        (product) => product.id === id
      );

      if (isProductInFavoritos) {
        const updatedFavoritos = arrayFavoritos.filter(
          (product) => product.id !== id
        );
        setArrayFavoritos(updatedFavoritos);
        return;
      }
    }

    const selected = items.find((product) => product.id === id);
    setArrayFavoritos([...arrayFavoritos, selected]);
  };

  return (
    <div className="flex flex-col pt-8">
      <div>
        <div className="w-[315px] justify-end flex absolute pt-[10px]">
          <button
            onClick={() => toggleFavoritos(id)}
            className="cursor-pointer"
          >
            {isFavorit ? (
              <FontAwesomeIcon
                icon={solidHeart}
                className="text-redPrimary size-6"
              />
            ) : (
              <FontAwesomeIcon
                icon={regularHeart}
                className="text-redPrimary size-6"
              />
            )}
          </button>
        </div>
        <Link
          href="/Product"
          className="w-[326px] flex flex-col bg-white rounded-[8px] pl-[16px]"
          onClick={() => exibirProduct(id)}
        >
          <div className="flex justify-between">
            <div className="w-[160px] pt-[21px] text-start">
              <p className="text-xs text-blackOpacity font-semibold">
                {category}
              </p>
              <p className="text-[18px] text-blackPrimary font-semibold relative top-[-3px]">
                {name}
              </p>
              <p className="text-redPrimary text-xs font-semibold relative bottom-2">
                {portion}
              </p>
              <p className="text-redPrimary text-xs font-semibold relative bottom-2">
                {ml}
              </p>
              <p className="text-[10px] font-semibold text-blackOpacity">
                {descriptionCard}...
              </p>
              <p className="text-redPrimary font-bold text-[18px] pb-3 pt-2">
                R$ {price.toFixed(2).replace(".", ",")}
              </p>
            </div>
            <div className="flex items-center">
              <Image src={photo} alt="imagem" width={134} height={135} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardsProducts;
