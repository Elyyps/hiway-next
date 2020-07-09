import { IVacancies } from "./vacancies";

export const vacanciesEnglishData = (): IVacancies => ({
  title: "Vacancies",
  jobs: [
    {
      name: "Front-end developer",
      time: "Full time",
      level: "Medior",
      experience: "3 years experience",
      url: "/",
    },
    {
      name: "Swift developer",
      time: "Full time",
      level: "Senior",
      experience: "4 - 6 years experience",
      url: "/",
    },
  ],
});

export const vacanciesDutchData = (): IVacancies => ({
  title: "Huidige vacatures",
  jobs: [
    {
      name: "Front-end developer",
      time: "Full time",
      level: "Medior",
      experience: "3 years experience",
      url: "/",
    },
    {
      name: "Swift developer",
      time: "Full time",
      level: "Senior",
      experience: "4 - 6 years experience",
      url: "/",
    },
  ],
});
