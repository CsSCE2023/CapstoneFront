import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24">
      {children}
    </main>
  );
}
