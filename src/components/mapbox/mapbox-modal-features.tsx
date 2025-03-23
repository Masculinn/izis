import { MapboxModalFeaturesProps, ServiceCardProps } from "@/interfaces";
import { FC } from "react";
import { Note } from "../ui";
import servicesLib from "@/lib/servicesLib";

export const MapboxModalFeatures: FC<MapboxModalFeaturesProps> = ({
  activeItem: { type },
}) => {
  const formattedType = type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const service = servicesLib.find(
    (val) => val.href.split("/")[2].toLowerCase() === type.toLowerCase()
  ) as ServiceCardProps;

  return (
    <Note className="mt-2">
      <div className=" justify-start items-center flex flex-row gap-2">
        {service.icon && <service.icon className="size-6" />}
        <span className="text-muted-fg tracking-tight capitalize">
          {formattedType}
        </span>
      </div>
    </Note>
  );
};
