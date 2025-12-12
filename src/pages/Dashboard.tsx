import React, { useState } from "react";
import { AlertTriangle, CalenderCheck, HourGlass } from "../components/Icons";
import Schedule from "../components/Schedule";
import Cancel from "../components/Cancel";

const cards = [
  {
    id: 1,
    num: "94",
    description: "Total number of  scheduled appointments",
    Icon: CalenderCheck,
  },
  {
    id: 2,
    num: "32",
    description: "Total number of pending appointments",
    Icon: HourGlass,
  },
  {
    id: 3,
    num: "56",
    description: "Total number of cancelled  appointments",
    Icon: AlertTriangle,
  },
];

const appointments = [
  {
    id: 1,
    patient: "Phoenix Baker",
    initials: "PB",
    color: "bg-yellow-400",
    date: "Jan 4, 2022",
    status: "scheduled",
    doctor: "Dr. Alex Ramirez",
  },
  {
    id: 2,
    patient: "Candice Wu",
    initials: "LS",
    color: "bg-green-400",
    date: "Jan 2, 2022",
    status: "pending",
    doctor: "Dr. Michael May",
  },
  {
    id: 3,
    patient: "Lana Steiner",
    initials: "LS",
    color: "bg-green-400",
    date: "Jan 4, 2022",
    status: "cancelled",
    doctor: "Dr. Jasmine Lee",
  },
  {
    id: 4,
    patient: "Drew Cano",
    initials: "DC",
    color: "bg-lime-400",
    date: "Jan 8, 2022",
    status: "scheduled",
    doctor: "Dr. Hardik Sharma",
  },
  {
    id: 5,
    patient: "Natali Craig",
    initials: "NC",
    color: "bg-pink-400",
    date: "Jan 6, 2022",
    status: "pending",
    doctor: "Dr Alyana Cruz",
  },
];

const Dashboard = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpenCancel, setIsOpenCancel] = useState(false);

  const handleSchedule = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen1(true);
  };

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpenCancel(true);
  };

  return (
    <>
      <div className="max-w-[1440px] mx-auto px-4 flex h-fit">
        <div className="flex flex-col gap-[4.2rem] bg-[#131619] w-[1416px] pt-[5rem] px-[2rem]">
          <div className="bg-[#0D0F10] w-full h-[8rem] rounded-[2rem] border-b-[0.1rem] border-[#131619] py-[2.4rem] px-[4.8rem] flex justify-between">
            <div className=" flex items-center gap-4">
              <img src="/logo.svg" alt="logo" />{" "}
              <span className="font-[700] text-[2.4rem]">CarePulse</span>
            </div>
            <div className=" flex items-center gap-4">
              <img
                src="/admin.png"
                alt="admin pics"
                className="w-[3.2rem] h-[3.2rem]"
              />{" "}
              <span className="font-semibold text-[1.6rem]">Admin</span>
            </div>
          </div>
          <div className="px-[6.8rem]">
            <h1 className="font-bold text-[3.8rem]">Welcome, Admin</h1>
            <p className="mt-[1.2rem] font-medium text-[1.6rem] text-[#ABB8C4]">
              Start day with managing new appointments
            </p>
          </div>
          <div className="flex justify-between px-[6.8rem]">
            {cards.map((item) => (
              <div
                key={item.id}
                className=" h-[15.2rem] rounded-[1.2rem] border-t-[0.1rem] p-[2.4rem] bg-slate-800/50 backdrop-blur-sm  "
              >
                <div className="flex gap-[1.4rem] items-center">
                  <item.Icon className="w-[5rem] h-[5rem] inline-block" />{" "}
                  <p className="font-bold text-[3.2rem]">{item.num}</p>
                </div>
                <p className="font-semibold text-[1.6rem] text-nowrap mt-[2.5rem]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="px-[6.8rem] pb-[4rem]">
            <div className=" bg-[#131625] rounded-xl overflow-hidden border border-gray-800">
              <div className="grid grid-cols-5 gap-4 h-[5.4rem] px-6 py-[1.8rem] bg-[#0D0F10] border-b border-gray-800 font-medium text-[1.2rem]">
                <div className="">Patient</div>
                <div className="">Date</div>
                <div className="">Status</div>
                <div className="">Doctor</div>
                <div className="">Actions</div>
              </div>

              {appointments.map((apt) => (
                <div
                  key={apt.id}
                  className={`grid grid-cols-5 gap-4 items-center px-6 py-4 border-b border-gray-800 bg-[rgba(28, 32, 35, 1)]  hover:bg-[#1a1d2e] transition-colors`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 ${apt.color} rounded-full flex items-center justify-center text-black font-bold text-sm`}
                    >
                      {apt.initials}
                    </div>
                    <span className="text-gray-200 text-[1.4rem] font-semibold">
                      {apt.patient}
                    </span>
                  </div>

                  <div className="text-gray-300 text-[1.4rem] font-semibold">
                    {apt.date}
                  </div>

                  <div>
                    {apt.status === "scheduled" && (
                      <span className="inline-flex items-center gap-1 px-3 py-1  h-[2.2rem] bg-green-500/10 text-green-400 rounded-full text-sm border border-green-500/30">
                        <span className="text-[1.2rem] font-semibold">✓</span>{" "}
                        Scheduled
                      </span>
                    )}
                    {apt.status === "pending" && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 h-[2.2rem] bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/30">
                        <span className="text-[1.2rem] font-semibold">⏳</span>{" "}
                        Pending
                      </span>
                    )}
                    {apt.status === "cancelled" && (
                      <span className="inline-flex items-center gap-1 px-3 py-1 h-[2.2rem] bg-red-500/10 text-red-400 rounded-full text-sm border border-red-500/30">
                        <span className="text-[1.2rem] font-semibold">✕</span>{" "}
                        Cancelled
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full"></div>
                    <span className="text-gray-200 text-[1.4rem] font-semibold">
                      {apt.doctor}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={handleSchedule}
                      className="text-green-400 hover:text-green-300 text-[1.4rem] font-semibold"
                    >
                      Schedule
                    </button>
                    <button
                      onClick={handleCancel}
                      className="text-white hover:text-red-300 text-[1.4rem] font-semibold"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center py-[1.2rem] px-[2.4rem] bg-[rgba(28, 32, 35, 1)]">
                <button className="w-[3.6rem] h-[3.6rem] bg-[#1C2023] rounded-[0.8rem] flex items-center justify-center text-[#24AE7C] hover:bg-[#252837] transition-colors">
                  ←
                </button>
                <button className="w-[3.6rem] h-[3.6rem] bg-[#1C2023] rounded-[0.8rem] flex items-center justify-center text-[#24AE7C] hover:bg-[#252837] transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Schedule isOpen={isOpen1} onClose={() => setIsOpen1(false)} />
      <Cancel isOpen={isOpenCancel} onClose={() => setIsOpenCancel(false)} />
    </>
  );
};

export default Dashboard;
