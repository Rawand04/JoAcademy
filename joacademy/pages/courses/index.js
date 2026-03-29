import { useState } from "react";
import Link from "next/link";
import { FilterCourses } from "@/lib/util";
import CourseCard from "@/components/course-card";
import PaginationControls from "@/components/pagination-controls";

export default function CoursesPage({
  initialCourses,
  currentPage,
  totalPages,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = FilterCourses(initialCourses, searchQuery);

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-5">
        <Link href="/">Home</Link> {"\u203a"}{" "}
        <span className="text-gray-800 font-semibold">Courses - Tawjihi</span>
      </nav>

      {/* Title */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Courses - Tawjihi
        </h1>
        <p className="text-gray-500 text-sm">
          Here You Can Search For All Courses And Subscribe - Tawjihi
        </p>
      </div>

      {/* Search */}
      <div className="flex gap-2 mb-6 w-3/4 m-auto">
        <input
          placeholder="Search here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-3 text-sm bg-white"
        />

        <button className="bg-blue-800 text-white px-6 rounded-lg flex items-center gap-2">
          Filter
        </button>
      </div>

      {/* Courses */}
      <div className="flex flex-wrap gap-6 justify-center">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            teacherName={course.teacher?.name}
            teacherImage={course.teacher?.image}
            title={course.name}
            duration={course.duration}
            fees={course.price}
            courseImage={course.image}
            slug={course.slug}
          />
        ))}
      </div>

      {/* Pagination */}
      <PaginationControls currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const page = context.query.page || 1;
  const perPage = 12;

  try {
    const response = await fetch(
      `https://admin.joacademy.net/api/v1/courses-filter?search=&page=${page}&per_page=${perPage}&ordered=true`,
      {
        headers: {
          Accept: "application/json",
          program: 1,
        },
      }
    );

    const result = await response.json();

    return {
      props: {
        initialCourses: result.data.data,
        currentPage: result.data.current_page,
        totalPages: result.data.last_page,
      },
    };
  } catch (error) {
    return {
      props: {
        initialCourses: [],
        currentPage: 1,
        totalPages: 1,
      },
    };
  }
}