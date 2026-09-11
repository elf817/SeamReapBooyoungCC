import BoardShell from "@/components/BoardShell";
import NoticeListClient from "@/components/NoticeListClient";

export default function NoticePage() {
  return (
    <BoardShell summary="공지사항">
      <section className="px-24 sm:px-[21rem] pt-10 sm:pt-14 pb-16 sm:pb-[104px]">
        <NoticeListClient />
      </section>
    </BoardShell>
  );
}
