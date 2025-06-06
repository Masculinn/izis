import { ContactForm } from "@/components/contact-form";
import Mapbox from "@/components/mapbox/mapbox";
import MotionContainer from "@/components/motion/motion-container";
import { Card } from "@/components/ui";
import { useMobile } from "@/hooks/use-mobile";
import markerLib from "@/lib/markerLib";
import { cn } from "@/lib/utils";
import { FC } from "react";

const Contact: FC<{ className?: string }> = ({ className }) => {
  const isMobile = useMobile();
  const data = markerLib[0];

  return (
    <section
      className={cn(
        "py-24 h-auto w-full relative overflow-hidden items-center justify-center mx-auto max-w-7xl",
        className
      )}
    >
      <div className="w-full items-center justify-center flex lg:flex-row flex-col gap-4 lg:h-[500px] h-auto">
        <div className="lg:w-1/2 w-full lg:h-full h-auto lg:px-0 px-6 justify-center flex flex-col">
          <MotionContainer
            animation={{
              mode: ["filterBlurIn", "fadeUp"],
              transition: "cubicBounce",
              duration: 1.5,
            }}
            elementType={"h3"}
            className="font-secondary lg:text-6xl text-4xl"
          >
            Kontakt
          </MotionContainer>
          <p className="mt-2 tracking-tight">
            Masz pytania dotyczące naszych badań lub chciał{"(a)"}byś nawiązać
            współpracę? Biuro znajduję się w Białej Podlaskiej, a nasze projekty
            realizujemy na terenie całej Polski. Chętnie umówimy się na
            spotkanie.
          </p>
          <ContactForm className="mt-8 mx-1" />
        </div>
        <div className=" lg:w-1/2 w-full lg:h-full h-[300px] p-8">
          <Card className="w-full h-full relative border-none">
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
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
