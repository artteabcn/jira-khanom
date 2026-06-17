import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  name: "Bottega Jira",
  slug: "jira-khanom",
  timezone: "Asia/Bangkok",
  defaultLocale: "en",
  theme: "baroque-dark",
  fonts: {
    display: "'Cormorant Garamond', serif",
    body: "'EB Garamond', serif",
    googleFontsUrl: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap",
  },
  contact: {
    whatsapp: "+66 90 249 0306",
    whatsappDisplay: "+66 90 249 0306",
    socialType: "facebook",
    socialHandle: "Bottega Jira",
    socialUrl: "https://www.facebook.com/people/BottegaJira/100075544497990/",
    address: "Main Road Khanom",
    mapsLat: 9.1845236,
    mapsLng: 99.8574613,
  },
  hours: {
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: {"open":"12:00","close":"00:00"},
    saturday: {"open":"12:00","close":"00:00"},
    sunday: {"open":"12:00","close":"00:00"},
  },
  menuMode: "both",
  images: {
    logo: "/images/logo.svg",
    menu: ["/images/menu1.jpeg","/images/menu2.jpeg","/images/menu3.jpeg","/images/menu4.jpeg","/images/menu5.jpeg"],
  },
};
