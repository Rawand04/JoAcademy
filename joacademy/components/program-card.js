import Link from "next/link";

export default function ProgramCard({ color, title, svg, link }) {
  const cardGap = "gap-2";
  const cardWidth = "w-[160px]";
  const cardHeight = "h-[180px]";
  return (
    <>
      <Link href={link}>
        <div
          className={`flex flex-col items-center ${cardGap} ${color} rounded-xl p-6`}
        >
          <h2 className="text-white font-bold text-lg">{title}</h2>
          <img
            src={svg}
            alt={title}
            className={`${cardWidth} ${cardHeight} object-contain`}
          />
        </div>
      </Link>
    </>
  );
}
