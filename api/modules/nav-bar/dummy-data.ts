import { INavBar } from "./nav-bar";

export const navBarEnglishData = (): INavBar => ({
  logo: "/img/optimized/logo.png",
  searchIcon: "/svg/search.svg",
  menuIcon: "/svg/menu.svg",
  items: [
    { title: { text: "Home", url: "/" } },
    {
      title: { text: "Products" },
      dropdownText:
        "An ever-evolving line-up, built to change the way we work.",
      dropdownTitle: "Our products",
      dropdownLink: [
        {
          link: { text: "HR platform", url: "/hr-product" },
          content:
            "From finding candidates and arranging contracts for your flexible workforce, up to salary payments, all in one HR platform.",
        },
        {
          link: { text: "Freelance platform", url: "/freelance-product" },
          content:
            "Find freelance vacancies worldwide, with our online job-search platform that uses blockchain technology to match the right candidate with the right job.",
        },
      ],
    },
    { title: { text: "About", url: "/about" } },
    { title: { text: "Contact", url: "/contact" } },
  ],
});
export const navBarDutchData = (): INavBar => ({
  logo: "/img/optimized/logo.png",
  searchIcon: "/svg/search.svg",
  menuIcon: "/svg/menu.svg",
  items: [
    { title: { text: "Home", url: "/" } },
    {
      title: { text: "Products" },
      dropdownText:
        "Dynamische HR software die de huidige manier van werken in human resources veranderd.",
      dropdownTitle: "Onze diensten",
      dropdownLink: [
        {
          link: { text: "HR platform", url: "/hr-product" },
          content:
            "Van werven van flexibel personeel tot en met verlonen, alles in één simpel HR platform, op maat gemaakt voor jouw organisatie.",
        },
        {
          link: { text: "Freelance platform", url: "/freelance-product" },
          content:
            "Vind wereldwijd freelance vacatures met onze online marktplaats dat gebruikt maakt van blockchain technologie om de juiste kandidaat met de juiste opdracht te koppelen.",
        },
      ],
    },
    { title: { text: "About", url: "/about" } },
    { title: { text: "Contact", url: "/contact" } },
  ],
});
