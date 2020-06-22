import { IFooter } from "./footer";

export const footerData = (): IFooter => ({
  contactTitle: "Contact",
  contacts: [
    { text: "contact@hiway.io" },
    {
      text: "Terms of Service",
      url: "https://hiway.io/documents/Hiway_Terms_of_Service.pdf",
    },
    { text: "Privacy Statement" },
  ],
  mediaTitle: "Follow us on social media",
  mediaTitleMobile: "Social media",
  medias: [
    {
      link: {
        text: "Facebook",
        url: "https://www.facebook.com/hiwayofficial/",
      },
      icon: "/icons/facebook.svg",
    },
    { link: { text: "Twitter" }, icon: "/icons/twitter.svg" },
    {
      link: {
        text: "Linkedin",
        url: "https://www.linkedin.com/company/hiwayofficial/",
      },
      icon: "/icons/linkedin.svg",
    },
    {
      link: { text: "Medium", url: "https://medium.com/hiway-official" },
      icon: "/icons/medium2.svg",
    },
  ],
});
