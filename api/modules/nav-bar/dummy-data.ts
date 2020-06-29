import { INavBar } from "./nav-bar";

export const navBarEnglishData = (): INavBar => ({
  logo: "/img/logo.png",
  searchIcon: "/icons/search.svg",
  menuIcon: "/icons/menu.svg",
  items: [
    { title: { text: "Home", url: "/" } },
    {
      title: { text: "Products" },
      dropdownText:
        "An ever-evolving line-up, build to change the way we work.",
      dropdownTitle: "Our products",
      dropdownLink: [
        {
          link: { text: "HR platform", url: "/hr-product" },
          content:
            "Find candidates and arrange contracts for your flexible workforce needs, within a simple platform that can be tailored to your business.",
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
  logo: "/img/logo.png",
  searchIcon: "/icons/search.svg",
  menuIcon: "/icons/menu.svg",
  items: [
    { title: { text: "Home", url: "/" } },
    {
      title: { text: "Products" },
      dropdownText:
        "An ever-evolving line-up, build to change the way we work.",
      dropdownTitle: "Our products",
      dropdownLink: [
        {
          link: { text: "HR platform", url: "/hr-product" },
          content:
            "Find candidates and arrange contracts for your flexible workforce needs, within a simple platform that can be tailored to your business.",
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
