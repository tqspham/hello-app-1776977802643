import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center px-4 md:px-8">
      <h1 className="text-4xl font-bold text-slate-900 md:text-6xl">Hello</h1>
    </main>
  );
}