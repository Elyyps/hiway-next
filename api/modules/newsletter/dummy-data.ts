import { INewsletter } from "./newsletter";

export const newsletterData = (): INewsletter => ({
  title: "Want more information about Hiway?",
  link: { text: "about page", url: "/about" },
  button: { text: "Get in touch" },
  card: {
    title: "Newsletter",
    description:
      "Filium morte multavit si sine dubio praeclara sunt, fecerint, virtutem iis per se. Torquem detraxit hosti et.",
    button: "Sign up",
  },
});
