import { FC } from "react";
import servicesLib from "@/lib/servicesLib";
import { ServiceCard } from "./service-card";

export const ServicesGrid: FC = () => {
  return (
    <div className="grid md:grid-cols-4 gap-2">
      {servicesLib.map((val) => (
        <div
          key={val.id}
          className={`p-1 rounded-lg md:h-64 h-auto px-4 md:px-0
              ${val.id == 1 && "md:col-start-1"}
              ${val.id == 2 && "md:col-span-2"}
              ${val.id == 3 && "md:col-start-4"}
              ${val.id == 4 && "md:col-span-2"}
              ${val.id == 5 && "md:col-span-2"}
            `}
        >
          <ServiceCard {...val} />
        </div>
      ))}
    </div>
  );
};
