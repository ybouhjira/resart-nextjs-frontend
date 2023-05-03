import { signOut } from "next-auth/react";
import MenuItem from "./MenuItem";
import SignOutIcon from "@/components/Icons/SignOutIcon";

export default function SignOutButton() {
  return (
    <MenuItem onClick={() => signOut()} label="Logout" icon={<SignOutIcon />} />
  );
}
