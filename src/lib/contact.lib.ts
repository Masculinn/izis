import { ContactItemProps } from "@/interfaces";
import { Hash, Mail, MapPin, Phone, Printer } from "lucide-react";
import { ADDRESS, DIRECTIONS_URL } from "./utils";

export default [
  {
    icon: Phone,
    value: "(+48) 0 691 849 917 | Małgorzata Bienia ",
    href: "tel:+480691849917",
  },
  {
    icon: Phone,
    value: "(+48) 0 691 369 879 | Mieczysław Bienia",
    href: "tel:+480691369879",
  },
  {
    icon: Printer,
    value: "fax. (+48) 083 311 95 32",
    href: "tel:+480833119532",
  },
  {
    icon: Mail,
    value: "bienia.m@wp.pl",
    href: "mailto:bienia.m@wp.pl",
  },
  {
    icon: MapPin,
    value: ADDRESS,
    href: DIRECTIONS_URL,
  },
  {
    icon: Hash,
    value: "NIP. 537-158-47-42",
  },
  {
    icon: Hash,
    value: "Regon. 030300977",
  },
] satisfies ContactItemProps[];
