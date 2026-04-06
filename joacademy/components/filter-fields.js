import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function FilterFields({
  sendProgramToParent,
  sendSectionToParent,
  sendCourseToParent,
  sendTeacherToParent,
}) {
  const [program, setProgram] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState("");

  const [teachers, setTeacher] = useState([]);
  const [selectedTeachers, setSelectedTeachers] = useState("");

  const [section, setSection] = useState([]);
  const [selectedSection, setSelectedSection] = useState("");

  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState("");


  //program fetch
  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const res = await fetch(
          "https://admin.joacademy.net/api/v2/programs/category?id=1",
        );
        const data = await res.json();
        setProgram(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProgram();
  }, [program]);

  //section fetch
  useEffect(() => {
    if (!selectedProgram) return;
    const fetchSecion = async () => {
      try {
        const res = await fetch(
          `https://admin.joacademy.net/api/v2/programs/category/sub-category?id=${selectedProgram}`,
        );
        const data = await res.json();

        setSection(data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSecion();
  }, [selectedProgram]);

  //fetch course when section change
  useEffect(() => {
    if (!selectedSection) return;
    const fetchCourses = async () => {
      try {
        const res = await fetch(
          `https://admin.joacademy.net/api/v2/programs/category/sub-category/grade/subject?id=${selectedSection}`,
        );
        const data = await res.json();
        setCourses(data.data);

        setTeacher([]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCourses();
  }, [selectedSection]);

  //fetch teacher when course change
  useEffect(() => {
    if (!selectedCourses) return;

    const fetchTeachers = async () => {
      try {
        const res = await fetch(
          `https://admin.joacademy.net/api/v2/programs/category/sub-category/grade/subject/teacher?subject_id[]=${selectedCourses}`,
        );
        const data = await res.json();
        setTeacher(data.data);

        setSelectedTeachers("");
      } catch (err) {
        console.error(err);
      }
    };

    fetchTeachers();
  }, [selectedCourses]);

  // const applyFilters = () => {
  //   router.push({
  //     pathname: "/courses",
  //     query: {
  //       programId: selectedProgram,
  //       courseId: selectedCourses,
  //       teacherId: selectedTeachers,
  //       sectionId: selectedSection,
  //     },
  //   });
  // };

  function handleProgramChange(e) {
    const value = e.target.value;
    setSelectedProgram(value);
    sendProgramToParent(value);
    // router.push({
    //   pathname: "/courses",
    //   query: {
    //     programId: value,
    //     courseId: selectedCourses,
    //     teacherId: selectedTeachers,
    //     sectionId: selectedSection,
    //   },
    // });
  }

  function handleSectionChange(e) {
    const value = e.target.value;
    setSelectedSection(value);
    sendSectionToParent(value);

    // router.push({
    //   pathname: "/courses",
    //   query: {
    //     programId: selectedProgram,
    //     courseId: selectedCourses,
    //     teacherId: selectedTeachers,
    //     sectionId: value,
    //   },
    // });
  }

  function ClearFilter() {
    setProgram([]);
    setSection([]);
    setCourses([]);
    setTeacher([]);
  }

  function handleCourseChange(e) {
    const value = e.target.value;
    setSelectedCourses(value);
    sendCourseToParent(value);

    // router.push({
    //   pathname: "/courses",
    //   query: {
    //     programId: selectedProgram,
    //     sectionId: selectedSection,
    //     courseId: value,
    //     teacherId: selectedTeachers,
    //   },
    // });
  }
  function handleTeacherChange(e) {
    const value = e.target.value;
    setSelectedTeachers(value);
    sendTeacherToParent(value);

    // router.push({
    //   pathname: "/courses",
    //   query: {
    //     programId: selectedProgram,
    //     courseId: selectedCourses,
    //     teacherId: value,
    //     sectionId: selectedSection,
    //   },
    // });
  }
  return (
    <>
      <div className=" flex justify-center gap-24 text-center text-xl my-8">
        <div className="flex flex-col gap-2">
          <label htmlFor="program" className="font-bold">
            Select Program:{" "}
          </label>
          <select
            className="text-lg"
            id="program"
            value={selectedProgram}
            onChange={handleProgramChange}
          >
            <option value="">Select a program</option>
            {program.map((program) => (
              <option key={program.id} value={program.id}>
                {program.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          {" "}
          <label htmlFor="section" className="font-bold">
            Select section:{" "}
          </label>
          <select
            className="text-lg"
            id="section"
            value={selectedSection}
            onChange={handleSectionChange}
          >
            <option value="">Select a section</option>
            {section.map((section, index) => (
              <option key={index} value={section.id}>
                {section.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          {" "}
          <label htmlFor="courses" className="font-bold">
            Select courses:{" "}
          </label>
          <select
            className="text-lg"
            id="courses"
            value={selectedCourses}
            onChange={handleCourseChange}
          >
            <option value="">Select a courses</option>
            {courses.map((courses, index) => (
              <option key={index} value={courses.id}>
                {courses.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          {" "}
          <label htmlFor="teacher" className="font-bold">
            Select teacher:{" "}
          </label>
          <select
            className="text-lg"
            id="teacher"
            value={selectedTeachers}
            onChange={handleTeacherChange}
          >
            <option value="">Select a teacher</option>
            {teachers.map((teacher) => (
              <option key={teacher.id} value={teacher.id}>
                {teacher.name}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-blue-800 text-white px-6 rounded-lg flex items-center gap-2"
          onClick={ClearFilter}
        >
          Clear Filter
        </button>
      </div>
    </>
  );
}
