import Image from "next/image";
import Link from "next/link";

import { HomeContext } from "@/Context/Home/HomeContext";
import { useContext } from "react";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductContext } from "@/Context/Product/ProductContext";

const CardsFavoritos = () => {
  const { items, arrayFavoritos, setArrayFavoritos, setProductExib, setValue, productExib} = useContext(HomeContext);
  const { setCountItem } = useContext(ProductContext);

  const removeFavorito = (id) => {
    const updateFavoritos = arrayFavoritos.filter(
      (product) => product.id !== id
    );
    setArrayFavoritos(updateFavoritos);
  };

  const exibirProduct = (id) => {
    const selected = items.find((product) => product.id === id);
    setValue("");
    setProductExib(selected);
    setCountItem(1);
  };

  return (
    <div className="flex flex-col pt-8">
      {arrayFavoritos.map((product, index) => (
        <div key={product.id} className={`mb-3 ${index !== 0 ? "mt-3" : ""}`}>
          <div>
            <div className="w-[315px] justify-end flex absolute pt-[10px]">
              <button
                className="w-full flex justify-end "
                onClick={() => removeFavorito(product.id)}
              >
                <FontAwesomeIcon icon={faTrash} className="text-blackOpacity" />
              </button>
            </div>
            <Link
              href="/Product"
              className="w-[290px] flex flex-col bg-white rounded-[8px] pl-[16px] outline-none"
              onClick={() => exibirProduct(product.id)}
            >
              <div className="flex justify-between">
                <div className="w-[305px] justify-end flex absolute pt-[5px]"></div>
                <div className="w-[160px] pt-[21px] text-start">
                  <p className="text-xs text-blackOpacity font-semibold">
                    {product.category}
                  </p>
                  <p className="text-[18px] text-blackPrimary font-semibold relative top-[-3px]">
                    {product.name}
                  </p>
                  <p className="text-redPrimary text-xs font-semibold relative bottom-2">
                    {product.portion}
                  </p>
                  <p className="text-redPrimary text-xs font-semibold relative bottom-2">
                    {product.ml}
                  </p>
                  <p className="text-[10px] font-semibold text-blackOpacity">
                    {product.descriptionCard}...
                  </p>
                  <p className="text-redPrimary font-bold text-[18px] pb-3 pt-2">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </p>
                </div>
                <div className="flex items-center">
                  <Image
                    src={product.photo}
                    alt="imagem"
                    width={134}
                    height={135}
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsFavoritos;
