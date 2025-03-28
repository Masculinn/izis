import { RouteItemProps } from "@/interfaces";

export default [
  {
    src: "/about-us",
    title: "About Us",
  },

  {
    src: "/discoveries",
    title: "Discoveries",
  },
  {
    src: "/contact",
    title: "Contact",
  },
  {
    src: "/services",
    title: "Services",
    items: [
      {
        desc: "Comprehensive research integrating history and field surveys.",
        src: "/services/broad-based-research",
        title: "Broad-based research",
      },
      {
        desc: "Early investigations to protect cultural heritage.",
        src: "/services/preventive-archaeological-research",
        title: "Preventive archaeological research",
      },
      {
        desc: "Rapid excavations to rescue at-risk artifacts.",
        src: "/services/salvage-excavation-research",
        title: "Salvage excavation research",
      },
      {
        desc: "On-site supervision during earthwork projects.",
        title: "Archaeological Supervision - Earthworks",
        src: "/services/archaeological-supervision-earthworks",
      },
      {
        desc: "Advanced surveys to verify findings.",
        title: "Survey And Verification Research",
        src: "/services/survey-and-verification-research",
      },
    ],
  },
  {
    src: "/izis-media-press",
    title: "Izis Media Press",
    items: [
      {
        desc: "Digital Innovation",
        src: "/innovation",
        title: "Digital Innovation",
      },
      {
        desc: "Creative Design",
        src: "/design",
        title: "Creative Design",
      },
      {
        desc: "Future Technology",
        src: "/technology",
        title: "Future Technology",
      },
    ],
  },
] as RouteItemProps[];
