"use client";

import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { ReactElement, useEffect } from "react";
import GoogleIcon from "@/components/Icons/GoogleIcon";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import Spinner from "@/components/Spinner";

export default function AdminLoginPage(): ReactElement {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading")
    return (
      <div className="h-full flex-center">
        <Spinner />
      </div>
    );

  if (session) {
    return (
      <div>
        You are already logged in as {session.user?.name}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => router.push("/admin")}
        >
          Go to admin
        </button>
      </div>
    );
  }

  const tailWindButtonClasses =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center gap-2";
  return (
    <div className="flex flex-col flex-center gap-4 h-full">
      <h1 className="text-3xl">Login</h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <button
          className={tailWindButtonClasses}
          onClick={() => signIn("google")}
        >
          <GoogleIcon color="white" className="w-md" /> Login with google
        </button>

        <button
          className={tailWindButtonClasses}
          onClick={() => signIn("facebook")}
        >
          <FacebookIcon color="white" className="w-md" />
          Login with Facebook
        </button>
      </div>
    </div>
  );
}
