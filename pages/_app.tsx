import "./styles.scss";
import "react-circular-progressbar/dist/styles.css";

import { AppProps } from "next/app";
import { LanguageContextProvider } from "../context/language";
import { RouteContextProvider } from "../context/route";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageContextProvider>
      <RouteContextProvider>
        <Component {...pageProps} />
      </RouteContextProvider>
    </LanguageContextProvider>
  );
}

export default MyApp;
