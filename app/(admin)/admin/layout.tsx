import "@/app/globals.css";
import { Heebo } from "@next/font/google";
import AdminSideNavigation from "@/app/(admin)/admin/AdminSideNavigation/AdminSideNavigation";
import Providers from "@/app/(admin)/admin/providers";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

const font = Heebo({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session) {
    redirect("/login");
  }

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
          <AdminSideNavigation />
          <div className="p-4 sm:ml-64">
            <Providers>{children}</Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
