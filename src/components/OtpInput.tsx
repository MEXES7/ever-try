import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Times } from "./Icons";

interface OtpInputProps {
  isOpen: boolean;
  onClose?: () => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ isOpen, onClose }) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const value = e.target.value.replace(/\D/, ""); // only digits
    if (!value) return;

    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);

    // auto focus next
    if (idx < 5) inputsRef.current[idx + 1]?.focus();
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === "Backspace") {
      e.preventDefault(); // prevent default browser behavior

      const newOtp = [...otp];

      if (otp[idx]) {
        // If current box has a digit, remove it
        newOtp[idx] = "";
        setOtp(newOtp);
      } else if (idx > 0) {
        // If current box empty, move focus back
        newOtp[idx - 1] = "";
        setOtp(newOtp);
        inputsRef.current[idx - 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const paste = e.clipboardData.getData("text").slice(0, 6).split("");
    const newOtp = [...otp];
    paste.forEach((char, i) => {
      if (i < 6 && /\d/.test(char)) newOtp[i] = char;
    });
    setOtp(newOtp);
    const nextIndex = Math.min(paste.length, 5);
    inputsRef.current[nextIndex]?.focus();
    e.preventDefault();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#1A1D21F5] w-[64rem] h-[37.8rem] border-[1px] rounded-[1.6rem] py-[4rem] p-[4rem]">
        <div className="flex justify-between">
          <h2 className="font-semibold text-[2.4rem]">Verify OTP</h2>
          <button onClick={() => onClose?.()}>
            <Times className="cursor-pointer" />
          </button>
        </div>
        <span className="text-[1.6rem] font-medium text-[#ABB8C4]">
          Please enter the OTP sent to your registered mobile number.
        </span>
        <div className="flex gap-[1.7rem] mt-[4rem]">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(e, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
              onPaste={handlePaste}
              ref={(el) => {
                inputsRef.current[idx] = el;
              }}
              className="w-[8rem] h-[8rem] text-center text-xl border-[2px] rounded-[0.8rem] bg-[#131619] text-[#24AE7C] font-bold text-[4.8rem] outline-none focus:border-[#24AE7C] focus:ring-1 focus:ring-blue-300 transition"
            />
          ))}
        </div>
        <Link to="/dashboard">
          <button className="mt-[4rem] w-full h-[4.8rem] rounded-[0.8rem] bg-[#24AE7C] py-[0.8rem] px-[2.4rem] font-semibold text-[1.6rem]">
            Verify
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OtpInput;
