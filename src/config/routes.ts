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
    src: "/articles",
    title: "Articles",
  },
  {
    src: "/services",
    title: "Services",
    items: [
      {
        desc: "Comprehensive research integrating history and field surveys.",
        src: "/broad-based-research",
        title: "Broad-based research",
      },
      {
        desc: "Early investigations to protect cultural heritage.",
        src: "/preventive-archaeological-research",
        title: "Preventive archaeological research",
      },
      {
        desc: "Rapid excavations to rescue at-risk artifacts.",
        src: "/salvage-excavation-research",
        title: "Salvage excavation research",
      },
      {
        desc: "On-site supervision during earthwork projects.",
        title: "Archaeological Supervision - Earthworks",
        src: "/archaeological-supervision-earthworks",
      },
      {
        desc: "Advanced surveys to verify findings.",
        title: "Survey And Verification Research",
        src: "/survey-and-verification-research",
      },
    ],
  },
  {
    src: "/referances",
    title: "Referances",
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
