"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function AppShell({ children }) {
  const [ready, setReady] = useState(false);

  return (
    <SmoothScrollProvider>
      <CustomCursor />
      {!ready && <LoadingScreen onComplete={() => setReady(true)} />}
      <div
        className={`transition-opacity duration-500 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </SmoothScrollProvider>
  );
}
