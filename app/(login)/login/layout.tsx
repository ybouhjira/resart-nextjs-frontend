import "@/app/globals.css";

import Providers from "@/app/(admin)/admin/providers";
import { Heebo } from "@next/font/google";

const font = Heebo({ subsets: ["latin"] });

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${font.className} h-full`}>
      <head>
        <title>Resart</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1"
        />
      </head>
      <body className="flex flex-col h-full bg-white overflow-x-hidden">
        <main className="grow-[5]">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
