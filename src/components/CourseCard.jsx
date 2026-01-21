import { Card, CardContent } from "@/components/ui/card";

export default function CourseCard({ course, children }) {
  return (
    <Card
      className="
        bg-white
        border border-slate-200
        shadow-sm
        transition-all duration-200
        hover:-translate-y-1
        hover:shadow-xl
        hover:border-primary/40
      "
    >
      <CardContent className="p-5">
        <h3 className="text-lg font-semibold text-slate-800">{course.title}</h3>

        <span
          className="
          inline-block mt-2
          text-xs font-medium
          px-2 py-1 rounded
          bg-primary/10 text-primary
        "
        >
          {course.level}
        </span>

        {children && <div className="mt-4">{children}</div>}
      </CardContent>
    </Card>
  );
}
