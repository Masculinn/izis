import { MOBILE_BREAKPOINT } from "@/lib/utils";
import { useEffect, useState } from "react";

/**
 * Hook to check if the user is on a mobile device
 * @returns {boolean} true if the user is on a mobile device
 * @example
 * const isMobile = useMobile();
 *
 **/
export const useMobile = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const match = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => setIsMobile(match.matches);

    match.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    return () => match.removeEventListener("change", onChange);
  }, []);

  return !!isMobile;
};
