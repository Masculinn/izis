import { TeamCard } from "@/components/about-us/team-card";
import MotionChain from "@/components/motion/motion-chain";
import { MotionAnimationProps } from "@/components/motion/types";
import teamLib from "@/lib/team.lib";

const animations = teamLib.map((_, idx) => ({
  mode: [idx % 2 === 0 ? "slideUp" : "slideDown", "depthPush", "fadeIn"],
  transition: "cubicBounce",
  duration: 0.75,
})) as MotionAnimationProps[];

export const Team = () => {
  return (
    <section className="max-w-7xl mx-auto relative h-auto md:px-0 px-8 md:mt-24 mt-20">
      <h2 className="text-6xl md:text-7xl tracking-tighter font-secondary md:pb-8 pb-6 text-center">
        Nasz zespół
      </h2>
      <p className="pb-6 lg:text-lg text-muted-fg text-md font-secondary font-semibold tracking-tight text-center justify-self-center md:max-w-5xl">
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
      <div className="flex md:flex-row flex-col gap-4 md:h-96 h-fit w-full">
        <MotionChain
          animations={animations}
          config={{
            duration: 0.33,
            delayLogic: "linear",
            isDynamicallyQueued: true,
          }}
          elementType={"div"}
          className="size-full relative"
        >
          {teamLib.map((val, idx) => (
            <TeamCard {...val} key={idx} />
          ))}
        </MotionChain>
      </div>
    </section>
  );
};
