"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer/Footer";
import HeaderWrapper from "@/components/navigation/HeaderWrapper";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  // Define authentication pages (matching HeaderWrapper logic)
  const authRoutes = ["/signIn", "/signup", "/forgot-password"];

  return (
    <>
      <HeaderWrapper />
      {children}
      {!authRoutes.includes(pathname) && <Footer />}{" "}
      {/* ✅ Footer only on non-auth pages */}
    </>
  );
};

export default LayoutWrapper;
