import Image from "next/image";

import { useContext } from "react";
import { ProductContext } from "@/Context/Product/ProductContext";

const PedidosRealizados = () => {
  const { arrayPedidosRealizados } = useContext(ProductContext);

  const calcularTotalPedido = (pedido) => {
    return pedido.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0);
  };

  return (
    <div className="pt-[50px] pb-[70px]">
      <div>
        <div>
          {arrayPedidosRealizados.map((order, index) => (
            <div
              key={order.id}
              className="w-[320px] bg-white rounded-lg mb-5 px-4"
            >
              <div className="pb-[26px]">
                {arrayPedidosRealizados.length < 10 ? (
                  <p className="font-semibold text-xl text-blackOpacity pt-2">
                    Pedido #0{index + 1}
                  </p>
                ) : (
                  <p className="font-semibold text-xl text-blackOpacity pt-2">
                    Pedido #{index + 1}
                  </p>
                )}
              </div>
              {order.map((product) => (
                <div key={product.id}>
                  <div className="border-b">
                    <div className="flex items-center">
                      <div>
                        <Image
                          src={product.photo}
                          alt="item"
                          width={64}
                          height={64}
                        />
                      </div>
                      <div className="w-full flex justify-between text-xs">
                        <div className="flex gap-1 text-blackOpacity">
                          <p>{product.quantity}x</p>
                          <p className="">{product.name}</p>
                        </div>
                        <div>
                          <p className="font-semibold text-redPrimary">
                            R${" "}
                            {(product.price * product.quantity)
                              .toFixed(2)
                              .replace(".", ",")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-between pt-5">
                <p className="font-semibold text-blackOpacity">
                  Forma de pagamento:
                </p>
                <p>{order[0].payment}</p>
              </div>
              <div className="flex justify-between pt-4 pb-5">
                <p className="text-lg text-blackOpacity font-semibold">Total</p>
                <p className="text-redPrimary text-lg font-semibold">
                  R$ {calcularTotalPedido(order).toFixed(2).replace(".", ",")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PedidosRealizados;
