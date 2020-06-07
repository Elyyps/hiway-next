import { ISection } from "../../cores/section";

export const welcomeData = (): ISection[] => [
  {
    backgroundImage: "/img/section1.jpg",
    title: "HR platform",
    subTitle: "i want to go to ",
    content:
      "The perfect HR solution for flexible workforces. Let employees track their hours, sign contracts, and let payments settled automatically.",
    postion: "center",
    variant: "primary",
    button: { text: "Go to HR platform" },
  },
  {
    backgroundImage: "/img/section2.jpg",
    title: "Freelance platform",
    subTitle: "i want to go to ",
    content:
      "Find the perfect job for you — a platform aimed at freelancers. Take on jobs from anywhere in the world!",
    postion: "left",
    variant: "secondary",
    button: { text: "Go to Freelance platform" },
  },
];
