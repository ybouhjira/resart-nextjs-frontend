"use client";

import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <QueryClientProvider client={new QueryClient()}>
        {children}
      </QueryClientProvider>
    </SessionProvider>
  );
}
