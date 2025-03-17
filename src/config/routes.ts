import { RouteItemProps } from "@/interfaces";
import { Info, Briefcase, Newspaper, Phone } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import { MdArticle } from "react-icons/md";

export default [
  {
    src: "/about-us",
    title: "About Us",
    icon: Info,
  },
  {
    src: "/services",
    title: "Services",
    items: [
      {
        desc: "Digital Innovation",
        src: "/innovation",
        title: "Digital Innovation",
        icon: Phone,
      },
      {
        desc: "Creative Design",
        src: "/design",
        title: "Creative Design",
        icon: Phone,
      },
      {
        desc: "Future Technology",
        src: "/technology",
        title: "Future Technology",
        icon: Phone,
      },
    ],
    icon: Briefcase,
  },
  {
    src: "/discoveries",
    title: "Discoveries",
    icon: Newspaper,
  },
  {
    src: "/articles",
    title: "Articles",
    icon: MdArticle,
  },
  {
    src: "/referances",
    title: "Referances",
    icon: GoArrowUpRight,
    items: [
      {
        desc: "Digital Innovation",
        src: "/innovation",
        title: "Digital Innovation",
        icon: Phone,
      },
      {
        desc: "Creative Design",
        src: "/design",
        title: "Creative Design",
        icon: Phone,
      },
      {
        desc: "Future Technology",
        src: "/technology",
        title: "Future Technology",
        icon: Phone,
      },
    ],
  },
  {
    src: "/izis-media-press",
    title: "Izis Media Press",
    icon: GoArrowUpRight,
    items: [
      {
        desc: "Digital Innovation",
        src: "/innovation",
        title: "Digital Innovation",
        icon: Phone,
      },
      {
        desc: "Creative Design",
        src: "/design",
        title: "Creative Design",
        icon: Phone,
      },
      {
        desc: "Future Technology",
        src: "/technology",
        title: "Future Technology",
        icon: Phone,
      },
    ],
  },
] as RouteItemProps[];
