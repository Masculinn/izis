import { NewsMediaWidgetProps } from "@/interfaces";
import Image from "next/image";
import { FC } from "react";

export const MediaWidget: FC<NewsMediaWidgetProps> = ({ images }) => {
  return (
    <div className="w-full h-60 rounded-2xl bg-white relative">
      <Image
        src={images[0]}
        alt={images[0]}
        width={500}
        height={500}
        className="rounded-2xl object-top object-cover h-60 w-full"
      />
    </div>
  );
};
