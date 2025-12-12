import { Cherkmark } from "../components/Icons";
import { Calendar } from "lucide-react";

const Success = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 flex h-fit">
      <div className="flex flex-col gap-[4.2rem] bg-[#131619] w-[1416px] py-[5rem] px-[2rem]">
        <div className=" flex items-center justify-center gap-4">
          <img src="/logo.svg" alt="logo" />{" "}
          <span className="font-[700] text-[2.4rem]">CarePulse</span>
        </div>
        <div className="mt-[5rem] flex flex-col items-center w-full justify-center border-b-[0.1rem] border-[#363A3D] pb-[6rem]">
          <Cherkmark />
          <h1 className="font-bold w-[61rem] text-[3.6rem] text-center mt-[1.4rem]">
            Your <span className="text-[#4AC97E]">appointment request</span> has
            been successfully submitted!
          </h1>
          <p className="font-medium text-[1.8rem] mt-[2rem]">
            We'll be in touch shortly to confirm.
          </p>
        </div>
        <div className="flex flex-row justify-center gap-12 pb-[4rem] border-b-[0.1rem] border-[#363A3D]">
          <p className="font-medium text-[2.4rem]">
            Requested appointment details:{" "}
          </p>
          <div className="flex items-center gap-2  h-[4.4rem] p-[1.2rem]">
            <img
              src="/dr1.png"
              alt="doctor"
              className="w-10 h-10 rounded-full"
            />

            <span className="text-[1.6rem] font-semibold">Dr. Adam Smith</span>
          </div>
          <div className="flex items-center gap-2 h-[4.4rem] p-[1.2rem]">
            <Calendar />
            <p className="text-[1.6rem] font-semibold">
              23 June 2024 - 5:00 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
