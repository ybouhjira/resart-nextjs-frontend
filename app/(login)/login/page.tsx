import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { LoginButtons } from "@/app/(login)/login/LoginButtons";
import Logo from "@/app/components/Header/logo.svg";
import Link from "next/link";

export default async function AdminLoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/admin");
  }

  return (
    <div className="flex flex-col flex-center gap-4 h-full">
      <Link href="/" className="relative max-w-2xl">
        <Logo className="w-full" />
      </Link>
      <LoginButtons />
    </div>
  );
}
