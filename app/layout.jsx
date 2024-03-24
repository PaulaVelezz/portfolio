import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

export const inter = Inter({ 
  subsets: ["latin"] 
});

export const jetBrains = JetBrains_Mono({ 
  subsets: ["latin"],
});

export const metadata = {
  title: "Personal Portfolio",
  description: "Frontend Developer Portfolio",
};

export const margesh = localFont({
  src: './fonts/Margesh-Regular.otf',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
      <body className={margesh.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
