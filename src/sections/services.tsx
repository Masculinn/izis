import { ServicesGrid } from "@/components/services-grid";

export default function Services() {
  return (
    <section className="py-24 h-auto w-full relative overflow-hidden items-center justify-center mx-auto  max-w-7xl">
      <h2 className="font-secondary lg:text-6xl text-4xl font-bold text-center pb-8">
        Our Services.
      </h2>
      <ServicesGrid />
    </section>
  );
}
