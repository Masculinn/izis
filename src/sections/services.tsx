import MotionText from "@/components/motion/motion-text";
import { ServicesGrid } from "@/components/services-grid";

export default function Services() {
  return (
    <section className="lg:py-24 py-16 h-auto w-full relative overflow-hidden text-center flex flex-col items-center justify-center mx-auto max-w-7xl">
      <MotionText
        animation={{
          mode: ["filterBlurIn", "fadeUp"],
          transition: "smooth",
          duration: 0.5,
        }}
        config={{
          duration: 0.24,
          mode: "words",
          delayLogic: "linear",
          space: 1,
        }}
        elementType="h2"
        wrapperClassName="font-secondary lg:text-6xl text-4xl font-bold justify-self-center pb-8 text-center"
      >
        Nasze usługi.
      </MotionText>
      <ServicesGrid />
    </section>
  );
}
