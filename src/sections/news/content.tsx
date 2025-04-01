import { ArticleWidget } from "@/components/news/article-widget";
import { MapsWidget } from "@/components/news/maps-widget";
import { MediaWidget } from "@/components/news/media-widget";
import { Badge } from "@/components/ui";
import { useMobile } from "@/hooks/use-mobile";
import { NewsCardProps, ServiceCardProps } from "@/interfaces";
import servicesLib from "@/lib/servicesLib";
import { FC } from "react";

const Content: FC<NewsCardProps> = (props) => {
  const {
    images,
    content,
    coordinates,
    date,
    id,
    source,
    subHeader,
    title,
    url,
    type = "archaeological-supervision-earthworks",
  } = props;

  const isMobile = useMobile();

  const workType = servicesLib.find((item) =>
    item.href.includes(type)
  ) as ServiceCardProps;

  return (
    <section className="max-w-7xl mx-auto flex items-start justify-center flex-row gap-4 py-24">
      <div className="h-auto lg:w-2/3 w-full px-6  py-8">
        <Badge intent="secondary">
          <workType.icon /> <span>{workType.title}</span>
        </Badge>
        <h1 className="font-secondary lg:text-6xl text-4xl font-bold lg:pt-4 pt-3 pb-4">
          {title}
        </h1>
        {content.map((val, idx) => (
          <p key={idx} className="tracking-tight py-4">
            {val}
          </p>
        ))}
      </div>
      {!isMobile && (
        <div className="h-screen w-1/3 sticky pt-12 flex flex-col gap-8 top-12">
          <MediaWidget images={images} title={title} />
          <MapsWidget coordinates={coordinates} />
          <ArticleWidget id={id} />
        </div>
      )}
    </section>
  );
};

export default Content;
