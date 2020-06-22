import { IOurFocus } from "./our-focus";

export const ourFocusData = (): IOurFocus => ({
  descriptions: [
    {
      title: "Experts in work",
      content:
        "At Hiway, we focus on work. Empowering HR managers, recruiters and job seekers to do the best work they can, while our team draws on their extensive experience to build for the future. From running our own agency, we found numerous ways to improve the process of sourcing, matching and managing candidates and vacancies. With that in mind, we specialise in the HR industry with an emphasis on the employer side of running a small to medium-size enterprise. We help job seekers find work and support employers with all their HR needs.",
    },
    {
      title: "Experts in technology",
      content:
        "At the same time, we are fascinated by technological advancements, which led us to start experimenting with technologies like blockchain and artificial intelligence. Our strong team with a passion for development draw on years of technical experience to create solutions and tools for every HR challenge found within the industry. Check out our first two products: Hiway HR platform and Hiway freelance platform.",
    },
  ],
  descriptionCards: [
    {
      title: "Recruitment specialists",
      content:
        " More than 15 years of industry experience, contributing to a robust understanding of every aspect of the recruitment process",
      icon: "/icons/dev.svg",
    },
    {
      title: "Data-driven innovators",
      content:
        "Blockchain, artificial intelligence and machine learning enthusiasts, harnessing the latest developments to inform new solutions",
      icon: "/icons/focus.svg",
    },
    {
      title: "Creative entrepreneurs",
      content:
        "Ongoing experimentation and collaboration fuelled by an entrepreneurial spirit",
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
