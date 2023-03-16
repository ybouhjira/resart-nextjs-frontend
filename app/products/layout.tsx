export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="py-xl">{children}</main>;
}
