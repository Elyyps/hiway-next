import React, { ReactNode } from "react";
import Head from "next/head";
import FooterComponent from "./modules/footer/footer";
import {
  footerEnglishData,
  footerDutchData,
} from "../api/modules/footer/dummy-data";
import NavBarComponent from "./modules/nav-bar/nav-bar";
import {
  navBarEnglishData,
  navBarDutchData,
} from "../api/modules/nav-bar/dummy-data";
import NewsletterComponent from "./modules/newsletter/newsletter";
import {
  newsletterEnglishData,
  newsletterDutchData,
} from "../api/modules/newsletter/dummy-data";
import { LanguageContext } from "../context/language";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Hiway" }: Props) => {
  const { language } = React.useContext(LanguageContext);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/img/title-icon.png" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Hiway is a marketplace for work built with few of the most innovative technologies: big data, blockchain and AI.Hiway serves both employees and employers."
        />
      </Head>

      <header>
        <nav>
          <NavBarComponent
            navBarModule={
              language === "EN" ? navBarEnglishData() : navBarDutchData()
            }
          />
        </nav>
      </header>
      {children}
      <NewsletterComponent
        newsletter={
          language === "EN" ? newsletterEnglishData() : newsletterDutchData()
        }
      />
      <footer>
        <FooterComponent
          footer={language === "EN" ? footerEnglishData() : footerDutchData()}
        />
      </footer>
    </div>
  );
};

export default Layout;
