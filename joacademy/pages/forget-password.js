import Link from "next/link";
import { useRef, useState } from "react";

export default function ForgotPasswordPage() {
  const phoneRef = useRef();
  const emailRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  async function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);

    const enteredPhone = phoneRef.current.value;
    const enteredEmail = emailRef.current.value;

    // Add your API logic here
    console.log("Sending recovery to:", enteredPhone, enteredEmail);
    
    setTimeout(() => setIsLoading(false), 1500); // Simulate API call
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans text-[#414042]">
      <section className="w-full max-w-[550px] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#1a408c] mb-4">
            Forgot Password
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            Enter the phone number and email address you registered with so we
            can send you the verification code
          </p>
        </div>

        <form onSubmit={submitHandler} className="space-y-6">
          {/* Phone Number Field */}
          <div className="space-y-2">
            <label htmlFor="phone-number" className="block font-bold text-gray-700">
              Phone Number
            </label>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 min-w-[100px]">
                <span className="font-medium">962+</span>
                <img 
                  src="https://flagcdn.com/w20/jo.png" 
                  alt="Jordan" 
                  className="w-5 h-3 object-cover" 
                />
              </div>
              <input
                id="phone-number"
                type="tel"
                ref={phoneRef}
                required
                placeholder="Example: 790000000"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label htmlFor="email" className="block font-bold text-gray-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              ref={emailRef}
              required
              placeholder="Example: example@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1a408c] text-white font-bold py-4 rounded-xl hover:bg-[#153472] transition-colors text-lg shadow-md disabled:opacity-70"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </section>

      {/* Back to Login */}
      <div className="mt-8 text-center">
        <Link href="/login" className="text-[#3b82f6] font-medium hover:underline flex items-center gap-2">
          <span>←</span> Back to Login
        </Link>
      </div>
    </div>
  );
}