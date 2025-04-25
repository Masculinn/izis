import { NewsMapsWidgetProps } from "@/interfaces";
import { FC } from "react";
import Mapbox from "../mapbox/mapbox";

const MapsWidget: FC<NewsMapsWidgetProps> = ({ mapbox }) => {
  return (
    <div className="w-full h-60 rounded-2xl bg-white relative">
      <h1 className="font-secondary text-4xl font-bold bg-gradient-to-b text-transparent from-white to-transparent bg-clip-text max-w-sm absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2  z-50">
        A gdzie ?
      </h1>
      <Mapbox {...mapbox} />
    </div>
  );
};

export default MapsWidget;
