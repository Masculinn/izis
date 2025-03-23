import { useEffect, useRef, useState } from "react";
import { motion as m, AnimatePresence } from "motion/react";
import Link from "next/link";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import routes from "@/config/routes";
import Image from "next/image";
import { secondaryFont } from "@/config/fonts";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useOutsideClick(ref, () => setMobileMenuOpen(false));

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) setActiveMenu(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed transition-all duration-200 will-change-auto w-full z-[888] 
        ${mobileMenuOpen && "backdrop-blur-lg md:backdrop-blur-none"} 
        ${isScrolled && "bg-bg backdrop-blur-md"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex w-full ${
            isScrolled ? "h-16" : "h-24"
          } transition-all duration-200`}
        >
          <div className="flex justify-between items-center w-full">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src={"/logo.png"}
                  priority
                  height={isScrolled ? 48 : 64}
                  width={isScrolled ? 80 : 100}
                  className="transition-all duration-200"
                  alt="Izis Logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:space-x-8">
              {routes.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    className={`inline-flex cursor-pointer items-center px-1 pt-1 text-sm  font-medium h-16 ${
                      !isScrolled
                        ? "text-white hover:text-secondary"
                        : "text-secondary-fg hover:text-secondary"
                    }  transition-colors border-b-2
                    ${
                      activeMenu === item.title
                        ? "border-secondary text-secondary"
                        : "border-transparent"
                    }`}
                  >
                    {item.title}
                    {item.items && <ChevronDown className="ml-2 h-4 w-4" />}
                  </button>

                  <AnimatePresence>
                    {activeMenu === item.title && item.items && (
                      <m.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 w-screen max-w-3xl bg-black/90 backdrop-blur-md text-white shadow-lg rounded-lg mt-4 py-4 px-4 z-[1000]"
                      >
                        <div
                          className={`grid ${
                            item.items.length > 4
                              ? "grid-cols-3"
                              : "grid-cols-2"
                          } gap-4`}
                        >
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.src}
                              className="p-6 rounded-lg group hover:bg-white/20  transition-colors"
                            >
                              <h2
                                className={`${secondaryFont.className} group-hover:text-secondary tracking-tight`}
                              >
                                {subItem.title}
                              </h2>
                              <p className="mt-1 text-sm text-primary/80">
                                {subItem.desc}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className={`
                inline-flex 
                ${mobileMenuOpen && "text-secondary"} 
                items-center justify-center p-2 text-primary hover:text-secondary cursor-pointer`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            ref={ref}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="lg:hidden bg-gradient-to-b from-bg/bg to-secondary/60  rounded-b-4xl relative"
          >
            <div className="pt-4 pb-3 space-y-1 ">
              {routes.map((item) => (
                <div key={item.title}>
                  <button
                    onClick={() =>
                      setActiveMenu(
                        activeMenu === item.title ? null : item.title
                      )
                    }
                    className={`w-full cursor-pointer flex items-center justify-between px-4 py-2 text-base font-medium ${
                      isScrolled && mobileMenuOpen ? "text-fg" : "text-white"
                    } hover:text-gray-900`}
                  >
                    <div className="flex items-center">{item.title}</div>
                    {item.items && (
                      <ChevronDown
                        className={`h-5 w-5 text-secondary duration-200 transition-transform ${
                          activeMenu === item.title && "rotate-180"
                        }`}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {activeMenu === item.title && item.items && (
                      <m.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <div className="px-4 py-2 space-y-1">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.src}
                              className={`px-3 py-1 rounded-md text-base ${
                                isScrolled && mobileMenuOpen
                                  ? "text-fg"
                                  : "text-white"
                              } items-center justify-start flex flex-row gap-2`}
                            >
                              <span>{subItem.title}</span>
                              <ArrowUpRight className="size-4" />
                            </Link>
                          ))}
                        </div>
                      </m.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
