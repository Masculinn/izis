import { MapboxModalProps } from "@/interfaces";
import { FC, useEffect, useRef, useState } from "react";
import { Button, Drawer, Note, Skeleton } from "../ui";
import Image from "next/image";
import { useMobile } from "@/hooks/use-mobile";
import { secondaryFont } from "@/config/fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { MapboxModalFeatures } from "./mapbox-modal-features";

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

  return (
    <Drawer isOpen={isOpen} onOpenChange={setIsOpen} withNotch>
      <Drawer.Content aria-label="Izis Mapbox Modal">
        <Drawer.Header>
          <h2
            className={`${secondaryFont.className} lg:text-6xl text-5xl  tracking-tighter self-center flex`}
          >
            {activeItem.name}
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
