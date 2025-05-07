import MotionChain from "@/components/motion/motion-chain";
import MotionContainer from "@/components/motion/motion-container";
import MotionText from "@/components/motion/motion-text";
import { MotionAnimationProps } from "@/components/motion/types";
import { Badge } from "@/components/ui";
import { ServiceItemProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import { FC } from "react";

const animation = {
  mode: ["fadeRight", "filterBlurIn"],
  transition: "cubicFastEnd",
  duration: 0.5,
} as MotionAnimationProps;

export const Step: FC<
  ServiceItemProps & { className?: string; id: number }
> = ({ desc, img, subHeader, title, className, id }) => {
  return (
    <div
      className={cn(
        " lg:h-96 w-full h-auto items-center justify-between flex",
        className
      )}
    >
      <div className="lg:w-1/2 w-full h-full flex items-center justify-center rounded-2xl">
        <img
          src={img}
          alt={`${title} - IZIS`}
          className="lg:size-4/5 size-full object-cover object-center rounded-2xl"
        />
      </div>
      <div className="lg:w-1/2 w-full h-full flex items-center justify-center">
        <div className="px-6">
          <MotionContainer
            animation={{ ...animation, delay: 0.5 }}
            elementType={"div"}
          >
            <Badge intent="secondary" shape="square">
              Krok {id}
            </Badge>
          </MotionContainer>
          <MotionText
            animation={animation}
            config={{
              mode: "words",
              duration: 0.25,
              delayLogic: "linear",
              space: 0.5,
            }}
            elementType={"h3"}
            wrapperClassName="font-secondary lg:text-4xl text-3xl font-bold text-secondary-fg"
          >
            {title}
          </MotionText>
          <h4 className="font-secondary lg:text-xl text-lg text-accent tracking-tighter">
            {subHeader}
          </h4>
          <p className="font-primary mt-4 tracking-tight">{desc}</p>
        </div>
      </div>
    </div>
  );
};
