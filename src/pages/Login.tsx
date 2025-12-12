import React, { useState } from "react";
import OtpInput from "../components/OtpInput";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <>
      <section className="max-w-[1440px] w-[1400px] mx-auto px-4 flex h-fit">
        <div className=" bg-[#131619] w-[50%]">
          <div className="pl-[11rem] pt-[6rem] flex items-center gap-4">
            <img src="/logo.svg" alt="logo" />{" "}
            <span className="font-[700] text-[2.4rem]">CarePulse</span>
          </div>
          <div className="mt-[10rem] ml-[11rem]">
            <h1 className="font-bold text-[3.6rem]">Hi there, ....</h1>
            <p className="mt-[1.8rem] font-medium text-[1.8rem] text-[#ABB8C4]">
              Get Started with Appointments.
            </p>
            <form
              className="w-[49.6rem] flex flex-col gap-[2.4rem] mt-[6.4rem]"
              onSubmit={handleSubmit}
            >
              <div>
                <label>full name</label>
                <div className="relative mt-[1rem]">
                  <svg
                    className="absolute left-[1.6rem] top-1/2 -translate-y-1/2 "
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 21C19 17.6863 16.3137 15 13 15H11C7.68629 15 5 17.6863 5 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                      stroke="#CDE9DF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <input
                    type="text mt-[1.6rem]"
                    className="w-full h-[4.8rem] px-[5rem]  text-[1.6rem] border-[1px] border-[#363A3D] rounded-[8px] outline-none"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div>
                <label>Email address</label>

                <div className="relative mt-[1rem] group">
                  {/* GRADIENT BORDER */}
                  <div
                    className="
          absolute inset-0 rounded-[8px]
          bg-gradient-to-r from-[#82DBF7] to-[#B6F09C]
          opacity-0 group-focus-within:opacity-100
          transition-all
          z-0
        "
                  ></div>

                  {/* ICON */}
                  <svg
                    className="absolute left-[1.6rem] top-1/2 -translate-y-1/2 
                   z-20 pointer-events-none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4 6L10 12M20 6L14 12M10 12L10.5858 12.5858C11.3668 13.3668 12.6332 13.3668 13.4142 12.5858L14 12M10 12L3.87868 18.1213M14 12L20.1213 18.1213M20.1213 18.1213C20.6642 17.5784 21 16.8284 21 16V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V16C3 16.8284 3.33579 17.5784 3.87868 18.1213M20.1213 18.1213C19.5784 18.6642 18.8284 19 18 19H6C5.17157 19 4.42157 18.6642 3.87868 18.1213"
                      stroke="#CDE9DF"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* INPUT */}
                  <input
                    type="text"
                    className="
        w-full h-[4.8rem] px-[5rem] text-[1.6rem]
        border-[1px] border-[#363A3D] rounded-[8px]
        outline-none bg-[#0F0F0F] relative z-10
        text-white transition-all
        focus:text-[#82DBF7] 
        focus:border-transparent
        focus:shadow-[#84DCF53D]
        focus:shadow-md
      "
                    placeholder="johndoe@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label>Phone number</label>
                <div className="relative mt-[1rem]">
                  <svg
                    className="absolute left-[1.6rem] top-1/2 -translate-y-1/2 "
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6657 18.0181L9.59895 16.6127C6.95932 14.8178 4.68225 12.5407 2.8873 9.90105L1.48188 7.83426C0.227977 5.99028 0.622045 3.48943 2.38223 2.1204L3.28514 1.41814C4.73923 0.287177 6.84777 0.629344 7.8696 2.16209L8.30882 2.82092C8.71564 3.43114 8.76429 4.21257 8.4363 4.86854C7.83292 6.07531 7.86392 7.5021 8.51915 8.68152L8.68393 8.97812C9.11296 9.75036 9.74964 10.387 10.5219 10.8161L10.8185 10.9808C11.9979 11.6361 13.4247 11.6671 14.6315 11.0637C15.2874 10.7357 16.0689 10.7844 16.6791 11.1912L17.3379 11.6304C18.8707 12.6522 19.2128 14.7608 18.0819 16.2149L17.3796 17.1178C16.0106 18.878 13.5097 19.272 11.6657 18.0181Z"
                      stroke="#CDE9DF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>

                  <input
                    type="text mt-[1.6rem]"
                    className="w-full h-[4.8rem] px-[5rem]  text-[1.6rem] border-[1px] border-[#363A3D] rounded-[8px] outline-none focus:border-[#B6F09C]
                 focus:ring-2 focus:ring-blue-300
                 transition-all"
                    placeholder="+234 901 334 7728"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-[#24AE7C] mt-[2.4rem] w-full h-[4.8rem] py-[0.8rem] px-[2.4rem] rounded-[0.8rem] font-semibold text-[1.6rem]"
              >
                Get Started
              </button>
            </form>
          </div>
          <p className=" mt-[10rem] ml-[11rem] text-[1.6rem] text-[#76828D]">
            @carepulse copyright
          </p>
        </div>
        <img
          src="/login_bg.png"
          alt="login graphics"
          className="w-[50%] rounded"
        />
      </section>
      <OtpInput isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Login;
