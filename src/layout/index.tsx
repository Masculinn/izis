import Footer from "@/sections/footer";
import Header from "@/sections/header";
import { primaryFont, brandFont } from "@/config/fonts";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main
        className={`overflow-y-scroll px-8 w-full h-screen ${primaryFont.className} ${brandFont.variable}`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
