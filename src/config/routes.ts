import { RouteItemProps } from "@/interfaces";
import newsLib from "@/lib/newsLib";

export default [
  {
    src: "/about-us",
    title: "O nas",
  },

  {
    src: "/discoveries",
    title: "Odkrywane rzeczy",
  },
  {
    src: "/contact",
    title: "Kontakt",
  },
  {
    src: "/services",
    title: "Nasze Usługi",
    items: [
      {
        desc: "Kompleksowe badania integrujące historię i badania terenowe.",
        src: "/services/broad-based-research",
        title: "Szeroko zakrojone badania",
      },
      {
        desc: "Wczesne badania w celu ochrony dziedzictwa kulturowego.",
        src: "/services/preventive-archaeological-research",
        title: "Profilaktyczne badania archeologiczne",
      },
      {
        desc: "Szybkie wykopaliska w celu ratowania zagrożonych artefaktów.",
        src: "/services/salvage-excavation-research",
        title: "Badania wykopaliskowe",
      },
      {
        desc: "Nadzór na miejscu podczas projektów robót ziemnych.",
        title: "Nadzór archeologiczny - prace ziemne",
        src: "/services/archaeological-supervision-earthworks",
      },
      {
        desc: "Zaawansowane badania w celu weryfikacji ustaleń.",
        title: "Badania ankietowe i weryfikacyjne",
        src: "/services/survey-and-verification-research",
      },
    ],
  },
  {
    src: "/izis-media-press",
    title: "Prasa o nas",
    items: newsLib
      .filter((item) => item.id >= Math.floor(newsLib.length / 2))
      .map((val) => ({
        desc: `${val.subHeader.slice(0, 75)}...`,
        src: val.url,
        title: val.title,
      })),
  },
] as RouteItemProps[];
