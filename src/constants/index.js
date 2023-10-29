import {
  facebook,
  shield,
  star,
  phone,
  mail,
  calendar,
  person,
} from "../assets";

export const phoneNumber = {
  visibleNumber: "+48 726 890 920",
  hiddenNumber: "+48726890920",
};

export const navLinks = [
  {
    id: "o-firmie",
    title: "O firmie",
  },
  {
    id: "oferta",
    title: "Oferta",
  },
  {
    id: "realizacje",
    title: "Realizacje",
  },
  {
    id: "kontakt",
    title: "Kontakt",
  },
];

export const contactDetails = [
  {
    id: "contact-1",
    icon: phone,
    content: phoneNumber.visibleNumber,
    contentType: "callto",
  },
  {
    id: "contact-2",
    icon: mail,
    content: "paweltsa@gmail.com",
    contentType: "mailto",
  },
];

export const offers = [
  "szpachlowanie",
  "malowanie",
  "tynkowanie sufitów podwieszanych, jedno lub wielopoziomowych z kartonu gipsu",
  "ściany działowe z kartonu gipsu",
  "przeróbki elektryczne oraz montaż nowych punktów elektrycznych",
  "układanie paneli",
  "kładzenie płytek",
  "tynki dekoracyjne",
  "układanie kamienia dekoracyjnego",
  "montaż listew przypodłogowych PCV, drewnianych, MDF",
  "montaż mebli IKEA, Agata Meble, BRW i innych producentów",
  "montaż lamp i karniszy",
  "transport materiałów i sprzątanie po remoncie",
];

export const advantages = [
  {
    id: "advantage-1",
    icon: shield,
    title: "Doświadczenie",
    content:
      "To długoletnia praktyka i ciągłe doskonalenie moich umiejętności sprawiają, że jestem gotów sprostać nawet najbardziej wymagającym projektom.",
  },
  {
    id: "advantage-2",
    icon: star,
    title: "Jakość",
    content:
      "Moje usługi to synonim najwyższej jakości, gdzie precyzja, staranność, i dbałość o detale stanowią fundament każdego projektu.",
  },
  {
    id: "advantage-3",
    icon: person,
    title: "Indywidualne podejście",
    content:
      "Każde zlecenie traktuję indywidualnie i dbam o najmniejszy szczegół, tak aby moi Klienci byli w pełni usatysfakcjonowani.",
  },
  {
    id: "advantage-4",
    icon: calendar,
    title: "Terminowość",
    content:
      "Wszelkie prace wykonuję zgodnie z ustalonymi terminami, co stanowi kluczowy element mojego profesjonalizmu i dbałości o Twój czas.",
  },
];

export const realizations = [
  {
    id: "1",
    url: "1.jpg",
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "LAT W BRAŻY",
    value: "12",
  },
  {
    id: "stats-2",
    title: "WYKONANYCH PROJEKTÓW",
    value: "100+",
  },
];

export const socialMedia = [
  /*{
    id: "social-media-1",
    icon: facebook,
    link: "https://www.facebook.com/",
  },*/
];
