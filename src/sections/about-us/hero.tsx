import { VideoPlayer } from "@/components/about-us/video-player";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-black">
      <div className="absolute size-full z-20 top-0 left-0 bg-gradient-to-b from-black/75 to-transparent" />
      <VideoPlayer />
    </section>
  );
};

export default Hero;
