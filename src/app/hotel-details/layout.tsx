import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" flex flex-col">
      {/* Header */}

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">{children}</main>
    </div>
  );
}
