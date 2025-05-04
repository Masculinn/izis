import { FC } from "react";
import { Button, Card } from "./ui";
import { ServiceCardProps } from "@/interfaces";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const ServiceCard: FC<ServiceCardProps> = (props) => {
  const { desc, href, title, id } = props;

  return (
    <Card className="size-full rounded-lg border-accent/15 relative translate-y-2 hover:translate-y-0 transition-all duration-200 ease-in-out ">
      <Card.Header>
        <Card.Title className="font-secondary flex flex-row gap-2 text-start items-center justify-start">
          <props.icon className="size-7 shrink-0" />
          {title}
        </Card.Title>
        <Card.Description className="tracking-tight text-left text-xs font-bold">
          IZIS - Usługi {id}
        </Card.Description>{" "}
      </Card.Header>
      <Card.Content className="text-xs -mt-2 text-left">{desc}</Card.Content>
      <Card.Footer className="-mt-2">
        <Link href={href}>
          <Button intent="secondary" shape="circle" size="small">
            <span>Czytaj więcej</span>
            <ArrowRight className="w-4 h-4 " />
          </Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};
