"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AdminAuthProvider } from "@/components/AdminAuthContext";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <AdminAuthProvider>
      <Header />
      {children}
      <Footer />
    </AdminAuthProvider>
  );
}
