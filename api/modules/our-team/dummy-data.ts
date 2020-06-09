import { IOurTeam } from "./our-team";

export const ourTeamData = (): IOurTeam => ({
  title: "Our team",
  members: [
    { name: "Simon Rikmenspoel", position: "Ceo" },
    { name: "Thale Sonnemans", position: "Creative Director" },
    { name: "Jakko Bloemena", position: "Head of Product" },
    { name: "Wout Brink", position: "Head of Sales" },
    { name: "Tijs Gietman", position: "Developer" },
    { name: "Albert Li", position: "Developer" },
  ],
});
