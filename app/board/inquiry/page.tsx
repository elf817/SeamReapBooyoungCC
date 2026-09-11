import BoardShell from "@/components/BoardShell";
import InquiryListClient from "@/components/InquiryListClient";

export default function InquiryPage() {
  return (
    <BoardShell summary="문의게시판">
      <section className="px-24 sm:px-[21rem] pt-10 sm:pt-14 pb-16 sm:pb-[104px]">
        <InquiryListClient />
      </section>
    </BoardShell>
  );
}
