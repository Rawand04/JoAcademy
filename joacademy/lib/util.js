export function FilterCourses(courses, query) {
  if (!query) return courses;

  return courses.filter(
    (course) =>
      course.name.toLowerCase().includes(query.toLowerCase()) ||
      course.teacher?.name.toLowerCase().includes(query.toLowerCase()),
  );
}

export function debounce(fn, time) {
  var timer;

  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, time);
  };
}
