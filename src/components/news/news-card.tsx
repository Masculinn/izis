import { NewsCardProps } from "@/interfaces";
import { User } from "lucide-react";
import { FC } from "react";

export const NewsCard: FC<NewsCardProps> = (props) => {
  return (
    <div
      className="h-full rounded-md aspect-square p-6 flex justify-between flex-col relative"
      style={{
        backgroundImage: "url('/assets/services/lomza-izis.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <User className="w-8 h-8 stroke-1" />
      <div className="flex flex-col">
        <h3 className="text-xl tracking-tight">Ipsum voluptate aute</h3>
        <p className="text-stone-300 max-w-xs text-base">
          Duis aute ullamco nisi sunt officia eiusmod Lorem pariatur sit
          reprehenderit eu quis do.
        </p>
      </div>
    </div>
  );
};
