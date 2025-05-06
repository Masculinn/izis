import { ServiceCardProps } from "@/interfaces";
import { FaEarthEurope, FaPersonDigging } from "react-icons/fa6";
import { GiArchiveResearch } from "react-icons/gi";
import { RiSurveyLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";

export default [
  {
    id: 1,
    title: "Szeroko zakrojone badania",
    desc: "Kompleksowe badania archeologiczne łączące analizę historyczną i prace terenowe. Zapewnia pełny obraz dziedzictwa.",
    href: "/services/broad-based-research",
    icon: GiArchiveResearch,
  },
  {
    id: 2,
    title: "Profilaktyczne badania archeologiczne",
    desc: "Badania profilaktyczne prowadzone na wczesnym etapie inwestycji w celu ochrony dziedzictwa kulturowego. Obejmują inwentaryzacje, dokumentacje fotograficzne i konsultacje z ekspertami. Wykorzystują metody geofizyczne, sondowania próbne oraz analizy laboratoryjne, stanowiąc podstawę decyzji o dalszych pracach i raporty szczegół.",
    href: "/services/preventive-archaeological-research",
    icon: FaPersonDigging,
  },
  {
    id: 3,
    title: "Badania wykopaliskowe",
    desc: "Prace wykopaliskowe prowadzone ekspresowo dla ratowania unikalnych artefaktów. Zapewniają szczegółową dokumentację wykopalisk.",
    href: "/services/salvage-excavation-research",
    icon: SlMagnifier,
  },
  {
    id: 4,
    title: "Nadzór na miejscu podczas projektów robót ziemnych",
    desc: "Nadzór archeologiczny prowadzony bezpośrednio podczas prac ziemnych, gwarantujący ochronę i rejestrację odkryć. Specjaliści monitorują prace koparkami, wykonują dokumentację, pobierają próbki i podejmują decyzje w terenie, zapewniając zgodność z przepisami konserwatorskimi. Wyniki trafiają niezwłocznie.",
    href: "/services/archaeological-supervision-earthworks",
    icon: FaEarthEurope,
  },
  {
    id: 5,
    title: "Zaawansowane badania w celu weryfikacji ustaleń",
    desc: "Zaawansowane badania służące weryfikacji wcześniejszych ustaleń, obejmujące szczegółowe pomiary, analizy próbki ziemi, badania laboratoryjne i konsultacje ekspertów. Wyniki pozwalają na potwierdzenie hipotez, korektę dokumentacji oraz planowanie dalszych prac archeologicznych Uzupełnia się ją o dokumentację fotograficzną skanowanie terenu i mapę stanowiska.",
    href: "/services/survey-and-verification-research",
    icon: RiSurveyLine,
  },
] satisfies ServiceCardProps[];
