import "@/app/globals.css";
import { Heebo } from "@next/font/google";
import { AdminSideMenuItem } from "@/app/(admin)/admin/adminSideMenuItem";
import { useGetProducts } from "@/app/(main)/products/useGetProducts";

const font = Heebo({ subsets: ["latin"] });

export default async function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode;
}) {
  const products = await useGetProducts();

  return (
    <html lang="en" className={`${font.className} h-full`}>
    <head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1"
      />
    </head>
    <body className="flex flex-col h-full bg-white overflow-x-hidden">

    <main className="grow-[5]">
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <AdminSideMenuItem text="Products" count={products.length} url="/admin/products" />
          </ul>
        </div>
      </aside>
      <div className="p-4 sm:ml-64">
        {children}
      </div>
    </main>

    </body>
    </html>
  );
}
