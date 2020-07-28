import { INewsletter } from "./newsletter";

export const newsletterEnglishData = (): INewsletter => ({
  title: "Want more information about Hiway?",
  info: "or check out our",
  link: { text: "about page", url: "/about" },
  button: { text: "Request a demo" },
  card: {
    title: "Newsletter",
    description:
      "Filium morte multavit si sine dubio praeclara sunt, fecerint, virtutem iis per se. Torquem detraxit hosti et.",
    button: "Sign up",
  },
});
export const newsletterDutchData = (): INewsletter => ({
  title: "Zou je meer willen weten over Hiway?",
  link: { text: "about pagina", url: "/about" },
  info: "Of bezoek onze",
  button: { text: "Demo aanvragen" },
  card: {
    title: "Newsletter",
    description:
      "Filium morte multavit si sine dubio praeclara sunt, fecerint, virtutem iis per se. Torquem detraxit hosti et.",
    button: "Sign up",
  },
});
