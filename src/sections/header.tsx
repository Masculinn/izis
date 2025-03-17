import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { MessageSquare, Menu, X, ChevronDown } from "lucide-react";
import routes from "@/config/routes";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (mobileMenuOpen) setActiveMenu(null);
  };

  return (
    <nav className="bg-white/50 backdrop-blur-lg border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <MessageSquare className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">IZIS</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
              {routes.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <button
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium h-16 text-gray-900 hover:text-primary transition-colors border-b-2
                    ${
                      activeMenu === item.title
                        ? "border-primary"
                        : "border-transparent"
                    }`}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.title}
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </button>

                  <AnimatePresence>
                    {activeMenu === item.title && item.items && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 w-screen max-w-screen-sm bg-white shadow-lg rounded-b-lg border mt-0 py-4 px-4"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.src}
                              className="p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <div className="font-medium text-gray-900">
                                {subItem.title}
                              </div>
                              <div className="mt-1 text-sm text-gray-500">
                                {subItem.desc}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
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
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden"
          >
            <div className="pt-2 pb-3 space-y-1">
              {routes.map((item) => (
                <div key={item.title}>
                  <button
                    onClick={() =>
                      setActiveMenu(
                        activeMenu === item.title ? null : item.title
                      )
                    }
                    className="w-full flex items-center justify-between px-4 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    <div className="flex items-center">
                      <item.icon className="h-5 w-5 mr-3 text-gray-400" />
                      {item.title}
                    </div>
                    <ChevronDown
                      className={`
                        "h-5 w-5 text-gray-400 transition-transform",
                        ${activeMenu === item.title && "rotate-180"}
                      `}
                    />
                  </button>

                  <AnimatePresence>
                    {activeMenu === item.title && item.items && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-4 py-2 space-y-1"
                      >
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.src}
                            className="block px-3 py-2 rounded-md text-base text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
