import CarouselCard from "./carousel-card";

import { useRef } from "react";

export default function Carousel() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-3/4 mx-auto mt-8 relative">
      {/* Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute -left-15 top-1/2 -translate-y-1/2 bg-gray-200 shadow px-3 py-2 rounded-full z-10"
      >
        ◀
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute -right-15 top-1/2 -translate-y-1/2 bg-gray-200 shadow px-3 py-2 rounded-full z-10"
      >
        ▶
      </button>

      {/* Scroll Area */}
      <div ref={scrollRef} className="flex gap-6 overflow-x-auto scroll-smooth">
        {data.map((d, i) => (
          <div className="min-w-[300px]" key={i}>
            <CarouselCard name={d.name} desc={d.desc} />
          </div>
        ))}
      </div>
    </div>
  );
}
const data = [
  {
    name: "Leen Momani",
    desc: "The videos were recorded so I could watch them whenever I wanted at home, which saved me a lot of time. The platform's best feature was this. I want to express my gratitude to each and every organiser at Jo Academic",
  },
  {
    name: "تالا مصطفى محمود شيخ صالح",
    desc: "Tala Sheikh Saleh (the first on the Kingdom 2005) ... I used to take the Jo Academy platform as an integral thing with my studies at school, and I was also dependent on school after I go to school to return classes with other professors. I am the",
  },
  {
    name: "Raya Ellyan",
    desc: "I want to say thanks to Jo Academic, the million platform, as well as to all of its staff and teachers, for standing by us throughout the entire process and honoring us after we were called first students. Thank God they stayed with us throughout the jour",
  },
];
