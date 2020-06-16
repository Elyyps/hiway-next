import React, { ReactNode } from "react";
import Head from "next/head";
import FooterComponent from "./modules/footer/footer";
import { footerData } from "../api/modules/footer/dummy-data";
import NavBarComponent from "./modules/nav-bar/nav-bar";
import { navBarData } from "../api/modules/nav-bar/dummy-data";
import NewsletterComponent from "./modules/newsletter/newsletter";
import { newsletterData } from "../api/modules/newsletter/dummy-data";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Hiway" }: Props) => (
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
        <NavBarComponent navBarModule={navBarData()} />
      </nav>
    </header>
    {children}
    <NewsletterComponent newsletter={newsletterData()} />
    <footer>
      <FooterComponent footer={footerData()} />
    </footer>
  </div>
);

export default Layout;
