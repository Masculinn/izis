import {
  cn,
  MY_MOTION_PROVIDER,
  MY_WEBSITE_LINK,
  PROHIBITED_FOOTER_URL,
} from "@/lib/utils";
import { useRouter } from "next/router";
import routes from "@/config/routes";
import Image from "next/image";
import Link from "next/link";
import { secondaryFont } from "@/config/fonts";

const services = routes.find(
  (val) => val.items && val.title === "Nasze Usługi"
)?.items;
const media = routes[routes.length - 1]?.items;

export default function Footer() {
  const router = useRouter();

  const contact = routes.filter((val) => typeof val.items === "undefined");

  return (
    <footer
      aria-labelledby="footer-heading"
      className={cn(`font-brand w-full pt-14 
        ${PROHIBITED_FOOTER_URL.includes(router.pathname) && "hidden"}`)}
    >
      <h1 className="sr-only">IZIS FOOTER</h1>
      <div className="max-w-7xl mx-auto items-center justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-4 md:px-0 px-8 gap-8">
          <div>
            <Link href="/">
              <Image src="/logo.png" height={125} width={125} alt="IZIS Logo" />
            </Link>
          </div>
          <div>
            <h2
              className={`lg:text-2xl text-xl pb-2 font-bold  ${secondaryFont.className}`}
            >
              Services
            </h2>
            <ul className="flex flex-col gap-2">
              {services?.map((val, idx) => (
                <li
                  key={idx}
                  className="lg:text-base tracking-tight text-sm text-primary-fg hover:underline hover:text-black"
                >
                  <Link href={val.src}>{val.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2
              className={`lg:text-2xl text-xl pb-2 font-bold  ${secondaryFont.className}`}
            >
              Media Press
            </h2>
            <ul className="flex flex-col gap-2">
              {media?.map((val, idx) => (
                <li
                  key={idx}
                  className="lg:text-base tracking-tight text-sm text-primary-fg hover:underline hover:text-black"
                >
                  <Link href={val.src}>{val.title}</Link>
                </li>
              ))}
            </ul>
          </div>{" "}
          <div>
            <h2
              className={`lg:text-2xl text-xl pb-2 font-bold  ${secondaryFont.className}`}
            >
              O nas
            </h2>
            <ul className="flex flex-col gap-2">
              {contact?.map((val, idx) => (
                <li
                  key={idx}
                  className="lg:text-base tracking-tight text-sm text-primary-fg hover:underline hover:text-black"
                >
                  <Link href={val.src}>{val.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="mt-12" />
        <center>
          <p className="lg:text-sm tracking-tighter text-sm py-4 font-secondary">
            © {new Date().getFullYear()} IZIS, wszelkie prawa zastrzeżone {"– "}
            Powered By{" "}
            <Link
              href={MY_MOTION_PROVIDER}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:underline hover:text-black"
            >
              Motion Provider
            </Link>
            ,{" "}
            <Link
              href={MY_WEBSITE_LINK}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:underline hover:text-black"
            >
              Burak Bilen
            </Link>
          </p>
        </center>
      </div>
    </footer>
  );
}
