import { useRouter } from "next/router";

export default function CourseCard({
  teacherName,
  teacherImage,
  title,
  duration,
  fees,
  courseImage,
  slug,
}) {
  const router = useRouter();

  return (
    <div className="w-[350px] bg-white rounded-xl shadow-sm overflow-hidden">
      <img src={courseImage} className="w-full h-48 object-cover" />

      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <img
            src={teacherImage}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{teacherName}</span>
        </div>

        <div>{title}</div>

        <div>duration: {duration}</div>

        <div>{fees} JD</div>

        <button
          className="mt-3 bg-blue-800 text-white px-4 py-2 rounded"
          onClick={() =>
            router.push({
              pathname: `/courses/${slug}`,
              query: {
                teacher: teacherName,
                price: fees,
                title: title,
                teacherImage: teacherImage,
              },
            })
          }
        >
          Get the course
        </button>
      </div>
    </div>
  );
}
