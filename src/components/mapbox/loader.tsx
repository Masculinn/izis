import { MapboxLoaderProps } from "@/interfaces";
import { FC } from "react";

export const Loader: FC<MapboxLoaderProps> = ({ onClick }) => (
  <span
    className="mapbox-loader bg-secondary bg-clip-text text-secondary"
    onClick={onClick}
  />
);
