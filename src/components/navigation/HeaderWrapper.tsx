"use client"; // ✅ This makes it a client component

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import AuthHeader from "./authHeader";

const HeaderWrapper = () => {
  const pathname = usePathname(); // ✅ Now this works since it's a client component

  // Define auth pages
  const authRoutes = ["/signIn", "/signup", "/forgot-password"];

  return authRoutes.includes(pathname) ? <AuthHeader /> : <Navbar />;
};

export default HeaderWrapper;
