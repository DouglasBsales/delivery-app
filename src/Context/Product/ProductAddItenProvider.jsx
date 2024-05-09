import { useFetch } from "@/hooks/useFetch";
import { ProductItensAdd } from "./ProductItensAdd";

export const ProductAddItenProvider = ({ children }) => {
  const { data: items } = useFetch();

  const [countItem, setCountItem] = useState(1);

  const handleClickAddItem = () => {
    setCountItem((prevNumber) => prevNumber + 1);
  };

  const handleClickMinusItem = () => {
    if (countItem === 1) {
      return;
    } else {
      setCountItem((prevNumber) => prevNumber - 1);
    }
  };

  <ProductItensAdd.Provider
    value={{ handleClickAddItem, handleClickMinusItem }}
  >
    {children}
  </ProductItensAdd.Provider>;
};
