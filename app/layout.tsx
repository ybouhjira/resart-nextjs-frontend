import "./globals.css";
import { Lora } from "@next/font/google";
import Header from "@/app/components/Header/Header";
import { Footer } from "@/app/components/Footer/Footer";

const loraFont = Lora({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${loraFont.className} h-full`}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="flex flex-col h-full">
        <Header />
        <main className="grow-[5]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
