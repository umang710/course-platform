import { useState } from "react";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";
import { Button } from "@/components/ui/button";

export default function TrainerDashboard() {
  const [assigned, setAssigned] = useState(
    JSON.parse(localStorage.getItem("assignedCourses") || "{}"),
  );

  const assignCourse = (courseId) => {
    const updated = { ...assigned, [courseId]: "assigned" };
    setAssigned(updated);
    localStorage.setItem("assignedCourses", JSON.stringify(updated));
  };

  const unassignCourse = (courseId) => {
    const updated = { ...assigned };
    delete updated[courseId];
    setAssigned(updated);
    localStorage.setItem("assignedCourses", JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar role="trainer" />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-semibold text-slate-800 mb-2">
          Manage Courses
        </h1>
        <p className="text-slate-500 mb-8">
          Assign, unassign, and track completion
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => {
            const status = assigned[course.id];

            return (
              <CourseCard key={course.id} course={course}>
                {status === "completed" && (
                  <div className="mt-3 text-sm font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md px-3 py-1">
                    ✔ Completed by trainee
                  </div>
                )}

                {!status && (
                  <Button
                    onClick={() => assignCourse(course.id)}
                    className="w-full mt-4 bg-primary text-black border border-slate-900 hover:bg-primary-hover transition-all"
                  >
                    Assign Course
                  </Button>
                )}

                {status === "assigned" && (
                  <Button
                    variant="outline"
                    onClick={() => unassignCourse(course.id)}
                    className="w-full mt-4 border-red-300 text-red-600 hover:bg-red-50"
                  >
                    Unassign
                  </Button>
                )}
              </CourseCard>
            );
          })}
        </div>
      </main>
    </div>
  );
}
