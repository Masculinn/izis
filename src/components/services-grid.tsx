import { FC } from "react";
import servicesLib from "@/lib/servicesLib";
import { ServiceCard } from "./service-card";
import { cn } from "@/lib/utils";
import MotionContainer from "./motion/motion-container";
import { useMobile } from "@/hooks/use-mobile";

export const ServicesGrid: FC = () => {
  const isMobile = useMobile();

  return (
    <div className="grid md:grid-cols-4 gap-2">
      {servicesLib.map((val, idx) => (
        <MotionContainer
          key={val.id}
          animation={{
            mode: ["filterBlurIn", idx % 2 === 0 ? "fadeUp" : "fadeDown"],
            transition: "smooth",
            duration: 0.5,
            delay: isMobile ? 0 : idx * 0.5,
          }}
          elementType={"div"}
          className={cn(`p-1 rounded-lg md:h-64 h-auto px-4 md:px-0
          ${idx == 0 && "md:col-start-1"}
          ${idx == 1 && "md:col-span-2"}
          ${idx == 2 && "md:col-start-4"}
          ${idx > 2 && "md:col-span-2"}`)}
        >
          <ServiceCard {...val} />
        </MotionContainer>
      ))}
    </div>
  );
};
