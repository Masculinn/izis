import { ContactForm } from "@/components/contact-form";
import Mapbox from "@/components/mapbox/mapbox";
import MapboxModalBg from "@/components/mapbox/mapbox-modal-bg";
import { Button } from "@/components/ui";
import { useMobile } from "@/hooks/use-mobile";
import contactLib from "@/lib/contact.lib";
import markerLib from "@/lib/markerLib";
import { DIRECTIONS_URL } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const isMobile = useMobile();
  const data = markerLib[0];

  return (
    <section className="lg:h-screen h-auto w-full items-center justify-center flex flex-col ">
      <div className="w-full lg:h-1/2 h-96 flex items-center justify-center flex-col relative bg-[url(/assets/card-1.webp)] bg-cover bg-center">
        <div className="bg-gradient-to-b from-black/75 to-transparent absolute inset-0 z-0" />
        <div className="z-50 md:items-center items-start md:text-center text-start justify-center flex flex-col gap-2 max-w-7xl mx-auto md:px-0 px-6 lg:pt-4">
          <h1 className="font-secondary lg:text-6xl text-4xl font-bold text-primary">
            Kontakt
          </h1>
          <p className="lg:text-lg text-base text-overlay font-primary tracking-tighter max-w-2xl">
            Biuro znajduję się w Białej Podlaskiej, a nasze projekty realizujemy
            na terenie całej Polski. Chętnie umówimy się na spotkanie.
          </p>
        </div>
      </div>
      <div className="w-full lg:h-1/2 h-auto flex items-center justify-center lg:flex-row flex-col-reverse ">
        <div className="lg:w-3/5 w-full lg:h-full min-h-80 h-auto lg:px-12 px-6 py-8 items-center justify-center flex">
          <div className="size-full flex lg:flex-row flex-col gap-4">
            <div className="lg:w-2/5 w-full flex flex-col gap-2  items-center justify-center relative">
              {isMobile && (
                <MapboxModalBg className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] absolute top-0 left-0 z-[-1] " />
              )}
              {contactLib.map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-center lg:justify-between justify-start w-full text-black"
                >
                  <item.icon className="size-5 text-accent shrink-0 " />
                  {item.href ? (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline underline-offset-2"
                    >
                      <span className="text-secondary-fg font-secondary text-end text-sm">
                        {item.value}
                      </span>
                    </Link>
                  ) : (
                    <span className="text-secondary-fg font-secondary text-sm">
                      {item.value}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="lg:w-3/5 w-full flex flex-col gap-2 lg:px-4 lg:my-8 lg:overflow-y-scroll relative">
              <ContactForm />
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 w-full lg:h-full h-80 relative">
          <Link href={DIRECTIONS_URL} target="_blank" rel="noopener noreferrer">
            <Button
              className="absolute bottom-6 right-6 z-30"
              intent="secondary"
              size="extra-small"
            >
              Uzyskać wskazówki <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Mapbox
            config={{
              bearing: 280,
              boxZoom: true,
              interactive: true,
              center: data.coordinates,
              minZoom: 17,
              pitch: 70,
              zoom: 17,
            }}
            id={data.id}
            isMarked={true}
            mapContainerStyle="size-full z-20"
            isMobile={isMobile}
          />
        </div>
      </div>
    </section>
  );
}
