import { useState, useRef } from "react";

export default function OtpCodeInput({ codeLength = 6, onCodeComplete }) {
  const [codeDigits, setCodeDigits] = useState(Array(codeLength).fill(""));
  const inputRefs = useRef([]);

  const handleDigitChange = (inputValue, digitIndex) => {
    if (!/^\d?$/.test(inputValue)) return;

    const updatedDigits = [...codeDigits];
    updatedDigits[digitIndex] = inputValue;
    setCodeDigits(updatedDigits);

    // Move focus forward
    if (inputValue && digitIndex < codeLength - 1) {
      inputRefs.current[digitIndex + 1]?.focus();
    }

    // Trigger completion
    const isComplete = updatedDigits.every((digit) => digit !== "");
    if (isComplete) {
      onCodeComplete(updatedDigits.join(""));
    }
  };

  const handleKeyNavigation = (event, digitIndex) => {
    const isBackspace = event.key === "Backspace";

    if (isBackspace && !codeDigits[digitIndex] && digitIndex > 0) {
      inputRefs.current[digitIndex - 1]?.focus();
    }
  };

  const handleCodePaste = (event) => {
    const pastedValue = event.clipboardData
      .getData("text")
      .slice(0, codeLength);

    if (!/^\d+$/.test(pastedValue)) return;

    const pastedDigits = pastedValue.split("");
    setCodeDigits(pastedDigits);

    pastedDigits.forEach((digit, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = digit;
      }
    });

    onCodeComplete(pastedValue);
  };

  return (
    <section className="flex flex-col gap-16">
      <h1 className="font-bold text-center text-4xl">OTP </h1>
      <p className="text-center text-xl">you'll get a message with otp</p>
      <div className="flex justify-center gap-3" onPaste={handleCodePaste}>
        {codeDigits.map((digitValue, digitIndex) => (
          <input
            key={digitIndex}
            type="text"
            inputMode="numeric"
            maxLength="1"
            value={digitValue}
            ref={(element) => (inputRefs.current[digitIndex] = element)}
            onChange={(event) =>
              handleDigitChange(event.target.value, digitIndex)
            }
            onKeyDown={(event) => handleKeyNavigation(event, digitIndex)}
            className="
            w-12 h-14
            text-xl text-center
            border border-gray-300
            rounded-xl
            focus:outline-none
            focus:ring-2 focus:ring-blue-500
            focus:border-blue-500
            transition
          "
          />
        ))}
      </div>
      <button
        type="submit"
        className="w-full bg-[#1a408c] text-white font-bold py-4 rounded-xl hover:bg-[#153472] transition-colors text-lg shadow-md"
      >
        Send
      </button>
    </section>
  );
}
