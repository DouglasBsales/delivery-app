import { Montserrat } from "next/font/google";
import "./globals.css";

const montSerrat = Montserrat({
  weight: ["200", "300", "400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Delivery App",
  description: "Uma experiência onlineFood nunca vista",
  icons: {
    icon: "/IconVeliveryApp.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={montSerrat.className}>
        {children}
      </body>
    </html>
  );
}
