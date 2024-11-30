import "./globals.css";

import NavBar from "../layouts/common/navbar";
import Footer from "../layouts/common/footer";
import PopupSale from "../components/PopupSale";
import StoreProvider from "./StoreProvider";
import Cookies from "js-cookie";
import TheemProvider from "@/patterns/Provider/TheemProvider";
import { Fragment } from "react";

export const metadata = {
  title: "Store App",
  description: "Store APP || Application || Shopping Now...",
};

export default function RootLayout({ children }) {
  const token = Cookies.get("token");

  if (token) {
    return (
      <GlobalError
        error={{ message: "You are not authorized to access this page layout" }}
      />
    );
  }

  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <TheemProvider>
            <NavBar />
            {children}
            <PopupSale />
            <Footer />
          </TheemProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
