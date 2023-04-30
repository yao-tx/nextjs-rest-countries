import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 text-black flex flex-col justify-start pb-28">{ children }</main>
      <Footer />
    </>
  );
}