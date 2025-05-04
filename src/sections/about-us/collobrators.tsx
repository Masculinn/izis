import MotionChain from "@/components/motion/motion-chain";
import MotionContainer from "@/components/motion/motion-container";
import MotionText from "@/components/motion/motion-text";
import { MotionAnimationProps } from "@/components/motion/types";
import { Button, Card } from "@/components/ui";
import { useMobile } from "@/hooks/use-mobile";
import collobratorsLib from "@/lib/collobratorsLib";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const animations = collobratorsLib.map((_, idx) => ({
  mode: [idx % 2 === 0 && "filterInvertColors", "fadeDown"],
  transition: "smooth",
  duration: 0.5,
})) as MotionAnimationProps[];

export const Collobrators = () => {
  const isMobile = useMobile();

  return (
    <section className="max-w-7xl mx-auto relative min-h-auto md:px-0 px-4 md:mt-16 mt-8">
      <MotionText
        animation={{
          mode: ["fadeLeft", "filterBlurIn"],
          transition: "smooth",
          duration: 0.5,
        }}
        elementType={"h2"}
        config={{
          mode: "chars",
          duration: 0.18,
          delayLogic: "custom",
          customLogic: (index) => index * 0.085,
        }}
        className=""
        wrapperClassName="text-5xl md:text-6xl tracking-tighter font-secondary text-center pb-2 max-w-[85%] md:max-w-5/6 flex mx-auto  items-center justify-center tracking-tighter font-secondary pb-4"
      >
        Współpracujemy z naukowcami
      </MotionText>
      <p className="md:text-lg text-muted-fg text-md font-secondary font-semibold tracking-tight text-center md:max-w-3xl max-w-md flex mx-auto">
        Łączymy siły z wiodącymi ośrodkami badawczymi z całej Polski – od
        archeologii po geologię – aby wspólnie realizować interdyscyplinarne
        projekty, pogłębiać wiedzę o przeszłości i chronić dziedzictwo
        kulturowe.
      </p>
      <div className="flex flex-wrap gap-4 mt-8 w-full items-center justify-center">
        <MotionChain
          elementType={"div"}
          config={{
            duration: !isMobile ? 0.5 : 1.22,
            delayByElement: isMobile ? 0 : undefined,
            customLogic: !isMobile ? undefined : (index) => index * 0.25,
            delayLogic: "triangle",
          }}
          className="w-full md:w-1/4 shrink-0 md:h-96 h-auto relative group md:hover:-translate-y-2 md:duration-200"
          animations={animations}
        >
          {collobratorsLib.map((item, idx) => (
            <Card key={idx} className="size-full relative flex flex-col">
              <MotionContainer
                animation={{
                  mode: ["filterBlurIn", idx % 2 === 0 ? "fadeUp" : "fadeDown"],
                  transition: "smooth",
                  duration: 0.5,
                }}
                elementType="div"
                className="size-full absolute bottom-0 right-0 group overflow-hidden"
              >
                <MotionContainer
                  animation={{
                    mode: ["fadeIn"],
                    transition: "smooth",
                    duration: 1,
                  }}
                  className="rounded-full size-36 bg-gradient-to-br from-primary to-secondary absolute -top-16 -right-16"
                  controller={{
                    trigger: true,
                  }}
                  elementType={"div"}
                />
              </MotionContainer>
              <Card.Header className="z-50">
                <Card.Title className="font-secondary md:text-xl text-2xl ">
                  {item.title}
                </Card.Title>
                <Card.Description>{item.desc}</Card.Description>
              </Card.Header>
              <Card.Footer className="mt-auto">
                <Link
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full" intent="secondary">
                    Wiecej <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </Card.Footer>
            </Card>
          ))}
        </MotionChain>
      </div>
    </section>
  );
};
