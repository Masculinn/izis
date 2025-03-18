import { FlickeringGrid } from "@/components/services-grid";

export default function Services() {
  return (
    <section className="py-14 h-screen w-full relative overflow-hidden">
      <FlickeringGrid
        className="absolute inset-0 z-0 h-full w-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={0.5}
        flickerChance={0.1}
      />
    </section>
  );
}
