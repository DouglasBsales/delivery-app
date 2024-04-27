import Image from "next/image";
import { Bell } from "lucide-react";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Image
            width={47}
            height={47}
            className="rounded-full"
            src="/perfilDog.png"
            alt="fotoPerfil"
          />
        </div>
        <div>
          <Bell />
        </div>
      </div>
      <div className="pt-5">
        <p className="text-[20px] font-semibold text-blackPrimary">Escolha</p>
        <div className="flex gap-1">
          <p className="text-blackPrimary text-[20px] font-semibold">
            Sua Comida
          </p>
          <p className="text-redPrimary text-[20px] font-semibold">Favorita</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
