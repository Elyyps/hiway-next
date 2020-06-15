import { IContact } from "./contact";

export const contactData = (): IContact => ({
  title: "Contact",
  description:
    "Fill in the form below and click on ’send message”. \nOur team will get back to you as soon as possible!",
  subTitle: "Hiway office",
  address: "Kerkenbos 1075-V \n 6546 BB Nijmegen",
  phoneNumber: "+31(0) 88 711 3333",
  email: "info@hiway.io",
  mapImage: "/img/optimized/map.png",
});
