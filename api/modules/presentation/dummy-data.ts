import { IPresentation } from "./presentation";

export const presentationHrData = (): IPresentation => ({
  title: "Discover Hiway in 90 seconds",
  content:
    "Would you like to further understand how the platform could help your company? Check out this video that dives deeper on the platform and its functionality. Alternatively, contact us for a live demo.",
  video: "/img/optimized/video.jpg",
  videoTitle: {
    text: "Introduction to the HR platform",
    url: "https://www.youtube.com/watch?v=73IUC7dxtR0&feature=youtu.be",
  },
  icon: "/icons/play.svg",
});
export const presentationFreelanceData = (): IPresentation => ({
  title: "Discover Hiway in 90 seconds",
  content:
    "Learn more about why this project was started and where we see this solution being relevant.",
  video: "/img/optimized/video.jpg",
  videoTitle: {
    text: "Introduction to the Freelance platform",
    url: "https://www.youtube.com/watch?v=qsVlGXfeOog&feature=youtu.be",
  },
  icon: "/icons/play.svg",
  beta: "This software is a proof of concept and not yet a first version.",
});
