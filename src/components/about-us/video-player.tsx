import { useMobile } from "@/hooks/use-mobile";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";
import { Button } from "../ui";

export const VideoPlayer = () => {
  const isMobile = useMobile();
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const ref = useRef<HTMLVideoElement | null>(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    const video = ref.current;

    if (!video) return;

    if (inView && !video.src) {
      video.src = video.dataset.src!;
      video.load();
    }

    const handlePlay = () => {
      if (inView) {
        video.play();
      }
    };

    video.addEventListener("canplaythrough", handlePlay);

    return () => {
      video.pause();
      video.removeEventListener("canplaythrough", handlePlay);
    };
  }, [inView, ref]);

  const handlePress = () => setIsMuted((m) => !m);

  return (
    <div className="absolute inset-0 size-full">
      <video
        loop
        playsInline
        autoPlay
        controls={false}
        muted={isMuted}
        ref={ref}
        poster={
          isMobile
            ? "/assets/videos/thumb-mobile.webp"
            : "/assets/videos/thumb-pc.webp"
        }
        preload="none"
        data-src="/assets/videos/hero-video.mp4"
        className="size-full object-cover top-0 left-0 z-10"
      />
      <Button
        intent="plain"
        onPress={handlePress}
        className="absolute md:bottom-8 md:right-8 bottom-24 right-6 hover:scale-105 text-white hover:text-secondary-fg rounded-full p-3 cursor-pointer z-50"
      >
        {!isMuted ? (
          <Volume2 className="md:size-8 size-7" />
        ) : (
          <VolumeOff className="md:size-8 size-7" />
        )}
      </Button>
    </div>
  );
};
