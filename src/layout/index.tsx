import Footer from "@/sections/footer";
import Header from "@/sections/header";

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
    </>
  );
}
