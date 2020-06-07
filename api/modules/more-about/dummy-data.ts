import { IMoreAbout } from "./more-about";

export const moreAboutData = (): IMoreAbout => ({
  title: "More about what we do",
  link: { text: "Medium" },
  icon: "/icons/medium.svg",
  cards: [
    {
      image: "/img/optimized/medium1.jpg",
      link: { text: "Full article on Medium" },
      title:
        "Connecting the Blockchain skilled workforce: An Interview with the Founders of Hiway — The blockchain tailored marketplace for work",
    },
    {
      image: "/img/optimized/medium2.jpg",
      link: { text: "Full article on Medium" },
      title: "Remote Collaboration and the Intellectual Property",
    },
    {
      image: "/img/optimized/medium3.jpg",
      link: { text: "Full article on Medium" },
      title:
        "Artificial Intelligence and the Blockchain in job recruitment and employment",
    },
  ],
});
