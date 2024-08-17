import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import StoreProvider from "./StoreProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png"
        sizes="any"
      />
      <body className={cn("bg-gray-100", inter.className)}>
        <StoreProvider>
          <Header />
          {children}
          <Toaster />
          {children && <Footer />}
        </StoreProvider>
      </body>
    </html>
  );
}
