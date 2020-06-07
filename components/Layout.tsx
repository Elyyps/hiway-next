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

const Layout = ({
  children,
  title = "Hiway plateform | Marketplace for work",
}: Props) => (
  <div>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/uikit@3.5.3/dist/css/uikit.min.css"
    />
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.3/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.3/dist/js/uikit-icons.min.js"></script>

    <style global={true}>
      {`
        @font-face {
          font-family: "Apercu";
          font-style: normal;
          font-weight: 400;
          src: local("Apercu-Regular"), local("Apercu-Regular"),
            url(/fonts/Apercu-Regular.otf) format("opentype");
        }
        :root {
          --primary-color: #c9002a;
          --secondary-color: #00009d;
          --primary-color-dark: #c9002cb2;
          --secondary-color-dark: #00009d8f;
        }
        .divider {
          margin: 3% 0;
          width: 8%;
          height: 2px;
          background-color: var(--secondary-color);
        }

        > * {
          font-family: "Apercu";
        }
        .container {
          width: 90%;
          max-width: 1290px;
          margin: 0 auto;
        }
        h2,
        h4 {
          margin-bottom: 0;
          line-height: unset;
          font-family: "Apercu";
        }
        .title {
          font-size: 30px;
          font-weight: bold;
          color: var(--primary-color);
          @media (max-width: 960px) {
            font-size: 24px;
          }
          @media (max-width: 639px) {
            font-size: 20px;
          }
        }
        
      `}
    </style>
    <Head>
      <title>{title}</title>
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
