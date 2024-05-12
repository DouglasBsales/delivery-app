import { useContext } from "react";
import { HomeContext } from "@/Context/Home/HomeContext";

import CardsProducts from "./CardsProducts";
import Loading from "./Loading";

const TodosItens = () => {
  const { itemsBest, items, loading } = useContext(HomeContext);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="pt-[36px]">
            <p className="font-semibold text-[18px] text-blackPrimary">
              Mais procurados
            </p>
          </div>
          {itemsBest &&
            itemsBest.map((item) => (
              <div key={item.id}>
                <CardsProducts item={{ ...item }} />
              </div>
            ))}
          <div>
            <div className="pt-[36px]">
              <p className="font-semibold text-[18px] text-blackPrimary">
                Demais itens
              </p>
            </div>
            {items &&
              items.map((item) => (
                <div key={item.id}>
                  <CardsProducts item={{ ...item }} />
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TodosItens;
