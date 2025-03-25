import Footer from "@/sections/footer";
import Header from "@/sections/header";
import { Toaster } from "sonner";

export default function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      <Header />
      <main className={`${className}`}>{children}</main>
      <Footer />
      <Toaster />
    </>
  );
}
