"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { adminLogin } from "@/lib/api";

const inputClass =
  "w-full px-4 py-3 bg-bg border border-deep/20 text-[14px] text-ink focus:outline-none focus:border-deep transition-colors";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await adminLogin(username, password);
      router.push("/admin/notices");
    } catch (err) {
      setError(err instanceof Error ? err.message : "로그인에 실패했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg px-5">
      <form onSubmit={handleSubmit} className="w-full max-w-[360px] flex flex-col gap-5">
        <h1 className="mb-2 font-kr-heading text-[22px] text-deep text-center">관리자 로그인</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="아이디"
          className={inputClass}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
          className={inputClass}
        />
        {error && <p className="text-[13px] text-[#b23b3b]">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="px-8 py-3 bg-deep text-bg text-[13.5px] tracking-[0.06em] hover:bg-deep-dark transition-colors disabled:opacity-50"
        >
          {submitting ? "로그인 중…" : "로그인"}
        </button>
      </form>
    </div>
  );
}
