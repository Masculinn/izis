import { NewsMapsWidgetProps } from "@/interfaces";
import { FC } from "react";

export const MapsWidget: FC<NewsMapsWidgetProps> = ({ coordinates }) => {
  return (
    <div className="w-full h-60 rounded-2xl bg-white items-center justify-center flex">
      MapsWidget
    </div>
  );
};
