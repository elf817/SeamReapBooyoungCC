import { Suspense } from "react";
import CoursePageClient from "@/components/CoursePageClient";

export default function CoursePage() {
  return (
    <Suspense>
      <CoursePageClient />
    </Suspense>
  );
}
