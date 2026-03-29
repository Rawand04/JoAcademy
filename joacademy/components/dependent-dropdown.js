import { useState } from "react";

export default function DependentSelect() {
  const program = [
    { id: 1, name: "Tawjihi 2010" },
    { id: 2, name: "Takmily 2007" },
    { id: 3, name: "Tawjihi 2008" },
    { id: 4, name: "Takmily (first year) 2008" },
    { id: 5, name: "Tawjihi 2009" },
  ];

  const section = {
    Arabic: ["Ahmad", "Mohammad"],
    English: ["Khalid", "Shadi"],
    Math: ["Mustafa", "Saleh"],
  };

  const subject = {

  }

  const teacher ={

  }

  const [selectedCourse, setSelectedCourse] = useState("");
  const [availableTeachers, setAvailableTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState("");

  const handleCoursesChange = (e) => {
    const course = e.target.value;
    setSelectedCourse(course);
    setAvailableTeachers(teachers[course] || []);
    setSelectedTeacher("");
  };

  const handleTeacherChange = (e) => {
    setSelectedTeacher(e.target.value);
  };

  return (
    <>
      <div className="text-center text-3xl">
        <label htmlFor="Course" className="font-bold">
          Select Course:{" "}
        </label>
        <select
          id="course"
          value={selectedCourse}
          onChange={handleCoursesChange}
        >
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.id} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>

        <>
          <label htmlFor="teacher" className="font-bold">
            Select teacher:{" "}
          </label>
          <select
            id="teacher"
            value={selectedTeacher}
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
      </div>
    </>
  );
}
