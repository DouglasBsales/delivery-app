import Image from "next/image";
import pedidoFavoritoVazio from "../../assets/pedidoFavoritoVazio.png";

const FavoritosVazio = () => {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <div className="pt-[30px] pl-4">
          <Image
            src={pedidoFavoritoVazio}
            alt="photo"
            width={200}
            height={200}
          />
        </div>
        <div className="w-[270px] flex flex-col items-center pt-5">
          <p className="text-xl font-ligther text-center">
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
