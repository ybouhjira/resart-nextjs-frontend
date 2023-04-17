export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="px-md py-md md:py-xl">{children}</main>;
}
