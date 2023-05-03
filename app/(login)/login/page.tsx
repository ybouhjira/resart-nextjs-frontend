import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { LoginButtons } from "@/app/(login)/login/LoginButtons";

export default async function AdminLoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/admin");
  }

  return (
    <div className="flex flex-col flex-center gap-4 h-full">
      <h1 className="text-3xl">Login</h1>
      <LoginButtons />
    </div>
  );
}
