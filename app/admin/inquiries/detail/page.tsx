import { Suspense } from "react";
import InquiryAdminDetailClient from "@/components/admin/InquiryAdminDetailClient";

export default function AdminInquiryDetailPage() {
  return (
    <Suspense>
      <InquiryAdminDetailClient />
    </Suspense>
  );
}
