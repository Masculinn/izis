import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import type { SlideItemProps } from "@/interfaces";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Button } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import dynamic from "next/dynamic";

const Globe = dynamic(() => import("@/components/globe"), {
  ssr: false,
});
``;

const slides: SlideItemProps[] = [
  {
    id: 1,
    title: "Guardians of Cultural Heritage",
    desc: "Professional Archaeological Services Since 1990. Velit occaecat commodo nostrud nisi aliquip. Anim ullamco et deserunt minim. Exercitation minim fugiat reprehenderit et velit",
    url: "/assets/card-1.webp",
    link: "/innovation",
  },
  {
    id: 2,
    title: "Creative Design",
    desc: "Where art meets technology",
    url: "/assets/card-2.webp",
    link: "/design",
  },
  {
    id: 3,
    title: "Future Technology",
    desc: "Shaping tomorrow's solutions",
    url: "/assets/card-3.webp",
    link: "/technology",
  },
];

export default function Hero() {
  const isMobile = useMobile();

  return (
    <section className="relative w-full h-screen ">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          scale: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000,
          waitForTransition: true,
        }}
        speed={500}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="w-full h-screen flex self-center justify-center z-20"
        style={{
          //@ts-ignore
          "--swiper-theme-color": "#fff",
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-[80%] h-[70vh]">
            <div className="relative w-full h-full overflow-hidden group">
              <img
                src={slide.url}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent items-center justify-center flex">
                <div className="lg:justify-center flex flex-col  lg:px-0 px-8 lg:text-center">
                  <h2 className="lg:text-6xl text-4xl font-bold text-white lg:mb-4 mb-2 font-secondary tracking-tight">
                    {slide.title}
                  </h2>
                  <p className="lg:text-base text-sm tracking-tight text-gray-200 lg:mb-6 mb-4 lg:max-w-3xl max-w-2xs ">
                    {slide.desc}
                  </p>
                  <Button
                    intent="primary"
                    shape="circle"
                    size={isMobile ? "medium" : "large"}
                    className=" lg:self-center tracking-tighter"
                  >
                    Explore the latest articles <ArrowUpRight />
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
