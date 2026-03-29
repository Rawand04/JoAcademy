export function FilterCourses(courses, query) {
  if (!query) return courses;

  return courses.filter(
    (course) =>
      course.name.toLowerCase().includes(query.toLowerCase()) ||
      course.teacher?.name.toLowerCase().includes(query.toLowerCase())
  );
}