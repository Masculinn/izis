import { ServiceCardProps } from "@/interfaces";
import { FaEarthEurope, FaPersonDigging } from "react-icons/fa6";
import { GiArchiveResearch } from "react-icons/gi";
import { RiSurveyLine } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";

export default [
  {
    id: 1,
    title: "Broad-based research",
    btnText: "Learn More",
    desc: "Comprehensive research integrating history and field surveys. Fugiat ex quis velit nisi pariatur dolor magna irure.",
    href: "/services/broad-based-research",
    icon: GiArchiveResearch,
  },
  {
    id: 2,
    title: "Preventive archaeological research",
    btnText: "Learn More",
    desc: "Early investigations to protect cultural heritage. Fugiat dolore eu voluptate duis officia ipsum ullamco. Tempor labore dolore sit incididunt.  Fugiat dolore eu voluptate duis officia ipsum ullamco. Tempor labore dolore sit incididunt.  Fugiat dolore eu voluptate duis officia ipsum ullamco. Tempor labore dolore sit incididunt.",
    href: "/services/preventive-archaeological-research",
    icon: FaPersonDigging,
  },
  {
    id: 3,
    title: "Salvage excavation research",
    btnText: "Learn More",
    desc: "Rapid excavations to rescue at-risk artifacts. Voluptate magna ad est labore minim culpa. Excepteur quis proident in commodo aute.",
    href: "/services/salvage-excavation-research",
    icon: SlMagnifier,
  },
  {
    id: 4,
    title: "On-site supervision during earthwork projects",
    btnText: "Learn More",
    desc: "On-site supervision during earthwork projects. Fugiat dolore eu voluptate duis officia ipsum ullamco. Tempor labore dolore sit incididunt.  Voluptate magna ad est labore minim culpa. Excepteur quis proident in commodo aute. Excepteur quis proident in commodo aute. Excepteur quis proident in commodo aute.",
    href: "/services/archaeological-supervision-earthworks",
    icon: FaEarthEurope,
  },
  {
    id: 5,
    title: "Advanced surveys to verify findings",
    btnText: "Learn More",
    desc: "Advanced surveys to verify findings. Fugiat dolore eu voluptate duis officia ipsum ullamco. Tempor labore dolore sit incididunt. Ullamco ullamco in nostrud in mollit. Consectetur non aute do labore qui ad non eiusmod reprehenderit do ex. Aliquip magna non pariatur non laboris. Ullamco id mollit consectetur sit exercitation adipisicing pariatur est minim sit.",
    href: "/services/survey-and-verification-research",
    icon: RiSurveyLine,
  },
] satisfies ServiceCardProps[];
