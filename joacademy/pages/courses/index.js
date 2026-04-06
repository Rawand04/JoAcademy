import { useEffect, useState } from "react";
import Link from "next/link";
import CourseCard from "@/components/course-card";
import Search from "@/components/search";
import FilterFields from "@/components/filter-fields";

export default function CoursesPage() {
  let apiUrl = "https://admin.joacademy.net/api/v1/courses-filter?";
  const [data, setData] = useState([]);
  const [courseId, setCourseId] = useState(null);
  const [sectionId, setSectionId] = useState(null);
  const [teacherId, setTeacherId] = useState(null);
  const [programId, setProgramId] = useState(null);
  const [api, setApi] = useState(`${apiUrl}`);

  const page = 1;
  const perPage = 12;

  function handleFilteredData(data) {
    setData(data);
  }

  useEffect(() => {
   
    if (!programId) {
      apiUrl += `&categories[]=1709`;
    } else {
      apiUrl += `&categories[]=${programId}`;
    }

    if (sectionId) {
      apiUrl += `&subcategories[]=${sectionId}`;
    }

    if (courseId) {
      apiUrl += `&subjects[]=${courseId}`;
    }

    if (teacherId) {
      apiUrl += `&teachers[]=${teacherId}`;
    }

    setApi(apiUrl);
  }, [programId, sectionId, courseId, teacherId]);

  //fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetch from: ", api);
        const response = await fetch(api, {
          headers: {
            Accept: "application/json",
            program: 1,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const result = await response.json();
        setData(result.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [api]);

  function handleProgramFromChild(data) {
    setProgramId(data);
    console.log(data);
    // console.log(apiUrl);
  }

  function handleSectionFromChild(data) {
    setSectionId(data);
    console.log(data);
  }

  function handleCourseFromChild(data) {
    setCourseId(data);
    console.log(data);
  }

  function handleTeacherFromChild(data) {
    setTeacherId(data);

    console.log(data);
  }

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

      <Search courses={data} onFilter={handleFilteredData} />

      <FilterFields
        sendCourseToParent={handleCourseFromChild}
        sendProgramToParent={handleProgramFromChild}
        sendSectionToParent={handleSectionFromChild}
        sendTeacherToParent={handleTeacherFromChild}
      />
      {/* Courses */}
      <div className="flex flex-wrap gap-6 justify-center">
        {data.map((course) => (
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
    </div>
  );
}
