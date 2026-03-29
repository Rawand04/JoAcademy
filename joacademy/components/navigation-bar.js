import { useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { data: session, status } = useSession();

  console.log(session);
  console.log(status);

  return (
    <nav className="flex items-center justify-between h-[100px] w-full bg-[#1a428a] px-4 lg:px-8 text-white relative">
      {/* Logo */}
      <Link href="/">
        <img
          src="/images/Logo.png"
          alt="Jo Academy"
          className="max-h-[50px] max-w-[200px]"
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex flex-row gap-4">
        <li>
          <Link href="/#about">About Jo Academy</Link>
        </li>
        <li>
          <Link href="/#services">Our Services</Link>
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

      {/* Desktop Buttons */}
      <div className="hidden lg:flex gap-4 items-center">
        <button className="px-4 pt-2">ع</button>

        {!session && (
          <>
            <Link href="/login">
              <button className="h-[34px] w-[60px] rounded-lg border border-white bg-transparent text-white hover:bg-white hover:text-[#1a428a] transition">
                login
              </button>
            </Link>

            <Link href="/register">
              <button className="h-[34px] w-[70px] rounded-lg border border-white bg-white text-[#1a428a] hover:bg-[#1a428a] hover:text-white transition">
                register
              </button>
            </Link>
          </>
        )}
      </div>
      {session && (
        <button onClick={signOut} className="h-[34px] w-[80px] rounded-lg border border-white bg-transparent text-white hover:bg-white hover:text-[#1a428a] transition">
          Sign out
        </button>
      )}

      {/* Mobile Hamburger */}
      <button className="lg:hidden text-3xl" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[100px] left-0 w-full bg-[#1a428a] flex flex-col items-center gap-4 py-6 lg:hidden z-50">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link href="/#about">About Jo Academy</Link>
            </li>
            <li>
              <Link href="/#services">Our Services</Link>
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

          <div className="flex flex-col gap-3 items-center mt-4">
            <button className="px-4 pt-2">ع</button>

            <Link href="/login">
              <button className="h-[34px] w-[80px] rounded-lg border border-white">
                login
              </button>
            </Link>

            <Link href="/register">
              <button className="h-[34px] w-[80px] rounded-lg bg-white text-[#1a428a]">
                register
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
