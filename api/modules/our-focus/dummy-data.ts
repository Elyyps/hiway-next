import { IOurFocus } from "./our-focus";

export const ourFocusData = (): IOurFocus => ({
  title: "What we do best",
  content:
    "At Hiway, we focus on work. We are getting work done ourselves while at the same time enabling others to do the same. Our team is built with a strong background and focus on the recruitment industry. We started with running our own recruitment agency through which we found numerous ways to improve the process of finding, administrating, and matching candidates and vacancies. Our main focus is on the employer side of running a small to medium sizes company. At the same time, we are fascinated by technological advancements, which led us to start experimenting with technologies like Blockchain and Artificial intelligence. Check out our first two products down below.",
  descriptionCards: [
    {
      title: "Developers",
      content:
        "A strong development team ready to solve every HR problem found within the industry.",
      icon: "/icons/dev.svg",
    },
    {
      title: "Focus",
      content:
        "Strong focus on the HR industry. Helping people find work and helping employers with everything HR related.",
      icon: "/icons/focus.svg",
    },
    {
      title: "Experience",
      content:
        "15+ years experience in the industry. Running our own recruitment agency and solving all the usual recruitment problems.",
      icon: "/icons/experience.svg",
    },
  ],
  links: [
    { text: "Go to HR Platform ", variant: "primary" },
    { text: "Go to Freelance Platform ", variant: "secondary" },
  ],
  images: [
    "/img/optimized/focus1.jpg",
    "/img/optimized/focus2.jpg",
    "/img/optimized/focus3.jpg",
  ],
});
