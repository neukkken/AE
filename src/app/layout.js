import { Roboto } from "next/font/google";
import "./globals.css";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Agroemprende",
  description: "Make your dreams true",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
