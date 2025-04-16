import { DiscoveriesDivider } from "@/components/discoveries/discoveries-divider";
import MotionText from "@/components/motion/motion-text";
import { Badge } from "@/components/ui";
import { NewsHeroProps } from "@/interfaces";
import { FC } from "react";

const Hero: FC<NewsHeroProps> = ({ source, subHeader, title }) => {
  return (
    <section
      className="h-screen bg-no-repeat bg-center bg-cover w-full relative"
      style={{
        backgroundImage: "url(/assets/card-1.webp)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent">
        <div className="max-w-7xl mx-auto size-full items-start justify-center flex flex-col z-50 gap-2 lg:px-0 px-8">
          <Badge
            intent="secondary"
            shape="square"
            className="backdrop-blur-3xl"
          >
            Źródło: {source}
          </Badge>
          <h1 className="font-secondary lg:text-6xl text-5xl font-bold text-primary max-w-3xl capitalize">
            {title}
          </h1>
          <MotionText
            animation={{
              mode: ["fadeUp", "filterBlurIn"],
              transition: "linear",
              duration: 0.5,
            }}
            elementType={"p"}
            config={{
              duration: 0.25,
              delayLogic: "linear",
              space: 1,
              mode: "words",
            }}
            wrapperClassName="lg:text-lg text-base  text-primary max-w-2xl font-secondary"
          >
            {subHeader}
          </MotionText>
        </div>
      </div>
      <DiscoveriesDivider />
    </section>
  );
};

export default Hero;
