import Link from "next/link";
import { useState, useRef } from "react";

// Helper for API calls
async function createUser(type, name, phone_number) {
  const response = await fetch(`/api/auth/signup`
    , {
    method: "POST",
    body: JSON.stringify({ name, phone_number, type }),
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
}

export default function SignupForm() {
  const nameRef = useRef();
  const phoneNoRef = useRef();
  const [isStudentAccount, setIsStudentAccount] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  async function submitHandler(event) {
    event.preventDefault();
    setIsLoading(true);
    
    const name = nameRef.current.value;
    const phone_number = phoneNoRef.current.value;
    const type = isStudentAccount ? "student" : "parent";

    try {
      const result = await createUser(type, name, phone_number);
      console.log(result);
      // Logic for redirect or success message here
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans text-[#414042]">
      <section className="w-full max-w-[600px] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl font-medium text-gray-800">
            Please fill the registration details in{" "}
            <span className="text-[#1A428A] font-bold">
              {isStudentAccount ? "Student account" : "Parent account"}
            </span>
          </h1>
        </div>

        {/* Account Type Toggle */}
        <div className="flex bg-[#F8F9FA] p-1.5 rounded-xl gap-2 mb-8 border border-gray-100">
          <button
            onClick={() => setIsStudentAccount(true)}
            className={`flex-1 py-3 rounded-lg font-bold transition-all ${
              isStudentAccount 
                ? "bg-white text-[#1A428A] shadow-sm" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Student Account
          </button>
          <button
            onClick={() => setIsStudentAccount(false)}
            className={`flex-1 py-3 rounded-lg font-bold transition-all ${
              !isStudentAccount 
                ? "bg-white text-[#1A428A] shadow-sm" 
                : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Parent Account
          </button>
        </div>

        <form onSubmit={submitHandler} className="space-y-6">
          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name" className="block font-bold text-gray-700">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              ref={nameRef}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label htmlFor="phone-number" className="block font-bold text-gray-700">Phone Number</label>
            <div className="flex gap-3">
              <div className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 min-w-[100px]">
                <span className="font-medium">962+</span>
                <img src="https://flagcdn.com/w20/jo.png" alt="Jordan" className="w-5 h-3 object-cover" />
              </div>
              <input
                id="phone-number"
                type="tel"
                placeholder="Example: 790000000"
                ref={phoneNoRef}
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
              />
            </div>
          </div>

          {/* Terms */}
          <div className="text-sm text-gray-500 leading-relaxed">
            By creating an account on Jo Academy, you agree to the{" "}
            <Link href="/terms-and-conditions" className="text-blue-600 hover:underline">Terms of Service</Link> and{" "}
            <Link href="/privacy-and-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#1a408c] text-white font-bold py-4 rounded-xl hover:bg-[#153472] transition-colors text-lg shadow-md disabled:opacity-70"
          >
            {isLoading ? "Processing..." : "Create Account"}
          </button>
        </form>
      </section>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-gray-600 text-lg">
          Already have an account?{" "}
          <Link href="/login" className="text-[#3b82f6] font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}