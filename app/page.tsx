"use client";

import { Metadata } from "next";
import { useState } from "react";

export const metadata: Metadata = {
  title: "Hello",
};

export default function Page() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <main className="flex flex-col h-screen items-center justify-center px-4 md:px-8 gap-8">
      <h1 className="text-4xl font-bold text-slate-900 md:text-6xl">Hello</h1>
      <button
        type="button"
        onClick={() => setIsClicked(!isClicked)}
        aria-label="Click button to interact"
        className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 active:bg-slate-700 transition-colors duration-200 text-sm md:text-base"
      >
        Click Me
      </button>
    </main>
  );
}