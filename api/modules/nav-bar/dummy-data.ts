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
        "Torquem detraxit hosti et quidem faciunt ut alterum aspernandum sentiamus alii autem quibus ego cum soluta nobis est cur nec.",
      dropdownTitle: "Our products",
      dropdownLink: [
        {
          link: { text: "Freelance platform" },
          content:
            "Certe, inquam, pertinax non fuisse torquem detraxit hosti et quidem exercitus quid ex. ",
        },
        {
          link: { text: "Product 3" },
          content:
            "Certe, inquam, pertinax non fuisse torquem detraxit hosti et quidem exercitus quid ex. ",
        },
        {
          link: { text: "HR platform", url: "/hr-product" },
          content:
            "Certe, inquam, pertinax non fuisse torquem detraxit hosti et quidem exercitus quid ex. ",
        },
      ],
    },
    { title: { text: "About", url: "/" } },
    { title: { text: "Contact", url: "/" } },
  ],
});
