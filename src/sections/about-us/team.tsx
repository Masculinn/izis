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
        Nasz zespół tworzą doświadczeni specjaliści, a fundamentem naszej
        działalności są założyciele – Małgorzata i Mieczysław Bienia. Od ponad
        dwóch dekad wspólnie budujemy jakość i wiarygodność naszych usług
        archeologicznych. Małgorzata odpowiada za finanse, administrację oraz
        współpracę z partnerami projektów, zapewniając przejrzystość i
        efektywność działań operacyjnych. Mieczysław, jako główny archeolog,
        kieruje badaniami terenowymi i analizami specjalistycznymi, osobiście
        nadzorując przebieg prac wykopaliskowych. Dzięki ich zaangażowaniu i
        wiedzy możemy realizować nawet najbardziej wymagające projekty.
      </p>
      <center>
        <div className="flex md:flex-row flex-col gap-4 md:h-96 h-fit w-full md:max-w-3/4">
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
      </center>
    </section>
  );
};
