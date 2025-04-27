import { Button, Card } from "@/components/ui";
import collobratorsLib from "@/lib/collobratorsLib";
import Link from "next/link";

export const Collobrators = () => {
  return (
    <section className="max-w-7xl mx-auto relative min-h-auto md:px-0 px-4 md:mt-16 mt-8">
      <h2 className="text-5xl md:text-6xl tracking-tighter font-secondary pb-2 text-center">
        Współpracujemy z naukowcami
      </h2>
      <div className="w-full h-auto flex flex-wrap items-center justify-center gap-4 mt-8 md:mt-12">
        {collobratorsLib.map((item, idx) => (
          <Card key={idx} className="w-full md:w-1/4 shrink-0 h-96">
            <Card.Header>
              <Card.Title className="font-secondary">{item.title}</Card.Title>
              <Card.Description>{item.desc}</Card.Description>
            </Card.Header>
            <Card.Footer>
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full" intent="secondary">
                  Wiecej
                </Button>
              </Link>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </section>
  );
};
