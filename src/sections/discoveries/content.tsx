import MapboxModalBg from "@/components/mapbox/mapbox-modal-bg";
import { Note } from "@/components/ui";
import { useMobile } from "@/hooks/use-mobile";
import { DiscoverContentProps, ServiceCardProps } from "@/interfaces";
import servicesLib from "@/lib/servicesLib";
import formatCoordinate from "@/utils/formatCoordinate";
import { FC } from "react";

const Content: FC<DiscoverContentProps> = ({
  desc,
  type,
  coordinates,
  name,
}) => {
  const markerIcon = servicesLib.find((item) =>
    item.href.includes(type)
  ) as ServiceCardProps;

  const [latitude, longitude] = coordinates;
  const formattedCoordinates = `${formatCoordinate({
    coordinate: latitude,
    isLatitude: true,
  })}, ${formatCoordinate({
    coordinate: longitude,
    isLatitude: false,
  })}`;

  return (
    <section className="lg:py-12 py-6 max-w-7xl mx-auto h-auto px-6 lg:px-0 relative">
      <div className="flex h-auto w-full flex-col items-center justify-center overflow-hidden absolute -z-10 lg:max-w-full max-w-md">
        <MapboxModalBg
          className={`[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]`}
        />
      </div>
      <div className="flex flex-row items-center gap-6 lg:justify-start justify-center">
        <h3 className="font-secondary lg:text-6xl text-4xl font-bold">
          {name}
        </h3>
      </div>
      <Note intent="info" indicator={false} className="mt-6">
        <div className="flex items-center lg:gap-3 gap-2">
          <markerIcon.icon className="size-5" />
          <span>
            {markerIcon.title} located at {formattedCoordinates}
          </span>
        </div>
      </Note>
      <div className="tracking-tighter text-secondary-fg my-8 font-secondary ">
        <span className="pr-1 text-4xl font-secondary ">
          {desc.slice(0, 1).toUpperCase()}
        </span>
        {desc.slice(1)}
        {desc.slice(1)}
      </div>
      <div className="mt-6">
        <p className="text-secondary-fg tracking-tighter font-secondary">
          {desc}
        </p>
        <p className="text-secondary-fg tracking-tighter font-secondary">
          {desc}
        </p>
      </div>
      <div className="mt-6">
        <p className="text-secondary-fg tracking-tighter font-secondary">
          {desc}
        </p>
      </div>
    </section>
  );
};

export default Content;
