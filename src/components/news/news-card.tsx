import { NewsCardProps, ServiceCardProps } from "@/interfaces";
import servicesLib from "@/lib/servicesLib";
import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { Button } from "../ui";
import Link from "next/link";

export const NewsCard: FC<NewsCardProps> = (props) => {
  const {
    images,
    subHeader,
    title,
    url,
    type = "preventive-archaeological-research",
  } = props;
  const typeIcon = servicesLib.find((s) =>
    s.href.includes(type)
  ) as ServiceCardProps;

  return (
    <div
      className="h-full rounded-md aspect-square p-6 flex justify-end flex-col items-end relative  cursor-pointer group "
      style={{
        backgroundImage: `url(${images[0]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute size-full bg-gradient-to-t from-black/50 group-hover:from-black  to-transparent inset-0 rounded-md z-0 transition-colors duration-200" />
      <div className="flex flex-col z-10 bottom-0">
        <h3 className="text-xl tracking-tight capitalize font-secondary group-hover:underline underline-offset-2">
          {title}
        </h3>
        <p className="text-secondary max-w-xs lg:text-sm text-xs group-hover:underline underline-offset-2">
          {subHeader.slice(0, 50)}...
        </p>
        <Link href={url} className="pt-4">
          <Button
            size="extra-small"
            aria-label="Read more"
            intent="secondary"
            shape="circle"
          >
            <span>Czytaj więcej</span>
            <ArrowRight className="size-4" />{" "}
          </Button>
        </Link>
      </div>
    </div>
  );
};
