import { useMobile } from "@/hooks/use-mobile";
import { MarkerObjProps } from "@/interfaces";

import { FC, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui";
import { ArrowRight, Pointer } from "lucide-react";
import { DiscoveriesDivider } from "@/components/discoveries/discoveries-divider";
import Mapbox from "@/components/mapbox/mapbox";

const Hero: FC<MarkerObjProps> = (props) => {
  const { coordinates, desc, id, name } = props;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [tutorial, setTutorial] = useState<boolean>(false);
  const isMobile = useMobile();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setTutorial(true);
    }, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <main
        className="w-full h-screen relative items-start justify-center flex overflow-clip"
        key={`id`}
        aria-label={`izis discoveries hero section-${id}`}
      >
        <div
          className={`absolute z-40 w-2/5 h-3/5 bottom-0 right-0 lg:flex hidden items-center justify-center ${
            tutorial && "lg:hidden"
          }`}
        >
          <div className="items-center justify-center flex flex-col pointer">
            <span className="animate-ping bg-primary size-12 rounded-full -translte-x-4 mr-4" />
            <Pointer className="size-24 -mt-8  rotate-y-45 fill-primary " />
          </div>
        </div>
        <div className="absolute size-full inset-0 bg-gradient-to-bl from-black/90 to-transparent z-20 " />
        <div className="absolute z-50 h-full left-0 lg:w-3/5 w-full bg-gradient-to-r from-black/90 to-transparent items-center justify-center flex ">
          <div className="w-auto max-w-2xl flex items-start text-start justify-center flex-col gap-4 min-h-min lg:p-24 px-16 lg:mt-0  -mt-96">
            <h1 className="font-secondary lg:text-7xl text-5xl font-semibold lg:text-white bg-gradient-to-b text-transparent from-white to-transparent bg-clip-text max-w-sm">
              {name}
            </h1>
            <p className="text-primary tracking-tighter lg:flex hidden">
              {desc.slice(0, 280)}...
            </p>
            <Button
              intent="secondary"
              size="large"
              shape="circle"
              className="lg:flex hidden"
            >
              <span>What found</span>
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
        <Mapbox
          config={{
            bearing: 160,
            boxZoom: true,
            minZoom: 8,
            interactive: isMobile,
            center: coordinates,
            zoom: 8,
            pitch: 120,
          }}
          id={id}
          isMarked={true}
          isMobile={isMobile}
          mapContainerStyle="size-full relative rounded-xl z-20"
          key={id}
        />
        <div className="absolute z-40 h-2/5 right-0 w-full bg-gradient-to-b from-black to-transparent" />
        <DiscoveriesDivider />
      </main>
    </>
  );
};

export default Hero;
