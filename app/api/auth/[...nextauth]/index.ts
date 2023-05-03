import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FaceProvider from "next-auth/providers/facebook";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FaceProvider({
      clientId: process.env.FACE_CLIENT_ID as string,
      clientSecret: process.env.FACE_CLIENT_SECRET as string,
    }),
  ],
};

export default NextAuth(authOptions);
