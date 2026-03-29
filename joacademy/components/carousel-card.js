export default function CarouselCard({ name, desc }) {
  return (
    <>
      <div className="bg-gray-200 rounded-xl p-6 h-[244px] flex flex-col justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/images/bg.jpg"
            className="w-10 h-10 rounded-full object-cover"
          />
          <h3 className="font-semibold text-lg">{name}</h3>
        </div>

        <p className="text-sm text-gray-700 mt-4">{desc}</p>
      </div>
    </>
  );
}
