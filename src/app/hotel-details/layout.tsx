import React from "react";
import HeroSearch from "@/components/heroSearchBar/HeroSearch";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex flex-col">
      {/* Header */}
      <header>
        <HeroSearch />
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">{children}</main>
    </div>
  );
}
