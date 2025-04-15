import { MapboxModalProps } from "@/interfaces";
import { FC, useEffect, useRef, useState } from "react";
import { Button, Drawer, Skeleton } from "../ui";
import Image from "next/image";
import { useMobile } from "@/hooks/use-mobile";
import { secondaryFont } from "@/config/fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MapboxModalFeatures } from "./mapbox-modal-features";
import getSplittedText from "@/utils/getSplittedText";
import MotionChain from "../motion/motion-chain";
import { MotionAnimationProps } from "../motion/types";
import MotionText from "../motion/motion-text";

const MapboxModal: FC<MapboxModalProps> = ({
  isOpen,
  activeItem,
  setIsOpen,
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const ref = useRef<string | undefined>(undefined);
  const item = activeItem.img[0];
  const isMobile = useMobile();

  useEffect(() => {
    ref.current = item;
    setLoaded(false);

    if (!activeItem?.img) return;

    const img = new window.Image();
    img.src = item;
    img.onload = () => {
      if (ref.current === item) {
        setLoaded(true);
      }
    };

    return () => {
      img.onload = null;
    };
  }, [activeItem.img, item]);

  const TitleAnimations = Array.from({ length: activeItem.name.length }).fill({
    mode: ["fadeUp", "filterBlurIn"],
    duration: 0.5,
    transition: "smooth",
  }) as MotionAnimationProps[];

  return (
    <Drawer isOpen={isOpen} onOpenChange={setIsOpen} withNotch>
      <Drawer.Content aria-label="Izis Mapbox Modal">
        <Drawer.Header>
          <h2>
            <MotionText
              animation={{
                mode: ["fadeUp", "filterBlurIn"],
                transition: "linear",
                duration: 0.5,
              }}
              config={{
                duration: 4,
                mode: "chars",
                customLogic: (i) => i * 0.1,
                space: 1,
              }}
              wrapperClassName={`${secondaryFont.className} flex flex-wrap lg:text-6xl text-5xl  tracking-tighter self-center `}
              elementType="h2"
            >
              {activeItem.name}
            </MotionText>
          </h2>
          <Drawer.Description className="pt-4">
            {!loaded ? (
              <Skeleton
                soft
                className="flex items-center dark justify-center w-full h-60 rounded-2xl"
              />
            ) : (
              <Image
                key={item}
                src={item}
                alt={activeItem.name}
                width={isMobile ? 120 : 240}
                height={isMobile ? 120 : 240}
                loading="lazy"
                decoding="async"
                onLoad={() => setLoaded(true)}
                className="h-60 w-full rounded-2xl"
              />
            )}
          </Drawer.Description>
        </Drawer.Header>
        <Drawer.Body>
          <MapboxModalFeatures activeItem={activeItem} />
        </Drawer.Body>
        <Drawer.Footer className="w-full items-center justify-center flex flex-row gap-2">
          <Drawer.Close className="w-1/4">Close</Drawer.Close>
          <Link href={activeItem.url} className="w-full lg:w-3/4">
            <Button
              intent="secondary"
              onPress={() => setIsOpen(false)}
              className="w-full lg:w-full"
            >
              Go to the project <ArrowRight className="size-5 " />
            </Button>
          </Link>
        </Drawer.Footer>
      </Drawer.Content>
    </Drawer>
  );
};

export default MapboxModal;
