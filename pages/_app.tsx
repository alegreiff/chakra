import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import SidebarWithHeader from "../components/SideBar";
import { themeJaime } from "../datos/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={themeJaime}>
      <SidebarWithHeader>
        <Component {...pageProps} />
      </SidebarWithHeader>
    </ChakraProvider>
  );
}

export default MyApp;
