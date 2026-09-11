"use client";

import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { adminLogin, adminLogout, adminMe } from "@/lib/api";

interface AdminAuthValue {
  isAdmin: boolean;
  checking: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AdminAuthContext = createContext<AdminAuthValue | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    adminMe()
      .then((res) => setIsAdmin(res.authenticated))
      .catch(() => setIsAdmin(false))
      .finally(() => setChecking(false));
  }, []);

  const login = useCallback(async (username: string, password: string) => {
    await adminLogin(username, password);
    setIsAdmin(true);
  }, []);

  const logout = useCallback(async () => {
    await adminLogout().catch(() => {});
    setIsAdmin(false);
  }, []);

  return <AdminAuthContext.Provider value={{ isAdmin, checking, login, logout }}>{children}</AdminAuthContext.Provider>;
}

export function useAdminAuth(): AdminAuthValue {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) {
    throw new Error("useAdminAuth must be used within AdminAuthProvider");
  }
  return ctx;
}
