import "./globals.css";
import { Lora } from "@next/font/google";
import Link from "next/link";
import Header from "@/app/components/Header/Header";

const loraFont = Lora({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={loraFont.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        <main className="py-10">{children}</main>
      </body>
    </html>
  );
}
