import { ISection } from "../../cores/section";

export const welcomeData = (): ISection[] => [
  {
    backgroundImage: "/img/optimized/section1.jpg",
    title: "HR platform",
    subTitle: "i want to go to ",
    content:
      "The perfect HR solution for flexible workforces. Let employees track their hours, sign contracts, and let payments settled automatically.",
    postion: "center",
    variant: "primary",
    button: { text: "Go to HR platform" },
  },
  {
    backgroundImage: "/img/optimized/section2.jpg",
    title: "Freelance platform",
    subTitle: "i want to go to ",
    content:
      "Find the perfect job for you — a platform aimed at freelancers. Take on jobs from anywhere in the world!",
    postion: "left",
    variant: "secondary",
    button: { text: "Go to Freelance platform" },
  },
];
export const headerAboutData = (): ISection => ({
  backgroundImage: "/img/optimized/about.jpg",
  title: "Simplifying Work",
  content:
    "Creating the employment environment of the future by utilising technological advancements",
  postion: "center",
  variant: "primary",
  button: { text: "Go to HR platform" },
});
export const headerContactData = (): ISection => ({
  backgroundImage: "/img/optimized/contact.jpg",
  title: "Get in touch",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis ante at erat consequat congue.",
  postion: "center",
  variant: "primary",
  button: { text: "Contact" },
});
