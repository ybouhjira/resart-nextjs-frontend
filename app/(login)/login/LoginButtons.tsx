"use client";
import { signIn } from "next-auth/react";
import GoogleIcon from "@/components/Icons/GoogleIcon";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import cx from "classnames";

export function LoginButtons() {
  const classes =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full flex items-center justify-center gap-2";

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button className={classes} onClick={() => signIn("google")}>
        <GoogleIcon color="white" className="w-md" /> Login with google
      </button>

      <button
        className={cx(classes, "bg-gray-500 pointer-events-none")}
        onClick={() => signIn("facebook")}
        disabled
      >
        <FacebookIcon color="white" className="w-md" />
        Login with Facebook
      </button>
    </div>
  );
}
