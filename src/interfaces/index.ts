/** config interfaces starts */

export interface RouteItemProps {
  src: string;
  title: string;
  items?: RouteItemsProps[];
  icon: React.ElementType;
}

export interface RouteItemsProps {
  src: string;
  title: string;
  desc: string;
  icon: React.ElementType;
}

/** config interfaces ends */

/** db interfaces starts */
/** db interfaces ends */

/** sections interfaces starts */
/** sections interfaces ends */

/** service interfaces starts */
/** service interfaces ends */

/** component interfaces starts */

export interface SlideItemProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}
/** component interfaces ends */
