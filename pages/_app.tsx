import "./styles.scss";
import "react-circular-progressbar/dist/styles.css";

import { AppProps } from "next/app";
import { LanguageContextProvider } from "../context/language";
import { RouteContextProvider } from "../context/route";
import { ScreenWidthContextProvider } from "../context/screen-width";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageContextProvider>
      <RouteContextProvider>
        <ScreenWidthContextProvider>
          <Component {...pageProps} />
        </ScreenWidthContextProvider>
      </RouteContextProvider>
    </LanguageContextProvider>
  );
}

export default MyApp;
