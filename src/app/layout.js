import { Holtwood_One_SC, Grape_Nuts } from "next/font/google";
import "./globals.css";

const holtwoodOneSC = Holtwood_One_SC({
  variable: "--font-holtwood-one-sc",
  subsets: ["latin"],
  weight: "400",
});

const grapeNuts = Grape_Nuts({
  variable: "--font-grape-nuts",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "icream",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${holtwoodOneSC.variable} ${grapeNuts.variable}`}>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
