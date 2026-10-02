"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { FAMILY_LINKS } from "@/lib/data";
import { useAdminAuth } from "@/components/AdminAuthContext";
import { useLanguage } from "@/components/LanguageContext";
import Modal from "@/components/Modal";

const inputClass =
  "w-full px-4 py-3 bg-bg border border-deep/20 text-[14px] text-ink focus:outline-none focus:border-deep transition-colors";

function AdminLoginModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { login } = useAdminAuth();
  const { lang } = useLanguage();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await login(username, password);
      setUsername("");
      setPassword("");
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : lang === "en" ? "Login failed." : "로그인에 실패했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} title={lang === "en" ? "Admin Login" : "관리자 로그인"}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={lang === "en" ? "Username" : "아이디"}
          className={inputClass}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={lang === "en" ? "Password" : "비밀번호"}
          className={inputClass}
        />
        {error && <p className="text-[13px] text-[#b23b3b]">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-3 bg-deep text-bg text-[13.5px] tracking-[0.06em] hover:bg-deep-dark transition-colors disabled:opacity-50"
        >
          {submitting ? (lang === "en" ? "Signing in…" : "로그인 중…") : lang === "en" ? "Login" : "로그인"}
        </button>
      </form>
    </Modal>
  );
}

export default function Footer() {
  const { isAdmin, checking, logout } = useAdminAuth();
  const { lang } = useLanguage();
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <footer className="bg-deep-deep text-bg/70">
      <div className="relative flex flex-col items-center gap-6 px-5 sm:px-12 py-[21px] sm:py-[29px]">
        <div className="text-center">
          <div className="text-[13px] leading-[1.9] font-light">
            SIEM REAP BOOYOUNG C.C.&nbsp; Lolei Village, Bakong Commune, Prasat Bakong, Siem Reap, Cambodia
          </div>
          <div className="text-[13px] leading-[1.9] font-light">
            CONTACT&nbsp; +855 92 635 765
          </div>
        </div>

        <div className="flex items-center gap-4 sm:absolute sm:right-12 sm:top-1/2 sm:-translate-y-1/2">
          <div className="flex items-center gap-2.5">
            <span className="text-[15px] text-bg/70">{lang === "en" ? "Follow us" : "Follow us"}</span>
            <a
              href="https://www.facebook.com/siemreapbooyoungcountryclub"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden border border-white bg-white"
            >
              <Image src="/images/icons/facebook.png" alt="Facebook" width={40} height={40} className="w-[37px] h-[37px] object-contain" />
            </a>
            <a
              href="https://www.youtube.com/@SiemReapBYCC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden border border-white bg-white"
            >
              <Image src="/images/icons/youtube.png" alt="YouTube" width={40} height={40} className="w-[37px] h-[37px] object-contain" />
            </a>
            <a
              href="https://www.instagram.com/siemreapbooyoungcc/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-9 h-9 rounded-full overflow-hidden border border-white bg-white"
            >
              <Image src="/images/icons/instagram.png" alt="Instagram" width={40} height={40} className="w-[37px] h-[37px] object-contain" />
            </a>
          </div>
          <select
            className="w-[220px] px-3 py-2 bg-transparent border border-bg/25 text-bg text-[13px] cursor-pointer"
            defaultValue=""
            onChange={(e) => {
              if (e.target.value) window.open(e.target.value, "_blank", "noopener,noreferrer");
              e.target.value = "";
            }}
          >
            <option value="" disabled className="text-ink">
              Family Link
            </option>
            {FAMILY_LINKS.map((f) => (
              <option key={f.url} value={f.url} className="text-ink">
                {f.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 px-5 py-[16px] border-t border-bg/[0.14] text-[11.5px] text-bg/40 text-center">
        <span>© 2026 Siem Reap Booyoung Country Club. All rights reserved.</span>
        <span className="text-bg/20">|</span>
        {!checking && isAdmin ? (
          <button onClick={() => logout()} className="hover:text-bg/70 transition-colors">
            {lang === "en" ? "Logout" : "로그아웃"}
          </button>
        ) : (
          <button onClick={() => setLoginOpen(true)} className="hover:text-bg/70 transition-colors">
            {lang === "en" ? "Admin" : "관리자"}
          </button>
        )}
      </div>

      <AdminLoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </footer>
  );
}
