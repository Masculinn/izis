import MotionChain from "@/components/motion/motion-chain";
import { MotionAnimationProps } from "@/components/motion/types";
import servicesLib from "@/lib/servicesLib";
import { ServiceCard } from "@/components/about-us/service-card";
import servicesMediaLib from "@/lib/services-media.lib";
import MotionText from "@/components/motion/motion-text";

const animations = servicesLib.map((_) => ({
  mode: ["fadeIn", "filterBlurIn"],
  transition: "cubicBounce",
  duration: 1,
})) as MotionAnimationProps[];

export const Services = () => {
  return (
    <section className="max-w-7xl mx-auto relative h-auto md:px-0 px-8 mt-8">
      <MotionText
        animation={{
          mode: ["filterBlurIn", "fadeUp"],
          transition: "linear",
        }}
        config={{
          duration: 0.24,
          mode: "words",
          delayLogic: "linear",
          space: 1,
        }}
        elementType={"h2"}
        wrapperClassName="text-6xl md:text-7xl tracking-tighter font-secondary md:pb-8 pb-6 text-center justify-self-center"
      >
        Nasze usługi
      </MotionText>
      <p className="pb-6 lg:text-lg text-muted-fg text-md font-secondary font-semibold tracking-tight text-center md:max-w-5xl justify-self-center">
        W naszej codziennej pracy koncentrujemy się na dostarczaniu
        kompleksowych usług archeologicznych dostosowanych do indywidualnych
        potrzeb inwestycji i wymogów formalnych. Oferujemy pełne wsparcie na
        każdym etapie procesu — od badań wstępnych po nadzór i dokumentację
        końcową. Nasze doświadczenie, zdobywane przez ponad dwie dekady
        działalności, pozwala nam działać sprawnie i odpowiedzialnie w różnych
        warunkach terenowych.
      </p>
      <div className="flex flex-row lg:gap-4 md:h-auto h-fit w-full overflow-y-scroll scrollbar-hidden lg:p-12 px-0 mx-0">
        <MotionChain
          animations={animations}
          config={{
            duration: 0.33,
            delayLogic: "linear",
          }}
          elementType={"div"}
          className="size-full relative h-96"
        >
          {servicesLib.map((val, idx) => (
            <ServiceCard {...val} img={servicesMediaLib[idx]} key={idx} />
          ))}
        </MotionChain>
      </div>
    </section>
  );
};
