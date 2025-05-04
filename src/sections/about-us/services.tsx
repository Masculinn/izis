import MotionChain from "@/components/motion/motion-chain";
import { MotionAnimationProps } from "@/components/motion/types";
import servicesLib from "@/lib/servicesLib";
import { ServiceCard } from "@/components/about-us/service-card";
import servicesMediaLib from "@/lib/services-media.lib";
import MotionText from "@/components/motion/motion-text";

const animations = servicesLib.map((_, idx) => ({
  mode: [idx % 2 === 0 ? "slideUp" : "slideDown", "depthPush", "fadeIn"],
  transition: "cubicBounce",
  duration: 0.75,
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
        Nasza firma z powodzeniem funkcjonuje na rynku usług archeologicznych
        nieprzerwanie od roku 2000. W ciągu tych ponad dwóch dekad
        zgromadziliśmy bogate doświadczenie w realizacji zarówno niewielkich,
        lokalnych projektów, jak i skomplikowanych badań terenowych o zasięgu
        oglemnokrajowym. Dzięki wykwalifikowanemu zespołowi specjalistów – w
        składźródytutów – jesteśmy w stanie kompleksowo zabezpieczyć każde
        stanowisko archeologiczne, wykonać pomiary geofizyczne, przeprowadzić
        prace wykopaliskowe oraz sporządzić szczegółowe raporty i dokumentację
        fotograficzną.
      </p>
      <div className="flex flex-row gap-4  h-auto w-full overflow-y-scroll scrollbar-hidden p-12">
        <MotionChain
          animations={animations}
          config={{
            duration: 0.33,
            delayLogic: "linear",
            isDynamicallyQueued: true,
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
