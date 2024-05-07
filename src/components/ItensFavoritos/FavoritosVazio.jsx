import Image from "next/image";
import pedidoFavoritoVazio from "../../assets/pedidoFavoritoVazio.png";

const FavoritosVazio = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="pt-[60px]">
          <Image
            src={pedidoFavoritoVazio}
            alt="photo"
            width={250}
            height={250}
          />
        </div>
        <div className="w-[270px] flex flex-col items-center pt-5">
          <p className="text-2xl font-ligther text-center">
            Você não possui itens favoritos
          </p>
          <p className="text-blackOpacity text-center">
          Adicione seu item favorito
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavoritosVazio;
