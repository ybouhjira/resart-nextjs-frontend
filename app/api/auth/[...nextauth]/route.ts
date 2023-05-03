import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { authOptions } from "@/app/api/auth/[...nextauth]/index";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
