import { useMobile } from "@/hooks/use-mobile";
import { useInView } from "motion/react";
import { FC, useEffect, useRef, useState } from "react";
import { Volume2, VolumeOff } from "lucide-react";
import { Button } from "../ui";
import { VideoPlayerProps } from "@/interfaces";

export const VideoPlayer: FC<VideoPlayerProps> = ({ onClick }) => {
  const isMobile = useMobile();
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const ref = useRef<HTMLVideoElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    const video = ref.current;
    if (!video || !inView) return;

    if (!video.src) {
      video.src = video.dataset.src!;
      video.load();
    }
  }, [inView]);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    if (inView) {
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [inView]);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const controller = new AbortController();

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    video.addEventListener("playing", onPlay, {
      signal: controller.signal,
    });
    video.addEventListener("pause", onPause, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  }, []);

  const handlePress = () => {
    setIsMuted((m) => !m);
    onClick();
  };

  return (
    <div className="absolute inset-0 size-full">
      <video
        loop
        playsInline
        controls={false}
        muted={isMuted}
        ref={ref}
        poster={
          isMobile
            ? "/assets/videos/thumb-mobile.webp"
            : "/assets/videos/thumb-pc.webp"
        }
        preload="none"
        data-src="/assets/videos/banner-video.mp4"
        className="size-full object-cover top-0 left-0 z-10"
      />
      <Button
        intent="plain"
        onPress={handlePress}
        className="absolute md:bottom-16 md:right-12 bottom-28 right-6 hover:scale-105 text-white hover:text-secondary-fg rounded-full p-3 cursor-pointer z-50"
      >
        {isMuted ? (
          <VolumeOff className="md:size-8 size-7" />
        ) : (
          <Volume2 className="md:size-8 size-7" />
        )}
      </Button>
    </div>
  );
};
