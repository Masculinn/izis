import { TeamCardProps } from "@/interfaces";
import { FC, useState } from "react";
import { Card, Skeleton } from "../ui";
import MotionImage from "../motion/motion-image";

export const TeamCard: FC<TeamCardProps> = (props) => {
  const { id, desc, img, name, title } = props;
  const [hovered, setHovered] = useState<boolean>(false);

  const handleStart = () => setHovered(true);
  const handleLeft = () => setHovered(false);

  return (
    <Card
      className="size-full relative flex flex-col hover:bg-secondary z-50 cursor-pointer hover:-translate-y-2 transition-all duration-300"
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
            pieces: 36,
            delayLogic: "bounce",
          }}
          fallback={<Skeleton className="size-24 rounded-full" />}
          wrapperClassName="size-24"
          controller={{
            configView: {
              once: false,
              amount: 0.5,
            },
            trigger: hovered,
          }}
        />
        <Card.Title className="font-secondary md:text-xl text-2xl ">
          {name}
        </Card.Title>
        <Card.Description className="font-bold tracking-tight  ">
          {title}
        </Card.Description>
      </Card.Header>
      <Card.Content className="tracking-tight font-secondary ">
        {desc}
      </Card.Content>
    </Card>
  );
};
