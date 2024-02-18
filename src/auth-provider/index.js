"use client";

import { GlobalContext } from "@/context";

import { SessionProvider } from "next-auth/react";

export default function NextAuthProvider({ children }) {
    return <SessionProvider>{children}</SessionProvider>;
}