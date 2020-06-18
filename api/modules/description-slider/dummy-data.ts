import { IDescriptionSlider } from "./description-slider";

export const descriptionSliderData = (): IDescriptionSlider[] => [
  {
    content:
      "Tailored towards small business and recruitment agencies, this software suite enables any company in their search and contracting of flexible employees. A simple tool that enables digital contract signing and automatical payments from the employer side. And an easy to use platform for employees to submit hours and expenses. An all-compassing easy to use workforce tool.",
    link: { text: "More information" },
    pictures: [
      "/img/optimized/hr1.jpg",
      "/img/optimized/hr2.jpg",
      "/img/optimized/hr3.jpg",
    ],
    variant: "primary",
    descriptionCards: [
      {
        icon: "/icons/modular-design.svg",
        title: "Modular Design",
        content:
          "Select what tools you need for your company and disable the rest. Can’t find what you’re looking for? We are happy to build a new module tailored to your needs.",
      },
      {
        icon: "/icons/browser-friendly.svg",
        title: "Browser Friendly",
        content:
          "Accessible through any web-browser. No installation time and suitable for any system. ",
      },
    ],
  },
  {
    content:
      "A globally operating freelance platform that enables workers to find and take on jobs from all over the world. Payments settle through the use of blockchain technology to facilitate worldwide and instant payments.\nFor employers, this product offers an easy to use the platform to centralize the search and hiring of freelancers.",
    link: { text: "More information" },
    pictures: [
      "/img/optimized/freelance1.png",
      "/img/optimized/freelance1.png",
      "/img/optimized/freelance1.png",
    ],
    variant: "secondary",
    descriptionCards: [
      {
        icon: "/icons/well-protected.svg",
        title: "Well protected",
        content:
          "It is secured using blockchain technology while complying with the newest GDPR privacy regulation.",
      },
      {
        icon: "/icons/easy-use.svg",
        title: "Easy to use",
        content:
          "Build with user-friendliness in mind; this platform offers everything the freelance industry needs to operate globally.",
      },
    ],
  },
];
