import { NewsArticleWidgetProps, NewsCardProps } from "@/interfaces";

import newsLib from "@/lib/newsLib";
import getDate from "@/utils/getDate";
import Image from "next/image";
import { FC } from "react";

export const ArticleWidget: FC<NewsArticleWidgetProps> = ({ id }) => {
  const articles = newsLib.filter((val) => val.id !== id);
  const items = getDate(articles).reverse() as unknown as NewsCardProps[];

  return (
    <div className="w-full h-auto rounded-2xl flex justify-self-center max-w-7xl px-6 lg:px-0">
      <ul className="w-full h-80 overflow-x-scroll list-none">
        {items.map((val) => (
          <Item key={val.id} {...val} />
        ))}
      </ul>
    </div>
  );
};

const Item: FC<NewsCardProps> = ({
  date,
  id,
  images,
  source,
  subHeader,
  title,
  url,
  type = "salvage-excavation-research",
}) => (
  <li className="h-full w-96 rounded-2xl relative">
    {id}
    <Image
      src={images[0]}
      alt={title}
      height={500}
      width={500}
      className="rounded-2xl object-center object-cover size-full"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 to-transparent" />
  </li>
);
