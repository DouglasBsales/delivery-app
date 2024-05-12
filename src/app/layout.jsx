import { Montserrat } from "next/font/google";
import "./globals.css";
import HomeContextProvider from "@/Context/Home/HomeContext";
import Menu from "@/components/Home/Menu";
import ProductContextProvider from "@/Context/Product/ProductContext";

const montSerrat = Montserrat({
  weight: ["200", "300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Delivery App",
  description: "Uma experiência onlineFood nunca vista",
  icons: {
    icon: "/IconVeliveryApp.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={montSerrat.className}>
        <HomeContextProvider>
          <ProductContextProvider>
            {children}
            <div className="w-full flex justify-center bg-[#F5F5F5]">
              <Menu />
            </div>
          </ProductContextProvider>
        </HomeContextProvider>
      </body>
    </html>
  );
}
