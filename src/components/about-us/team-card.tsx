import { TeamCardProps } from "@/interfaces";
import { FC, useState } from "react";
import { Card, Skeleton } from "../ui";
import MotionImage from "../motion/motion-image";
import MotionText from "../motion/motion-text";
import { useMobile } from "@/hooks/use-mobile";

export const TeamCard: FC<TeamCardProps> = (props) => {
  const { desc, img, name, title } = props;
  const [hovered, setHovered] = useState<boolean>(false);

  const handleStart = () => setHovered(true);
  const handleLeft = () => setHovered(false);

  const isMobile = useMobile();

  return (
    <Card
      className="size-full relative flex flex-col hover:bg-secondary z-50 cursor-pointer hover:-translate-y-2 transition-all duration-300 pointer-events-auto"
      onMouseEnter={handleStart}
      onMouseLeave={handleLeft}
      onTouchStart={handleStart}
      onTouchEnd={handleLeft}
    >
      <Card.Header className="z-50 flex flex-col items-center">
        <MotionImage
          animation={{
            mode: ["filterBlurIn"],
            transition: "delayedElastic",
            duration: 1,
          }}
          config={{
            duration: 0.5,
            img: img,
            pieces: isMobile ? 25 : 36,
            delayLogic: "bounce",
          }}
          fallback={<Skeleton className="md:size-24 size-20 rounded-full" />}
          wrapperClassName="md:size-24 size-20 rounded-full"
          controller={{
            configView: {
              once: false,
              amount: 0.5,
            },
            trigger: isMobile ? undefined : hovered,
          }}
        />
        <Card.Title className="font-secondary md:text-xl text-2xl pointer-events-none">
          {name}
        </Card.Title>
        <Card.Description className="font-bold tracking-tight pointer-events-none">
          <MotionText
            animation={{
              mode: ["fadeIn", "filterBlurIn", "translate3dIn"],
              transition: "delayedCubic",
              duration: 0.33,
            }}
            config={{
              duration: 0.5,
              mode: "chars",
              delayLogic: "perlin",
              space: 0.5,
            }}
            elementType={"p"}
            controller={{
              trigger: hovered,
            }}
          >
            {title}
          </MotionText>
        </Card.Description>
      </Card.Header>
      <Card.Content className="tracking-tight font-secondary pointer-events-none ">
        {desc}
      </Card.Content>
    </Card>
  );
};
