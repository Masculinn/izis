import { FC } from "react";
import { DiscoverSearchItemProps, ServiceCardProps } from "@/interfaces";
import Link from "next/link";
import formatCoordinate from "@/utils/formatCoordinate";
import servicesLib from "@/lib/servicesLib";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import MotionContainer from "../motion/motion-container";

export const SearchItem: FC<DiscoverSearchItemProps> = (props) => {
  const { coordinates, id, name, img, type, url } = props;

  const [latitude, longitude] = coordinates;

  const formattedCoordinates = `${formatCoordinate({
    coordinate: latitude,
    isLatitude: true,
  })}, ${formatCoordinate({
    coordinate: longitude,
    isLatitude: false,
  })}`;

  const item = servicesLib.find((val) =>
    val.href.includes(type)
  ) as ServiceCardProps;

  return (
    <Link
      key={id}
      href={url}
      className="w-full h-24 bg-secondary-fg shrink-0 items-center justify-between flex flex-row hover:bg-secondary-fg/50 backdrop-blur-lg rounded-lg transition-all duration-200 group"
    >
      <div className="w-full h-full flex flex-col gap-1 p-4 group-hover:text-secondary text-primary">
        <div className="flex flex-row gap-1 font-secondary items-center ">
          <item.icon className="size-5" />
          <h4>{name}</h4>
        </div>
        <span className="text-secondary text-sm">{formattedCoordinates}</span>
      </div>
      <div
        className="w-36 h-full rounded-lg bg-cover bg-center group-hover:hidden"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <Button
        size="square-petite"
        intent="secondary"
        className="hidden group-hover:flex lg:w-[116px] w-28 h-full"
      >
        <ArrowRight />
      </Button>
    </Link>
  );
};
