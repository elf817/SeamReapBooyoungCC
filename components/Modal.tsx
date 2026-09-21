"use client";

import { ReactNode } from "react";

export default function Modal({
  open,
  onClose,
  title,
  children,
  className = "",
}: {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] bg-deep-deep/70 flex items-center justify-center p-5" onClick={onClose}>
      <div
        className={`relative bg-bg max-w-[560px] w-full max-h-[90vh] overflow-y-auto p-8 ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          {title ? <h2 className="font-kr-heading text-[18px] text-deep">{title}</h2> : <div />}
          <button onClick={onClose} aria-label="닫기" className="text-muted-2 hover:text-ink text-[20px] leading-none">
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
