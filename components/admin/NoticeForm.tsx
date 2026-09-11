"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { createNotice, updateNotice, type NoticeDetail } from "@/lib/api";

const inputClass =
  "w-full px-4 py-3 bg-bg border border-deep/20 text-[14px] text-ink focus:outline-none focus:border-deep transition-colors";

export default function NoticeForm({ initial, onSuccess }: { initial?: NoticeDetail; onSuccess?: () => void }) {
  const router = useRouter();
  const [title, setTitle] = useState(initial?.title ?? "");
  const [body, setBody] = useState(initial?.body ?? "");
  const [pinned, setPinned] = useState(initial?.pinned ?? false);
  const [photos, setPhotos] = useState<File[]>([]);
  const [removeImageIds, setRemoveImageIds] = useState<number[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const toggleRemoveImage = (id: number) => {
    setRemoveImageIds((ids) => (ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id]));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) {
      setError("제목과 내용을 입력해 주세요.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      if (initial) {
        await updateNotice({ id: initial.id, title, body, pinned, photos, removeImageIds });
      } else {
        await createNotice({ title, body, pinned, photos });
      }
      if (onSuccess) {
        onSuccess();
      } else {
        router.push("/admin/notices");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "저장에 실패했습니다.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-[720px]">
      <div>
        <label className="block mb-2 text-[11px] tracking-[0.22em] text-bronze">제목</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className={inputClass} />
      </div>

      <div>
        <label className="block mb-2 text-[11px] tracking-[0.22em] text-bronze">내용</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} rows={10} className={inputClass} />
      </div>

      <label className="flex items-center gap-2 text-[13.5px] text-ink-soft">
        <input type="checkbox" checked={pinned} onChange={(e) => setPinned(e.target.checked)} />
        상단 고정
      </label>

      {initial && initial.images.length > 0 && (
        <div>
          <label className="block mb-2 text-[11px] tracking-[0.22em] text-bronze">기존 사진 (체크 시 삭제)</label>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {initial.images.map((img) => (
              // eslint-disable-next-line @next/next/no-img-element
              <label key={img.id} className="relative aspect-square overflow-hidden cursor-pointer block">
                <img src={img.url} alt={img.originalName ?? ""} className="absolute inset-0 w-full h-full object-cover" />
                <input
                  type="checkbox"
                  checked={removeImageIds.includes(img.id)}
                  onChange={() => toggleRemoveImage(img.id)}
                  className="absolute top-2 right-2 w-5 h-5"
                />
                {removeImageIds.includes(img.id) && <div className="absolute inset-0 bg-deep-deep/60" />}
              </label>
            ))}
          </div>
        </div>
      )}

      <div>
        <label className="block mb-2 text-[11px] tracking-[0.22em] text-bronze">사진 추가 (최대 6장)</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setPhotos(Array.from(e.target.files ?? []))}
          className="text-[13.5px]"
        />
      </div>

      {error && <p className="text-[13px] text-[#b23b3b]">{error}</p>}

      <div className="flex gap-3 mt-2">
        <button
          type="submit"
          disabled={submitting}
          className="px-8 py-3 bg-deep text-bg text-[13.5px] tracking-[0.06em] hover:bg-deep-dark transition-colors disabled:opacity-50"
        >
          {submitting ? "저장 중…" : "저장"}
        </button>
      </div>
    </form>
  );
}
