import { FC } from "react";
import { AboutServiceCardProps } from "@/interfaces";
import { Button, Card } from "../ui";
import { cn } from "@/lib/utils";
import { Link } from "react-aria-components";
import { ArrowRight } from "lucide-react";

export const ServiceCard: FC<AboutServiceCardProps> = (props) => {
  const { img, title, desc, href, id } = props;

  const checkSize = title.split(" ").length <= 5 ? "text-lg" : "text-md";

  return (
    <div className="w-80 h-full rounded-2xl border-primary relative bg-black">
      <div
        className="z-10 absolute top-0 left-0 size-full bg-cover bg-center bg-no-repeat rounded-lg"
        style={{ backgroundImage: `url(${img})` }}
      />
      <div className="z-20 absolute top-0 left-0 size-full bg-gradient-to-t from-black/75 to-transparent rounded-lg" />
      <Card
        className="z-30 absolute top-0 left-0 size-full p-8 items-start flex flex-col justify-end"
        style={{
          background: "none",
        }}
      >
        <Card.Title
          className={cn(checkSize, "font-bold", "font-secondary text-white")}
        >
          {title}
        </Card.Title>
        <Card.Description className="text-xs text-secondary">
          IZIS - Usługi {id}
        </Card.Description>
        <Card.Content className="text-xs items-start flex justify-start p-0 text-start text-stone-200 mt-2">
          {desc.split(" ").slice(0, 10).join(" ")}
          {desc.split(" ").length > 10 && "..."}
        </Card.Content>
        <Card.Footer className="p-0 mt-2">
          <Link href={href}>
            <Button intent="secondary" shape="circle" size="extra-small">
              <span>Czytaj więcej</span>
              <ArrowRight className="w-4 h-4 " />
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};
