"use client";

import PostContextProvider from "@/contexts/posts-context";
import { ReactNode } from "react";

export default function Providers({
    children,
}: {
    children: ReactNode | ReactNode[];
}) {
    return <PostContextProvider>{children}</PostContextProvider>;
}
