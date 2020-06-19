import { IPresentation } from "./presentation";

export const presentationHrData = (): IPresentation => ({
  title: "Discover Hiway in 90 seconds",
  content:
    "Would you like to get a small impression of what the platform could mean for you company? Take a look at a small video animation we made to showcase the HR platform and it’s functionality. Not sure yet? Don’t hesitate to contact us for a live demo!",
  video: "/img/optimized/video.jpg",
  videoTitle: {
    text: "Introduction to the HR platform",
    url: "https://www.youtube.com/watch?v=UsvLF3ZNxSI",
  },
  icon: "/icons/play.svg",
});
export const presentationFreelanceData = (): IPresentation => ({
  title: "Discover Hiway in 90 seconds",
  content:
    "Check out the explainer video we. made for this project. It gives a short impression of why this project was started and were we see this solution be relevant.",
  video: "/img/optimized/video.jpg",
  videoTitle: {
    text: "Introduction to the Freelance platform",
    url: "https://www.youtube.com/watch?v=UsvLF3ZNxSI",
  },
  icon: "/icons/play.svg",
  beta: "This software is a proof of concept and not yet a first version.",
});
