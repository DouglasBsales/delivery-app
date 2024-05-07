import { ChevronLeft } from "lucide-react";
import FavoritosVazio from "./FavoritosVazio";
import CardsFavoritos from "./CardsFavoritos";

const PageFavoritos = ({
  home,
  setIsPageFavoritos,
  arrayFavoritos,
  clickPageProduct,
  setArrayFavoritos,
}) => {
  const pageHome = () => {
    home(true);
    setIsPageFavoritos(false);
  };

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#F5F5F5]">
      <div className="flex-shrink-0 w-full bg-redPrimary">
        <div className="max-w-[393px] mx-auto px-[33px] py-9">
          <div>
            <button
              onClick={pageHome}
              className="w-12 h-12 flex justify-center items-center bg-white rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="h-[100px] flex justify-center items-end">
            <p className="text-4xl text-white font-semibold">Favoritos</p>
          </div>
        </div>
      </div>
      <div className="max-w-[393px] mx-auto px-[33px]">
        {arrayFavoritos.length === 0 && <FavoritosVazio />}
        {arrayFavoritos.length >= 1 && (
          <CardsFavoritos
            arrayFavoritos={arrayFavoritos}
            clickPageProduct={clickPageProduct}
            setArrayFavoritos={setArrayFavoritos}
          />
        )}
      </div>
    </div>
  );
};

export default PageFavoritos;
