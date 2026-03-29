export default function handler(req, res) {
  const data = {
    message: "Success",
    data: {
      current_page: 1,
      data: [
        {
          id: 1,
          name: "التربية الاسلامية",
          slug: "islamic-course",
          image: "/course.webp",
          duration: "3:44:30",
          price: 30,
          teacher: {
            name: "عمر جبر",
            image: "/teacher.png",
          },
        },
        {
          id: 2,
          name: "الرياضيات",
          slug: "math-course",
          image: "/math.webp",
          duration: "5:10:00",
          price: 35,
          teacher: {
            name: "أحمد خالد",
            image: "/teacher2.png",
          },
        }
      ]
    }
  };

  res.status(200).json(data);
}