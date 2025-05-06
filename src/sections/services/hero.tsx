import { ServiceProps } from "@/interfaces";
import { FC } from "react";
import servicesLib from "@/lib/servicesLib";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const Hero: FC<Omit<ServiceProps, "steps">> = ({ id, subHeader, title }) => {
  const item = servicesLib.find((val) => val.href.includes(id))!;

  return (
    <section className="relative w-full h-screen">
      <img
        src="/assets/card-2.webp"
        alt={`${title} - IZIS`}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent items-center justify-center flex">
        <div className="size-full z-50 md:items-center items-start md:text-center text-start justify-center flex flex-col gap-2 max-w-7xl mx-auto md:px-0 px-6">
          <item.icon className="size-12 text-primary" />
          <h1 className="font-secondary lg:text-6xl text-5xl font-bold text-primary">
            {title}
          </h1>
          <h2 className="font-secondary lg:text-xl text-lg font-bold text-secondary tracking-tight">
            {subHeader}
          </h2>
          <MdKeyboardDoubleArrowDown className="md:size-12 size-9 text-primary animate-pulse mt-8 self-center" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
