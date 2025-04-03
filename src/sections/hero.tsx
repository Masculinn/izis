import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import type { SlideItemProps } from "@/interfaces";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { Button } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { HeroDivider } from "@/components/hero-divider";
import Link from "next/link";
import MotionContainer from "@/components/motion-provider/motion-container";
import MotionQueue from "@/components/motion-provider/motion-queue";

const slides: SlideItemProps[] = [
  {
    id: 1,
    title: "Guardians of Cultural Heritage",
    desc: "Professional Archaeological Services Since 1990. Velit occaecat commodo nostrud nisi aliquip. Anim ullamco et deserunt minim. Exercitation minim fugiat reprehenderit et velit",
    url: "/assets/card-1.webp",
    link: "/discoveries",
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
        speed={1000}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full h-screen flex self-center justify-center z-20"
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
                  <MotionContainer
                    elementType="h2"
                    mode={["fadeIn", "filterBlurIn"]}
                    className="lg:text-6xl text-4xl font-bold text-white lg:mb-4 mb-2 font-secondary tracking-tight"
                    delay={0}
                    configView={{
                      once: false,
                      amount: 0.5,
                    }}
                    duration={1}
                    transition="smooth"
                  >
                    {slide.title}
                  </MotionContainer>
                  <p className="lg:text-base text-sm tracking-tight text-gray-200 lg:mb-6 mb-4 lg:max-w-3xl max-w-2xs ">
                    {slide.desc}
                  </p>
                  <Link href={slide.link} className="hidden lg:block">
                    <Button
                      intent="primary"
                      shape="circle"
                      size={isMobile ? "medium" : "large"}
                      className=" lg:self-center tracking-tighter"
                    >
                      Explore the latest discoveries <ArrowUpRight />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <HeroDivider />
    </section>
  );
}
