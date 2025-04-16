import MotionText from "@/components/motion/motion-text";
import { Badge, Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { MdFormatQuote } from "react-icons/md";

export default function HighlightedCta() {
  return (
    <section className="py-14 lg:h-[88vh] h-auto w-full relative overflow-hidden items-center justify-center mx-auto max-w-7xl">
      <div className="size-full items-center justify-center flex lg:flex-row flex-col-reverse lg:gap-8 gap-4 lg:px-0 px-6">
        <div className="lg:w-1/2 w-full h-[300px] lg:h-3/4 bg-yellow-300 relative rounded-2xl z-10">
          <div className="absolute top-0 left-0 size-full bg-gradient-to-t from-black/80 to-transparent z-30 rounded-2xl items-end flex">
            <div className="w-full h-auto z-50 lg:p-8 p-6 text-white  ">
              <blockquote className="text-lg font-secondary font-bold">
                Mieczysław Bienia
              </blockquote>
              <span className="text-sm font-secondary">
                IZIS | Header Of Opearations
              </span>
              <p className="text-sm mt-4 italic flex items-center gap-1">
                <MdFormatQuote className="size-4 rotate-180" />
                <span>
                  Archeolog Mieczysław Bienia znalazł w okolicy Garwolina kły i
                  kości.
                </span>
                <MdFormatQuote className="size-4" />
              </p>{" "}
            </div>
          </div>
          <Image
            alt="izis-media-mamut-na-drodze"
            src="/assets/media-press/izis-media-mamut-na-drodze.webp"
            fill
            sizes="100vw"
            className="object-cover object-top rounded-2xl"
          />
        </div>
        <div className="lg:w-1/2 w-full h-auto lg:h-3/4 rounded-2xl lg:p-6 px-4 lg:mb-0 justify-center flex flex-col mb-8">
          <Badge intent="info" className="shrink-0 max-w-max">
            <span className="size-3  animate-pulse rounded-full bg-sky-500/50" />
            <MotionText
              animation={{
                mode: ["fadeIn", "filterBlurIn"],
                transition: "smooth",
                duration: 0.5,
              }}
              config={{
                duration: 0.15,
                mode: "chars",
                delayLogic: "linear",
                space: 1,
              }}
              elementType={"span"}
              className="-ml-[0.25px]"
            >
              Featured Post
            </MotionText>
          </Badge>
          <MotionText
            animation={{
              mode: ["fadeIn", "filterBlurIn"],
              transition: "smooth",
              duration: 0.5,
            }}
            elementType={"h2"}
            config={{
              mode: "words",
              duration: 0.5,
              delayLogic: "linear",
            }}
            wrapperClassName="font-secondary lg:text-7xl text-5xl font-bold"
          >
            Mamut na drodze
          </MotionText>
          <p className="mt-4 tracking-tight font-secondary">
            Archeolog Mieczysław Bienia znalazł w okolicy Garwolina kły i kości
            mamuta. Wraz ze swoją ekipą w trakcie wykopalisk przed budową
            obwodnicy miasta natrafił na ponad 20 cennych kości. Były tam
            fragmenty mamucich kłów o długości 80-90 cm. Niedaleko znajdowały
            się prawie metrowe kości udowe i czaszka słonia leśnego oraz
            mniejsze kości renifera. Te znaleziska zebrano na obszarze liczącym
            prawie 4 ha.
          </p>
          <Button intent="secondary" shape="circle" className="mt-6 shrink-0 ">
            <span>Wiecej informacji </span>
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
