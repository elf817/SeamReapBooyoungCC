"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { adminLogout, adminMe } from "@/lib/api";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (pathname === "/admin/login") {
      setChecked(true);
      return;
    }
    let cancelled = false;
    adminMe()
      .then((res) => {
        if (!cancelled && !res.authenticated) router.replace("/admin/login");
      })
      .catch(() => {
        if (!cancelled) router.replace("/admin/login");
      })
      .finally(() => {
        if (!cancelled) setChecked(true);
      });
    return () => {
      cancelled = true;
    };
  }, [pathname, router]);

  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  if (!checked) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[14px] text-muted-2">확인 중…</div>
    );
  }

  const handleLogout = async () => {
    await adminLogout().catch(() => {});
    router.replace("/admin/login");
  };

  return (
    <div className="min-h-screen bg-bg">
      <header className="flex items-center justify-between px-6 sm:px-12 py-5 border-b border-deep/15">
        <div className="flex items-center gap-8">
          <span className="font-kr-heading text-[16px] text-deep">관리자</span>
          <nav className="flex gap-5 text-[13.5px] text-ink-soft">
            <Link href="/admin/notices" className={pathname.startsWith("/admin/notices") ? "text-deep font-medium" : ""}>
              공지사항
            </Link>
            <Link href="/admin/inquiries" className={pathname.startsWith("/admin/inquiries") ? "text-deep font-medium" : ""}>
              문의게시판
            </Link>
          </nav>
        </div>
        <button onClick={handleLogout} className="text-[13px] text-muted-2 border-b border-muted-3">
          로그아웃
        </button>
      </header>
      <main className="px-6 sm:px-12 py-10">{children}</main>
    </div>
  );
}
