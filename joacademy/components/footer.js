import Link from "next/link";
import { FaWhatsapp, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#011C40] text-white pt-12 pb-8 px-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-start text-center lg:text-left">
        
        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg border-b border-white/20 pb-2 mb-2 lg:border-none lg:pb-0">Quick Links</h3>
          <div className="flex flex-col gap-2 opacity-80 text-sm">
            <Link href="/" className="hover:text-blue-300 transition-colors">Courses</Link>
            <Link href="/" className="hover:text-blue-300 transition-colors">Shababeek</Link>
            <Link href="/" className="hover:text-blue-300 transition-colors">Jo School</Link>
            <Link href="/" className="hover:text-blue-300 transition-colors">Teachers</Link>
            <Link href="/" className="hover:text-blue-300 transition-colors">Files</Link>
            <Link href="/" className="hover:text-blue-300 transition-colors">Jo Academy Scholarships</Link>
            <Link href="/" className="hover:text-blue-300 transition-colors">Packages and offers</Link>
            <Link href="/" className="hover:text-blue-300 transition-colors">Join Ambassadors</Link>
          </div>
        </div>

        {/* Support */}
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-lg border-b border-white/20 pb-2 mb-2 lg:border-none lg:pb-0">Support</h3>
          <div className="flex flex-col gap-2 opacity-80 text-sm">
            <Link href="/" className="hover:text-blue-300 transition-colors">Help</Link>
            <Link href="/" className="hover:text-blue-300 transition-colors">Contact technical support</Link>
            <Link href="/" className="hover:text-blue-300 transition-colors">Jo News</Link>
            <Link href="/" className="hover:text-blue-300 transition-colors">About us</Link>
            <Link href="/" className="hover:text-blue-300 transition-colors">Libraries</Link>
            <Link href="/terms-and-conditions" className="hover:text-blue-300 transition-colors">Terms and Conditions</Link>
            <Link href="/privacy-and-policy" className="hover:text-blue-300 transition-colors">Privacy and Policy</Link>
            <Link href="/" className="hover:text-blue-300 transition-colors">Rate our service</Link>
            <Link href="/" className="hover:text-blue-300 transition-colors">User guide</Link>
          </div>
        </div>

        {/* Apps & Social */}
        <div className="flex flex-col gap-8 items-center lg:items-start">
          {/* Mobile App */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Download JO Academy mobile app</h3>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link href="https://apps.apple.com/jo/app/jo-academy/id1667155848" target="_blank">
                <img src="/images/appstore.png" alt="App Store" className="h-10 w-auto hover:scale-105 transition-transform" />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.jo_Joacademy" target="_blank">
                <img src="/images/googleplay.png" alt="Google Play" className="h-10 w-auto hover:scale-105 transition-transform" />
              </Link>
              <Link href="https://appgallery.huawei.com/app/C111070175" target="_blank">
                <img src="/images/huawei.png" alt="Huawei Store" className="h-10 w-auto hover:scale-105 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Desktop App */}
          <div className="space-y-3">
            <h3 className="font-bold">Download Desktop App</h3>
            <div className="flex justify-center lg:justify-start gap-6 text-sm">
              <Link href="https://cdn.joacademy.net/joacademy-Setup-2.2.2-new.dmg" className="bg-white/10 px-4 py-2 rounded hover:bg-white/20">Mac</Link>
              <Link href="https://cdn.joacademy.net/joacademy-Setup-2.1.0.exe" className="bg-white/10 px-4 py-2 rounded hover:bg-white/20">Windows</Link>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-bold">Our Social Media Pages</h3>
            <div className="flex justify-center lg:justify-start gap-6">
              <Link href="https://api.whatsapp.com/send/?phone=962792004566&text&type=phone_number&app_absent=0" target="_blank" className="hover:text-green-400 transition-colors"><FaWhatsapp size={28} /></Link>
              <Link href="https://www.facebook.com/Joacademyofficial" target="_blank" className="hover:text-blue-500 transition-colors"><FaFacebook size={28} /></Link>
              <Link href="https://www.instagram.com/joacademy/" target="_blank" className="hover:text-pink-500 transition-colors"><FaInstagram size={28} /></Link>
              <Link href="https://www.youtube.com/channel/UCsCAA9Njj3NC1ujdJ9OHg6A/videos" target="_blank" className="hover:text-red-500 transition-colors"><FaYoutube size={28} /></Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 pt-8 border-t border-white/10 text-center opacity-60 text-xs">
        <p>All rights reserved © Jo Academy 2026</p>
      </div>
    </footer>
  );
}