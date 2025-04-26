import { AboutUsDivider } from "@/components/about-us-divider";
import { VideoPlayer } from "@/components/about-us/video-player";
import { useAnimation } from "@/components/motion/hooks/use-animation";
import { useAnimationControl } from "@/components/motion/hooks/use-animation-control";
import MotionContainer from "@/components/motion/motion-container";
import MotionText from "@/components/motion/motion-text";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const { control, onReverse } = useAnimationControl();
  const controller = useAnimation(control);

  return (
    <section className="relative w-full h-screen bg-black">
      <MotionContainer
        animation={{
          mode: ["filterBlurIn", "fadeIn"],
          transition: "linear",
          delay: 2,
          duration: 1,
        }}
        elementType="div"
        className="absolute size-full z-20 top-0 left-0 bg-gradient-to-b from-black/75 to-transparent"
        controller={controller}
      />
      <div className="absolute z-30 top-0 left-0 size-full flex items-center justify-center">
        <div className="max-w-auto md:px-0 px-8 items-center justify-center flex flex-col text-center md:gap-4 size-full h-2/3">
          <MotionText
            animation={{
              mode: ["filterBlurIn", "fadeUp"],
              transition: "cubicBounce",
              delay: 0,
            }}
            elementType={"h1"}
            config={{
              mode: "chars",
              duration: 0.05,
              delayLogic: "linear",
              space: 0.1,
            }}
            controller={controller}
            className="font-secondary md:text-6xl text-4xl font-bold text-primary"
            wrapperClassName="md:text-center text-start tracking-tight "
          >
            Pokonywanie tysiącleci: nasza podróż w czasie
          </MotionText>
          <MotionText
            animation={{
              mode: ["filterBlurIn", "fadeUp"],
              transition: "linear",
              delay: 1,
            }}
            elementType={"p"}
            config={{
              mode: "words",
              duration: 0.1,
              customLogic: (index) => index * 0.1,
              space: 0.1,
              isDynamicallyQueued: false,
            }}
            controller={controller}
            wrapperClassName="md:text-xl text-start tracking-tighter text-secondary md:text-center md:mt-0 mt-4"
          >
            Wykorzystanie najnowocześniejszych technologii do odkrywania
            starożytnych historii i dzielenia się nimi z przyszłymi odkrywcami.
          </MotionText>
          <MotionContainer
            animation={{
              mode: ["filterBlurIn", "fadeUp"],
              transition: "linear",
              delay: 1,
            }}
            elementType="div"
            className="relative md:self-center self-start mt-2 md:mt-0"
            controller={controller}
          >
            <Button
              intent="primary"
              size="large"
              className={"md:text-base text-sm"}
            >
              Eksploruj odkryte obszary <ArrowRight className="size-5" />
            </Button>
          </MotionContainer>
        </div>
      </div>
      <VideoPlayer onClick={onReverse} />
      <AboutUsDivider />
    </section>
  );
};

export default Hero;
