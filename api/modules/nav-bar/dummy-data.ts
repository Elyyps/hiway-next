import { INavBar } from "./nav-bar";

export const navBarData = (): INavBar => ({
  logo: "/img/logo.png",
  searchIcon: "/icons/search.svg",
  menuIcon: "/icons/menu.svg",
  items: [
    { title: { text: "Home", url: "/" } },
    {
      title: { text: "Producten" },
      dropdownText:
        "An ever-evolving line-up; build to change the way we work.",
      dropdownTitle: "Our products",
      dropdownLink: [
        {
          link: { text: "Freelance platform", url: "/freelance-product" },
          content:
            "Our online freelance platform which enables blockchain technology in matching freelancers worldwide",
        },
        {
          link: { text: "HR platform", url: "/hr-product" },
          content:
            " Matching and contracting of a flexible workforce all within an easy to use modular design.",
        },
      ],
    },
    { title: { text: "About", url: "/about" } },
    { title: { text: "Contact", url: "/contact" } },
  ],
});
