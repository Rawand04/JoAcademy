import Link from "next/link";
import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import OTPInput from "../otp";

export default function LoginForm() {
  const router = useRouter();
  const phoneRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [isByPhone, setIsByPhone] = useState(true);
  const [isStudent, setIsStudent] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [otp, setOTP] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLoginMethodChange = (isPhone) => {
    setIsByPhone(isPhone);
    setErrorMsg("");
  };

  const handleLoginUserChange = () => {
    setIsStudent((prev) => !prev);
    setErrorMsg("");
  };

  async function sentOTP(event) {
    event.preventDefault();
    setErrorMsg("");
    setIsLoading(true);
    setOTP(true);

    // try {
    //   const response = await fetch(
    //     "https://admin.joacademy.net/api/v1/send-otp",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(),
    //     },
    //   );
    //   const result = await response.json(); // Parse the JSON response
    //   console.log("Success:", result);
    //   router.push("/otp");
    // } catch (err) {
    //   setErrorMsg("Login failed");
    // } finally {
    //   setIsLoading(false);
    // }

    // try {
    //   const result = await signIn("credentials", {
    //     redirect: false,
    //     accountType: isStudent ? "student" : "teacher",
    //     ...(isByPhone
    //       ? { phone_number: phoneRef.current.value.trim() }
    //       : {
    //           email: emailRef.current.value.trim(),
    //           password: passwordRef.current.value,
    //         }),
    //   });

    //   if (result?.error) {
    //     setErrorMsg(result.error);
    //   } else {
    //     router.push("/");
    //   }
    // } catch (err) {
    //   setErrorMsg("Login failed");
    // } finally {
    //   setIsLoading(false);
    // }
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans text-[#414042]">
        <section className="w-full max-w-[550px] bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          {otp ? (
            <OTPInput />
          ) : (
            <>
              <div className="text-center mb-10">
                <h1 className="text-3xl font-bold text-[#1a408c] mb-4">
                  {isStudent ? "Login" : "Login as a Teacher"}
                </h1>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Enter the phone number or email you registered with, and start
                  your experience
                </p>
              </div>

              <div className="flex border-b border-gray-200 mb-8">
                <button
                  onClick={() => handleLoginMethodChange(true)}
                  className={`flex-1 pb-4 text-lg font-bold transition-all ${
                    isByPhone
                      ? "border-b-4 border-[#1a408c] text-[#1a408c]"
                      : "text-gray-500"
                  }`}
                >
                  By Phone
                </button>
                <button
                  onClick={() => handleLoginMethodChange(false)}
                  className={`flex-1 pb-4 text-lg font-bold transition-all ${
                    !isByPhone
                      ? "border-b-4 border-[#1a408c] text-[#1a408c]"
                      : "text-gray-500"
                  }`}
                >
                  By Email
                </button>
              </div>

              <form onSubmit={sentOTP} className="space-y-6">
                {isByPhone ? (
                  <div className="space-y-2">
                    <label className="block font-bold text-gray-700">
                      Phone Number
                    </label>
                    <div className="flex gap-3">
                      {/* Country Code Box */}
                      <div className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg bg-white min-w-[100px]">
                        <span>962+</span>
                        <img
                          src="https://flagcdn.com/w20/jo.png"
                          alt="Jordan"
                          className="w-5 h-3 object-cover rounded-sm"
                        />
                      </div>
                      <input
                        ref={phoneRef}
                        type="tel"
                        required
                        placeholder="Example: 790000000"
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="space-y-2">
                      <label className="block font-bold text-gray-700">
                        Email
                      </label>
                      <input
                        ref={emailRef}
                        type="email"
                        required
                        placeholder="example@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block font-bold text-gray-700">
                        Password
                      </label>
                      <input
                        ref={passwordRef}
                        type="password"
                        required
                        placeholder="********"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
                      />
                      <div className="text-right">
                        <Link
                          href="/forget-password"
                          title="Forgot Password"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                  </>
                )}

                {errorMsg && (
                  <p className="text-red-500 text-sm italic">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#1a408c] text-white font-bold py-4 rounded-xl hover:bg-[#153472] transition-colors text-lg shadow-md"
                >
                  {isLoading ? "Sending..." : "Send"}
                </button>
              </form>

              <div className="mt-8 text-center space-y-4">
                <p className="text-gray-600 text-lg">
                  Don't have an account yet?{" "}
                  <Link
                    href="/register"
                    className="text-[#3b82f6] font-medium hover:underline"
                  >
                    Create New Account
                  </Link>
                </p>

                <button
                  onClick={handleLoginUserChange}
                  className="text-[#3b82f6] text-lg font-medium hover:underline block w-full"
                >
                  {isStudent ? "Login as a Teacher" : "Login as a Student"}
                </button>
              </div>
            </>
          )}
        </section>
      </div>
    </>
  );
}
