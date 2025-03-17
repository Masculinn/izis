import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "motion/react";
import type { SlideItemProps } from "@/interfaces";
import { BsArrowRight } from "react-icons/bs";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const slides: SlideItemProps[] = [
  {
    id: 1,
    title: "Digital Innovation",
    description: "Transforming ideas into digital reality",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    link: "/innovation",
  },
  {
    id: 2,
    title: "Creative Design",
    description: "Where art meets technology",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "/design",
  },
  {
    id: 3,
    title: "Future Technology",
    description: "Shaping tomorrow's solutions",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    link: "/technology",
  },
];

export default function Hero() {
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
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination]}
        className="w-full h-screen flex self-center justify-center "
        style={{
          //@ts-ignore
          "--swiper-theme-color": "#fff",
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
      >
        <AnimatePresence>
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="w-[80%] h-[70vh]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="relative w-full h-full  overflow-hidden group"
              >
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <motion.h2
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      className="text-4xl font-bold text-white mb-4"
                    >
                      {slide.title}
                    </motion.h2>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-lg text-gray-200 mb-6"
                    >
                      {slide.description}
                    </motion.p>
                    <motion.a
                      href={slide.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-medium 
                               hover:bg-gray-100 transition-colors group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Learn More
                      <BsArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </AnimatePresence>
      </Swiper>
    </section>
  );
}
