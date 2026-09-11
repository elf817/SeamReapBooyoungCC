import { Suspense } from "react";
import NoticeEditClient from "@/components/admin/NoticeEditClient";

export default function AdminNoticeEditPage() {
  return (
    <Suspense>
      <NoticeEditClient />
    </Suspense>
  );
}
