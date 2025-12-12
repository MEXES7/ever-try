import React, { useState } from "react";
import { Times } from "./Icons";
import { Calendar, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";

interface OtpInputProps {
  isOpen: boolean;
  onClose?: () => void;
}

const doctors = [
  { name: "Dr. Adam Smith", img: "/dr1.png" },
  { name: "Dr. Alex Ramirez", img: "/dr2.png" },
  { name: "Dr. Michael May", img: "/dr3.png" },
];

const Schedule: React.FC<OtpInputProps> = ({ isOpen, onClose }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<{
    name: string;
    img: string;
  } | null>(null);
  const [reason, setReason] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [showDoctorDropdown, setShowDoctorDropdown] = useState(false);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1A1D21F5] w-[64rem] border-[1px] rounded-[1.6rem] py-[4rem] p-[4rem]">
        <div className="flex justify-between">
          <h2 className="font-semibold text-[2.4rem]">Schedule Appointment </h2>
          <button onClick={() => onClose?.()}>
            <Times className="cursor-pointer" />
          </button>
        </div>
        <span className="text-[1.6rem] font-medium text-[#ABB8C4]">
          Please fill in the following details to schedule
        </span>

        {/* Doctor Selection */}
        <div className="mb-6 mt-[4rem]">
          <label className=" font-medium mb-3 block">Doctor</label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2  z-10">
              <Search size={20} />
            </div>

            {/* Custom Dropdown Button */}
            <button
              type="button"
              onClick={() => setShowDoctorDropdown(!showDoctorDropdown)}
              className="w-full bg-[#1A1D21F5] border border-gray-700 rounded-lg pl-12 pr-12 py-4 text-left focus:border-cyan-500 focus:outline-none"
            >
              <div className="flex items-center gap-2">
                {selectedDoctor ? (
                  <img
                    src={selectedDoctor.img}
                    alt={selectedDoctor.name}
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-700" />
                )}
                <span className="text-gray-300">
                  {selectedDoctor ? selectedDoctor.name : "Select a doctor"}
                </span>
              </div>
            </button>

            <div className="absolute right-4 top-1/2 -translate-y-1/2  pointer-events-none">
              <ChevronDown size={20} />
            </div>

            {/* Dropdown Menu */}
            {showDoctorDropdown && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#131625] border border-gray-700 rounded-lg overflow-hidden z-20 max-h-60 overflow-y-auto">
                {doctors.map((doctor) => (
                  <button
                    key={doctor.name}
                    type="button"
                    onClick={() => {
                      setSelectedDoctor({ name: doctor.name, img: doctor.img });
                      setShowDoctorDropdown(false);
                    }}
                    className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#1a1d2e] transition-colors text-left"
                  >
                    <img
                      src={doctor.img}
                      alt={doctor.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <span className="text-gray-300">{doctor.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Reason for Appointment */}
        <div className="mb-6">
          <label className=" font-medium mb-3 block">
            Reason for appointment
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full bg-[#1A1D21F5] border border-gray-700 rounded-lg px-4 py-4 text-gray-300 focus:border-cyan-500 focus:outline-none resize-none"
            rows={4}
            placeholder="ex: Annual montly check-up"
          ></textarea>
        </div>

        {/* Expected Appointment Date */}
        <div className="mb-8">
          <label className="font-medium mb-3 block">
            Expected appointment date
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 ">
              <Calendar size={20} />
            </div>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="w-full bg-[#1A1D21F5] border border-gray-700 rounded-lg pl-12 pr-4 py-4 text-gray-500 focus:border-cyan-500 focus:outline-none"
              placeholder="Select your appointment date"
            />
          </div>
        </div>

        <Link to="/success">
          <button
            onClick={() => {
              onClose?.();
              setReason("");
              setAppointmentDate("");
            }}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg transition-colors"
          >
            Schedule appointment
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Schedule;
