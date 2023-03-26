import "./globals.css";
import { Heebo } from "@next/font/google";
import Header from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";

const font = Heebo({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${font.className} h-full`}>
      <head />
      <body className="flex flex-col h-full bg-white overflow-x-hidden">
        <Header />
        <main className="grow-[5]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
