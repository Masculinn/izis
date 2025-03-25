import { LogoItemProps, LogoMarqueeProps } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const LogoMarquee: FC<LogoMarqueeProps> = ({ items }) => {
  return (
    <section className="max-w-7xl items-center justify-center mx-auto flex lg:pt-12">
      <div className=" text-5xl py-8  w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
        {Array.from({ length: 2 }).map((_, idx) => (
          <ul
            key={idx}
            className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
          >
            {items.map((val, idx) => (
              <LogoItem key={idx} {...val} />
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

const LogoItem: FC<LogoItemProps> = ({ href, src, alt }) => (
  <li>
    <Link
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      referrerPolicy="origin-when-cross-origin"
    >
      <Image
        src={src}
        alt={alt}
        width={150}
        height={100}
        loading="lazy"
        decoding="async"
        className="h-auto"
      />
    </Link>
  </li>
);
export { LogoItem };
export default LogoMarquee;
