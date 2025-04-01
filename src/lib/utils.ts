import { Coordinates } from "@/interfaces";

const MOBILE_BREAKPOINT = 768,
  MEDIAN_COORDINAT: Coordinates = [0, 0],
  MAPBOX_MASK_STYLES = {
    mobileStyle: {
      maskImage: "none",
      WebkitMaskImage: "none",
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      maskSize: "contain",
      WebkitMaskSize: "contain",
    },
    desktopStyle: {
      aspectRatio: "1824/1425",
      backgroundColor: "--bg",
      maskImage:
        "url(\"data:image/svg+xml,%3Csvg width='160' height='122' viewBox='0 0 160 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 160 1.79086 160 4V14V28V99C160 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
      WebkitMaskImage:
        "url(\"data:image/svg+xml,%3Csvg width='160' height='122' viewBox='0 0 160 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 160 1.79086 160 4V14V28V99C160 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
      maskRepeat: "no-repeat",
      WebkitMaskRepeat: "no-repeat",
      maskSize: "contain",
      WebkitMaskSize: "contain",
    },
  },
  PROHIBITED_FOOTER_URL = "/discoveries",
  CAROUSEL_DELAY = 3000,
  MY_WEBSITE_LINK = "https://burakdev.com",
  MY_MOTION_PROVIDER = "https://burakdev.com/motion-provider";

export {
  MOBILE_BREAKPOINT,
  MEDIAN_COORDINAT,
  MAPBOX_MASK_STYLES,
  PROHIBITED_FOOTER_URL,
  CAROUSEL_DELAY,
  MY_WEBSITE_LINK,
  MY_MOTION_PROVIDER,
};
