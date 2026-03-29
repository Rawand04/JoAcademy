import Link from "next/link";

export default function CustomNavBar() {
  return (
    <>
      <nav className="justify-center lg:flex px-12  px-2 xl:px-4 text-black h-[100px] w-full items-center justify-between bg-white px-5">
        <div>
          <img
            src="/images/Logo.png"
            alt="Jo Academy"
            className="max-h-[50px] w-full max-w-[200px]"
          />
        </div>

        <ul className="hidden lg:flex flex-row gap-4 ">
          <li>
            <Link href="https://www.joacademy.com/en#about-jo">
              About Jo Academy
            </Link>
          </li>
          <li>
            <Link href="https://www.joacademy.com/en#services">
              Our Services
            </Link>
          </li>
          <li>
            <Link href="https://www.joacademy.com/en/news">Our News</Link>
          </li>
          <li>
            <Link href="https://www.joacademy.com/en/events">Our Events</Link>
          </li>
          <li>
            <Link href="https://careers.joacademy.com/en/careers_page">
              Careers
            </Link>
          </li>
          <li>
            <Link href="https://www.joacademy.com/en/sales-point">
              Sales Points
            </Link>
          </li>
          <li>
            <Link href="https://www.joacademy.com/en/help">Contact Us</Link>
          </li>
        </ul>

        <div className="hidden lg:flex gap-4">
          <button className="px-4 pt-2">ع</button>
          <Link href="/login">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-10 px-4 py-2 h-[34px] w-[60px] rounded-lg !border-[1px] !border-white !bg-transparent font-normal !text-white hover:!bg-white hover:!text-brand-blue">
              login
            </button>
          </Link>
          <Link href="/register">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300 border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 h-10 px-4 py-2 h-[34px] w-[60px] rounded-lg !border-[1px] !border-white !bg-white font-normal !text-brand-blue hover:!bg-brand-blue hover:!text-white">
              register
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
