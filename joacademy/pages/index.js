import ProgramCard from "@/components/program-card";
import Link from "next/link";
import Carousel from "../components/carousel";

export default function Home() {
  // spacing variables for easy adjustments
  const sectionPadding = "py-12 px-6";
  const titleStyle = "text-3xl font-bold mt-6";
  const joSchool = [
    "الأول",
    "الثاني",
    "الثالث",
    "الرابع",
    "الخامس",
    "السادس",
    "السابع",
    "الثامن",
    "التاسع",
    "العاشر",
    "الحادي عشر خطة جديدة",
    "التوجيهي العلمي",
    "التوجيهي أدبي",
    "المواد المشتركة توجيهي",
    "الثاني عشر خطة جديدة",
  ];

  return (
    <div className="flex flex-col items-center text-center">
      {/* Header */}
      <header className={`flex flex-col items-center ${sectionPadding}`}>
        <h1 className="text-4xl font-extrabold text-[#1B428B] mb-4">
          An Empowered Arab Generation
        </h1>
        <p className="max-w-2xl">
          Select the program you prefer to explore, so we can serve you in the
          best possible way
        </p>
      </header>

      {/* Program Cards */}
      <section
        className={`grid grid-cols-2 md:grid-cols-4 gap-4 justify-center ${sectionPadding}`}
      >
        <ProgramCard
          link="https://www.joacademy.com/en/home/tawjihi"
          title="Secondery School"
          color="bg-[#0E2F59]"
          svg="https://cdn.joacademy.net/6723/2-tawjihi.png"
        />
        <ProgramCard
          link="https://www.joacademy.com/en/home/intermediate"
          title="Intermediate"
          color="bg-[#1F37AC]"
          svg="https://cdn.joacademy.net/6725/1-intermediate.png"
        />
        <ProgramCard
          link="https://www.joacademy.com/en/home/international"
          title="International"
          color="bg-[#327BF9]"
          svg="https://cdn.joacademy.net/6726/4-International.png"
        />
        <ProgramCard
          link="https://www.joacademy.com/en/home/university"
          title="University and Collage"
          color="bg-[#1F36AD]"
          svg="https://cdn.joacademy.net/679138/3-uni.png"
        />
      </section>

      {/* Palestine Program */}
      <section
        className={`
    bg-[#1E4387] text-white rounded-3xl shadow-2xl
    w-[90%] mx-auto mb-12
    p-6 md:p-10
    flex flex-col md:flex-row lg:flex-row-reverse
    items-center gap-6 md:gap-10
    max-w-5xl
  `}
      >
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="/images/pal_image.png"
            alt="Palestine Program"
            className="w-full max-w-[300px] h-[180px] object-contain"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Palestine Program
          </h2>

          <p className="text-base md:text-lg opacity-90 leading-snug">
            Now from JO Academy, a special program for our people in Palestine.
          </p>

          <button className="mt-4 bg-[#f3a862] hover:bg-[#e59752] text-[#1e4a95] font-bold py-3 px-6 rounded-2xl transition-all active:scale-95 text-lg">
            Study now
          </button>
        </div>
      </section>
      {/* Numbers Section */}
      <section className="bg-gray-100 flex flex-wrap justify-center gap-8 py-12 w-full">
        {[
          { num: "+2M", label: "Students" },
          { num: "+1.2M", label: "Watch Hours" },
          { num: "2.8M", label: "Teachers" },
          { num: "+13K", label: "Course" },
          { num: "+313K", label: "File" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-sky-500 font-bold text-5xl">{item.num}</div>
            <span className="font-semibold text-gray-800 mt-1">
              {item.label}
            </span>
          </div>
        ))}
      </section>

      {/* About */}
      <h2 id="about" className={titleStyle}>About Jo Academy</h2>
      <section
        className={`flex flex-col items-center ${sectionPadding} md:flex-row-reverse`}
      >
        <img
          src="https://d822uy9wn5vxx.cloudfront.net/frontend_assets/1755509690_joacademy-team-min.jpeg"
          alt="About"
          className="w-100 rounded-md object-contain mb-4"
        />
        <div>
          <p className="max-w-3xl text-center mb-4">
            JoAcademy was launched in 2014 as the first e-learning platform in
            the Hashemite Kingdom of Jordan and the region. The platform offers
            a variety of educational services to create an interactive and
            comprehensive learning journey for school students following both
            national and international curricula, as well as university
            students. Additionally, it provides numerous training courses using
            the latest technologies and artificial intelligence to facilitate
            access to information in a way that aligns with the fast-paced
            advancements of the modern era.
          </p>
          <button className="bg-[#011C40] text-white px-8 py-3 rounded-xl">
            Read More
          </button>
        </div>
      </section>

      {/* Services */}
      <section id="services" className={`flex flex-col items-center ${sectionPadding} gap-6`}>
        <h2 className={titleStyle}>JO Academy Services</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              title: "JO Academy Courses",
              desc: "Courses for all grades",
              link: "/courses",
              src: "icons/jo-services/exams.svg",
            },
            {
              title: "Online Exams",
              desc: "Take your exams online with ease.",
              link: "/",
              src: "icons/jo-services/exams.svg",
            },
            {
              title: "Live Sessions",
              desc: "Join live interactive sessions with top teachers.",
              link: "/",
              src: "icons/jo-services/exams.svg",
            },
            {
              title: "Recorded Lectures",
              desc: "Watch high-quality recorded lectures at your own pace.",
              link: "/",
              src: "icons/jo-services/exams.svg",
            },
            {
              title: "Study Materials",
              desc: "Access a wide range of study materials.",
              link: "/",
              src: "icons/jo-services/exams.svg",
            },
          ].map((item, i) => (
            <Link key={i} href={item.link}>
              <div className="group relative w-64 rounded-2xl shadow-md overflow-hidden cursor-pointer">
                {/* Default face */}
                <div className="flex flex-col items-center justify-center gap-4 p-6 bg-white group-hover:opacity-0 transition-opacity duration-300">
                  <img
                    src={item.src}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                  <h3 className="text-blue-800 font-bold text-lg">
                    {item.title}
                  </h3>
                </div>
                {/* Hover face */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 bg-[#1a428a] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  <p className="text-center text-sm">{item.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Jo School */}

      <div>
        <h2 className={titleStyle}>Jo Academy School</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {joSchool.map((item, i) => (
            <Link key={i} href="/" className="group">
              <div className="w-40 h-25 bg-gray-100 rounded-lg flex justify-center items-center hover:bg-[#1a428a] ">
                <p className="text-blue-900 font-extrabold group-hover:text-white">
                  {item}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Success Stories */}

      <div>
        <h2 className={titleStyle}>Success Stories</h2>
        <Carousel />
      </div>

      {/* Partners */}
      <section className={`flex flex-col items-center ${sectionPadding} gap-4`}>
        <h2 className={titleStyle}>Our Partners</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            {
              src: "https://cdn.joacademy.net/15675/مركز-الحسين-للسرطان.png",
              link: "https://www.khcc.jo/",
            },
            {
              src: "https://cdn.joacademy.net/1062/partner-logo.png",
              link: "https://efawateercom.jo",
            },
            {
              src: "https://cdn.joacademy.net/12141/ZainLogoBlack.png",
              link: "https://www.jo.zain.com/arabic/pages/default.aspx",
            },
            {
              src: "https://cdn.joacademy.net/15655/كلية-الخوارزمي.png",
              link: "https://khawarizmi.edu.jo/",
            },
            {
              src: "https://cdn.joacademy.net/15656/مبادرة-عينك-ع-المستقبل.png",
              link: "https://eyeonfuture.org/",
            },
            {
              src: "https://cdn.joacademy.net/15659/وزارة-التنمية-الاجتماعية.png",
              link: "https://www.mosd.gov.jo/Default/Ar",
            },
            {
              src: "https://cdn.joacademy.net/345197/download-(1).png",
              link: "https://www.htu.edu.jo/#/",
            },
            {
              src: "https://cdn.joacademy.net/336565/وزارة-الاقتصاد-الرقمي-والريادة.jpg",
              link: "https://www.modee.gov.jo/Default/Ar",
            },
            {
              src: "https://cdn.joacademy.net/336567/الهيئة-الخيرية-الهاشمية.png",
              link: "https://www.jhco.org.jo/",
            },
            {
              src: "https://cdn.joacademy.net/345135/WhatsApp-Image-2022-05-19-at-10.12.05-AM.jpg",
              link: "https://esarsv.com/ar/home",
            },
            {
              src: "https://cdn.joacademy.net/345140/download.png",
              link: "https://intaj.net/",
            },
            {
              src: "https://cdn.joacademy.net/345145/download.jpg",
              link: "https://jsf.org/ar",
            },
          ].map((item, i) => (
            <Link href={item.link} target="_blank">
              <img
                key={i}
                src={item.src}
                alt={`Partner ${i}`}
                className="w-24 h-24 object-contain"
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
