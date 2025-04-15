import MotionContainer from "@/components/motion/motion-container";
import MotionText from "@/components/motion/motion-text";
import { ServicesGrid } from "@/components/services-grid";

export default function Services() {
  return (
    <section className="py-24 h-auto w-full relative overflow-hidden items-center justify-center mx-auto  max-w-7xl">
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
        }}
        elementType="h2"
        wrapperClassName="font-secondary lg:text-6xl text-4xl font-bold justify-self-center pb-8"
      >
        Nasze usługi.
      </MotionText>
      <ServicesGrid />
    </section>
  );
}
