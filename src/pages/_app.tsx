import Buscarprovider from "@/common/context/buscarprovider";
import Cardprovider from "@/modules/compras/context/Cardpro";
import "@/styles/globals.css";
import {  CssBaseline } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Buscarprovider>
          <Cardprovider>
        <CssBaseline
        />

        <Component {...pageProps} />;
      </Cardprovider> 
    </Buscarprovider>
  )
}
