import { ServiceItemProps } from "@/interfaces";
import { cn } from "@/lib/utils";
import { FC } from "react";

export const Step: FC<ServiceItemProps & { className?: string }> = ({
  desc,
  img,
  subHeader,
  title,
  className,
}) => {
  return (
    <div
      className={cn(
        " lg:h-96 w-full h-auto items-center justify-between flex",
        className
      )}
    >
      <div className="w-1/2 h-full flex items-center justify-center">
        <img
          src={img}
          alt={`${title} - IZIS`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="px-6">
          <h3 className="font-secondary lg:text-4xl text-3xl font-bold text-primary">
            {title}
          </h3>
          <h4 className="font-secondary lg:text-xl text-lg font-bold text-secondary tracking-tight">
            {subHeader}
          </h4>
          <p className="font-primary text-lg mt-4">{desc}</p>
        </div>
      </div>
    </div>
  );
};
