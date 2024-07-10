"use client";
import { Roboto } from "next/font/google";
import "./globals.css";
import Auth from "../../utils/helperAuth";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata = {
  title: "Agroemprende",
  description: "Make your dreams true",
};

export default function viewsLayout({ children }) {
  Auth();
  return (
    <html lang="es">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
