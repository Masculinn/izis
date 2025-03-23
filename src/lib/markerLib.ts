import { MarkerObjProps } from "@/interfaces";

export default [
  {
    id: 1,
    name: "Biała Park",
    desc: "Mollit velit incididunt non velit deserunt sunt dolore anim minim. Et ea sunt eu est laborum elit laborum. Elit in eiusmod sunt culpa aute duis est reprehenderit ut ea occaecat. Esse fugiat exercitation proident aute dolore ea ea.",
    type: "archaeological-supervision-earthworks",
    img: ["/assets/services/miedzyrzec-podlaski-izis.webp"],
    duration: "2 hours",
    url: "/",
    coordinates: [23.125, 52.035],
  },

  {
    id: 2,
    name: "Tuliłów",
    desc: "Sit irure Lorem deserunt minim officia proident deserunt ut. Quis officia nostrud ea est tempor pariatur reprehenderit duis officia ipsum sunt laborum consectetur. Et ullamco fugiat sint aliquip aliquip minim eu minim eu ex elit. Cupidatat duis exercitation et sunt enim ad et est deserunt nulla anim duis amet. Duis consequat ea magna Lorem dolore. Reprehenderit do sint minim laborum sint nulla irure. Cillum pariatur magna ex in est exercitation aliquip veniam eu in incididunt ipsum.",
    type: "salvage-excavation-research",
    img: ["/assets/services/tulilow-izis.webp"],
    duration: "1.5 hours",
    url: "/discoveries/tulilow",
    coordinates: [22.7504, 51.9448],
  },
  {
    id: 3,
    name: "Panieńszczyzna",
    desc: "Sunt exercitation dolor est irure cillum quis nostrud cillum aliqua consectetur. Laboris elit nostrud cillum consequat. Mollit elit do aliqua ex quis pariatur reprehenderit est non in. Nulla reprehenderit proident aliquip id incididunt deserunt sint nulla do qui pariatur cillum. Sint reprehenderit minim elit tempor nisi anim consectetur. Voluptate sint aliquip enim voluptate amet eu. Sint amet voluptate do irure culpa ex cillum deserunt fugiat.",
    type: "survey-and-verification-research",
    img: [
      "/assets/services/panienszczyzna.webp",
      "/assets/services/panienszczyzna-2-izis.webp",
    ],
    duration: "1 hour",
    url: "/discoveries/panienszczyzna",
    coordinates: [22.4353, 51.3057],
  },
  {
    id: 4,
    name: "Miedzyrzec Podlaski",
    coordinates: [22.7947, 51.8903],
    type: "salvage-excavation-research",
    desc: "Anim sit sunt cillum quis aliquip veniam nulla velit est fugiat. Enim excepteur pariatur deserunt est ullamco. Excepteur Lorem aliqua elit qui voluptate enim eiusmod labore nisi laboris mollit. Ex quis exercitation incididunt sit sit eu cillum.",
    duration: "2 hours",
    img: [
      "/assets/services/miedzyrzec-podlaski-izis.webp",
      "/assets/services/miedzyrzec-podlaski-2-izis.webp",
    ],
    url: "/discoveries/miedzyrzec-podlaski",
  },
  {
    id: 5,
    name: "Czemierniki",
    coordinates: [22.6484, 52.0508],
    desc: "Incididunt eu minim duis nisi. Enim eiusmod do ut reprehenderit officia duis pariatur ipsum irure eiusmod qui do deserunt reprehenderit. Laborum Lorem exercitation tempor anim amet mollit reprehenderit proident id ipsum proident minim. Tempor duis pariatur consequat occaecat est. Ex irure officia dolore mollit sit. Esse anim ex ut aliqua ea dolor ex culpa ullamco consectetur. Aute magna dolore magna labore excepteur laborum ullamco sint ipsum veniam velit tempor sint.",
    type: "survey-and-verification-research",
    duration: "2 hours",
    img: ["/assets/services/czemierniki-izis.webp"],
    url: "/discoveries/czemierniki",
  },
] satisfies MarkerObjProps[];
