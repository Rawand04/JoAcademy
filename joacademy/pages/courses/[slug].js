import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function CoursePage() {
  const router = useRouter();
  const { teacher, title, price, teacherImage } = router.query;

  const [isClasses, setIsClasses] = useState(true);

  return (
    <div className="px-6 lg:px-16 py-10 bg-gray-50 min-h-screen">
      {/* breadcrumb */}
      <div className="mb-6">
        <ul className="flex gap-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-blue-700 font-medium">
              Home
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-800 font-semibold">Course Details</li>
        </ul>
      </div>

      {/* titles */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800">
          Courses Details
        </h1>
      </div>

      {/* Course Details */}
      <div className="bg-white rounded-2xl shadow-md p-6 grid lg:grid-cols-3 gap-8">
        {/* teacher image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={teacherImage}
            alt="teacher"
            className="w-32 h-32 rounded-full object-cover border"
          />
        </div>

        {/* middle section */}
        <div className="flex flex-col gap-3">
          <div className="text-lg font-semibold text-gray-700">
            {teacher}
          </div>

          <div className="text-2xl font-bold text-gray-900">{title}</div>

          <div className="flex gap-3 mt-2">
            <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-blue-600 hover:text-white transition">
              Share
            </button>
            <button className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-red-500 hover:text-white transition">
              Like
            </button>
          </div>

          <div className="text-sm text-gray-500 mt-4">
            Course end date: The course ends on the date of the subjects
            ministry exam.
          </div>
        </div>

        {/* right section */}
        <div className="flex flex-col gap-4 justify-between">
          <div className="text-xl font-bold text-blue-700">
            {price} JD
          </div>

          <button className="w-full py-3 rounded-xl bg-blue-700 text-white font-semibold hover:bg-blue-800 transition">
            Get the Course
          </button>

          <div>
            <video
              className="w-full rounded-xl"
              controls
            >
              <source src="movie.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Classes and files */}
      <div className="mt-10 bg-white rounded-2xl shadow-md p-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setIsClasses(true)}
            disabled={isClasses}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              isClasses
                ? "bg-blue-700 text-white"
                : "bg-gray-100 hover:bg-blue-600 hover:text-white"
            }`}
          >
            Classes
          </button>

          <button
            onClick={() => setIsClasses(false)}
            disabled={!isClasses}
            className={`px-6 py-2 rounded-lg font-medium transition ${
              !isClasses
                ? "bg-blue-700 text-white"
                : "bg-gray-100 hover:bg-blue-600 hover:text-white"
            }`}
          >
            Files
          </button>
        </div>

        {isClasses && (
          <div className="text-gray-700">Classes</div>
        )}

        {!isClasses && (
          <div className="text-gray-500">
            When you register for the course, you will be able to view the files.
          </div>
        )}
      </div>
    </div>
  );
}