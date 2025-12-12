import React, { useState } from "react";
import { Times } from "./Icons";
import { Link } from "react-router-dom";

interface OtpInputProps {
  isOpen: boolean;
  onClose?: () => void;
}
const Cancel: React.FC<OtpInputProps> = ({ isOpen, onClose }) => {
  const [reason, setReason] = useState("");
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1A1D21F5] w-[64rem] border-[1px] rounded-[1.6rem] py-[4rem] p-[4rem]">
        <div className="flex justify-between">
          <h2 className="font-semibold text-[2.4rem]">Cancel Appointment </h2>
          <button onClick={() => onClose?.()}>
            <Times className="cursor-pointer" />
          </button>
        </div>
        <span className="text-[1.6rem] font-medium text-[#ABB8C4]">
          Are you sure you want to cancel your appointment
        </span>

        <div className="mb-6 mt-[4rem]">
          <label className=" font-medium mb-3 block">
            Reason for cancellation
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full border bg-[#1A1D21F5] border-gray-700 rounded-lg px-4 py-4 text-gray-300 focus:border-cyan-500 focus:outline-none resize-none"
            rows={4}
            placeholder="ex: Annual montly check-up"
          ></textarea>
        </div>

        <Link to="/success">
          <button
            onClick={() => {
              onClose?.();
              setReason("");
            }}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-lg transition-colors"
          >
            Cancel appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cancel;
