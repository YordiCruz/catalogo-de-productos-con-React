import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // aqui estamos registrando el link de la api de mercado libre
  images: {
    remotePatterns: [
      {
        protocol: "https",
        //podemos definir la ruta a la que queremos acceder agregando /productos por ejemplo
        hostname: "cdn.dummyjson.com",
        //del /producto con /** queremos acceder a todos los elementos
        pathname: "/**",
      },
    ]
  }
};

export default nextConfig;
