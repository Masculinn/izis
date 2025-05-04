import { useMobile } from "@/hooks/use-mobile";
import MotionImage from "../motion/motion-image";
import { FC, useState } from "react";
import { AboutServiceCardProps } from "@/interfaces";
import { Button, Card, Skeleton } from "../ui";
import { cn } from "@/lib/utils";
import { Link } from "react-aria-components";
import { ArrowRight } from "lucide-react";
import MotionContainer from "../motion/motion-container";

export const ServiceCard: FC<AboutServiceCardProps> = (props) => {
  const { img, title, desc, href, id } = props;
  const [hovered, setHovered] = useState<boolean>(false);

  const handleStart = () => setHovered(true);
  const handleLeft = () => setHovered(false);

  const isMobile = useMobile();

  const checkSize = title.split(" ").length <= 5 ? "text-md" : "text-lg";

  return (
    <div
      className="w-80 h-full rounded-2xl border-primary relative cursor-pointer bg-black"
      onMouseEnter={!isMobile ? handleStart : undefined}
      onMouseLeave={!isMobile ? handleLeft : undefined}
      onTouchStart={handleStart}
      onTouchEnd={handleLeft}
    >
      <Card className="z-50 absolute top-0 left-0 size-full p-8 items-start flex flex-col justify-end">
        <Card.Title className="font-secondary">{title}</Card.Title>
        <Card.Description className="text-xs">
          IZIS - Usługi {id}
        </Card.Description>
        <Card.Content className="text-xs items-start flex justify-start text-start">
          {desc.split(" ").slice(0, 10).join(" ")}
          {desc.split(" ").length > 10 && "..."}
        </Card.Content>
        <Card.Footer className="">
          <Link href={href}>
            <Button intent="secondary" shape="circle" size="small">
              <span>Czytaj więcej</span>
              <ArrowRight className="w-4 h-4 " />
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};
