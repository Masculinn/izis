import { NewsCardProps, ServiceCardProps } from "@/interfaces";
import servicesLib from "@/lib/servicesLib";
import { ArrowRight, User } from "lucide-react";
import { FC } from "react";
import { Badge, Button } from "../ui";
import Link from "next/link";

export const NewsCard: FC<NewsCardProps> = (props) => {
  const {
    date,
    id,
    images,
    source,
    subHeader,
    title,
    url,
    type = "preventive-archaeological-research",
  } = props;
  const typeIcon = servicesLib.find((s) =>
    s.href.includes(type)
  ) as ServiceCardProps;

  const handleClick = () => {};

  return (
    <div
      className="h-full rounded-md aspect-square p-6 flex justify-between flex-col relative  cursor-pointer group "
      style={{
        backgroundImage: `url(${images[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute z-50 top-4 right-4">
        <Badge shape="circle" intent="secondary">
          {date}
        </Badge>
      </div>
      <div className="absolute size-full bg-gradient-to-t from-black/50 group-hover:from-black  to-transparent inset-0 rounded-md z-0 transition-colors duration-200" />
      <typeIcon.icon className="w-7 h-7 stroke-1 text-primary-fg" />
      <div className="flex flex-col z-10">
        <h3 className="text-xl tracking-tight capitalize font-secondary group-hover:underline underline-offset-2">
          {title}
        </h3>
        <p className="text-secondary max-w-xs lg:text-sm text-xs group-hover:underline underline-offset-2">
          {subHeader.slice(0, 50)}...
        </p>
        <Link href={url} className="pt-4">
          <Button
            size="small"
            aria-label="Read more"
            intent="secondary"
            shape="circle"
          >
            <span>Read More</span>
            <ArrowRight className="size-4" />{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};
