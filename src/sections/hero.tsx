import "swiper/css";
import "swiper/css/effect-coverflow";

import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import slidesLib from "@/lib/slides.lib";

import { EffectCoverflow, Autoplay } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Badge, Button, Skeleton } from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { HeroDivider } from "@/components/hero-divider";

import MotionText from "@/components/motion/motion-text";

// deactivated for faster DOM load while developing.
// const Swiper = dynamic(() => import("swiper/react").then((m) => m.Swiper), {
//   ssr: false,
//   loading: () => (
//     <Skeleton
//       soft
//       className="w-full h-screen flex self-center justify-center z-20"
//     />
//   ),
// });

export default function Hero() {
  const isMobile = useMobile();
  // Świętujemy nasze 25-lecie!

  return (
    <section className="relative w-full h-screen">
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
          delay: 5000,
          waitForTransition: true,
        }}
        lazyPreloadPrevNext={slidesLib.length}
        speed={1000}
        modules={[EffectCoverflow, Autoplay]}
        className="w-full h-screen flex self-center justify-center z-20"
        aria-label="izis hero section"
      >
        {slidesLib.map((slide) => (
          <SwiperSlide key={slide.id} className="w-[80%] h-[70vh]">
            <div className="relative size-full overflow-hidden group">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                quality={75}
                priority={slide.id === 1}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent grid place-items-center">
                <div className="lg:justify-center flex flex-col lg:px-0 px-8 lg:text-center lg:items-center">
                  {slide.id === 1 && (
                    <div
                      // intent="secondary"
                      className="mb-2 lg:mb-4 flex w-fit items-center gap-2 z-50 bg-secondary"
                    >
                      Świętujemy nasze{" "}
                      <span className="font-bold">25-lecie</span> 🎉
                    </div>
                  )}
                  <MotionText
                    animation={{
                      mode: ["fadeIn", "filterBlurIn"],
                      transition: "smooth",
                      delay: 1,
                      duration: 1,
                    }}
                    config={{
                      duration: 0.5,
                      mode: isMobile ? "words" : "chars",
                      delayLogic: "sawtooth",
                    }}
                    elementType={"h2"}
                    wrapperClassName="lg:text-6xl text-4xl font-bold text-white lg:mb-4 mb-2 font-secondary tracking-tight"
                    controller={{
                      configView: {
                        amount: "some",
                        once: false,
                      },
                    }}
                  >
                    {slide.title}
                  </MotionText>
                  <p className="lg:text-base text-sm tracking-tight text-gray-200 lg:mb-6 mb-4 lg:max-w-3xl lg:mx-auto max-w-2xs">
                    {slide.desc}
                  </p>
                  <Link href={slide.href} className="hidden lg:block">
                    <Button
                      intent="primary"
                      shape="circle"
                      size={isMobile ? "medium" : "large"}
                      className="lg:self-center tracking-tighter"
                    >
                      {slide.btnText} <ArrowUpRight />
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
