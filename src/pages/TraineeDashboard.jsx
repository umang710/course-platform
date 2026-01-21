import { useState } from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import { Button } from "@/components/ui/button";

export default function TraineeDashboard() {
  const [assigned, setAssigned] = useState(
    JSON.parse(localStorage.getItem("assignedCourses") || "{}"),
  );

  const completeCourse = (courseId) => {
    const updated = { ...assigned, [courseId]: "completed" };
    setAssigned(updated);
    localStorage.setItem("assignedCourses", JSON.stringify(updated));
  };

  const assignedCourses = courses.filter((course) => assigned[course.id]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar role="trainee" />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold text-slate-800 mb-2">
          My Courses
        </h1>
        <p className="text-slate-500 mb-8">Complete your assigned courses</p>

        {assignedCourses.length === 0 ? (
          <div className="text-slate-500">No courses assigned yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assignedCourses.map((course) => {
              const status = assigned[course.id];

              return (
                <CourseCard key={course.id} course={course}>
                  {status === "completed" ? (
                    <div className="mt-4 text-emerald-700 font-medium">
                      ✔ Completed
                    </div>
                  ) : (
                    <Button
                      onClick={() => completeCourse(course.id)}
                      className="w-full mt-4 bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
                    >
                      Mark as Completed
                    </Button>
                  )}
                </CourseCard>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
