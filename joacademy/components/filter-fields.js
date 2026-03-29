import { useEffect, useState } from "react";

export default function FilterFields() {
  const courses = [
    { id: 1, name: "Math" },
    { id: 2, name: "English" },
  ];
  const teachers = {
    Math: [1, 2, 3, 4],
    English: ["a", "b", "c"],
  };
  const [selectedCourses, setSelectedCourses] = useState("");
  const [selectedTeachers, setSelectedTeachers] = useState("");
  const [availableTeachers, setAvailableTeachers] = useState([]);

  function handleCourseChange(e) {
    const course = e.target.value;
    setSelectedCourses(course);
    setAvailableTeachers(teachers[course] || []);
    setSelectedTeachers("");
  }

  function handleTeacherChange(e) {
    setSelectedTeachers(e.target.value);
  }

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          "https://admin.joacademy.net/api/v1/courses-filter?search=&page=1&per_page=5&ordered=true",
        );
        const data = await res.json();
        console.log(data.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, [selectedCourses]);

  return (
    <>
      <div className="text-center text-3xl">
        <h1 className="font-extrabold text-5xl p-10">
          Dependent Dropdown Example
        </h1>

        {/* Country Dropdown */}
        <label htmlFor="courses" className="font-bold">
          Select courses:{" "}
        </label>
        <select
          id="courses"
          value={selectedCourses}
          onChange={handleCourseChange}
        >
          <option value="">Select a course</option>
          {courses.map((courses) => (
            <option key={courses.id} value={courses.name}>
              {courses.name}
            </option>
          ))}
        </select>

        {
          <>
            <label htmlFor="teacher" className="font-bold">
              Select teacher:{" "}
            </label>
            <select
              id="teacher"
              value={selectedTeachers}
              onChange={handleTeacherChange}
            >
              <option value="">Select a teacher</option>
              {availableTeachers.map((teacher, index) => (
                <option key={index} value={teacher}>
                  {teacher}
                </option>
              ))}
            </select>
          </>
        }
      </div>
    </>
  );
}
