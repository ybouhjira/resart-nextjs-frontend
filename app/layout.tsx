import "./globals.css";
import { Lora } from '@next/font/google'

const loraFont = Lora({ subsets: ['latin'] })

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
      <body style={{padding: '0 25px'}}>
      <h1 className="text-[60px] mb-10">Resart</h1>
      {children}
      </body>
    </html>
  );
}
