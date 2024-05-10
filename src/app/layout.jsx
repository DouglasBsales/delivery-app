import { Montserrat } from "next/font/google";
import "./globals.css";
import HomeContextProvider from "@/Context/Home/HomeContext";


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
      <HomeContextProvider>
        <body className={montSerrat.className}>{children}</body>
      </HomeContextProvider>
    </html>
  );
}
