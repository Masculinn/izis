import { NewsArticleWidgetProps } from "@/interfaces";
import newsLib from "@/lib/newsLib";
import { FC } from "react";

export const ArticleWidget: FC<NewsArticleWidgetProps> = ({ id }) => {
  const articles = newsLib.filter((val) => val.id !== id);
  return (
    <div className="w-full h-60 rounded-2xl bg-secondary-fg overflow-y-scroll ">
      Article Widget {articles.length}
    </div>
  );
};

const Item = () => <div>Item</div>;
