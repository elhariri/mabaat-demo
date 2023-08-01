import Image from "next/image";

import { MdOutlineSearch } from "react-icons/md";
import { Tajawal, Rubik, Almarai } from "next/font/google";
import Squircle from "@/components/Squircle";
import AirbnbSearchbar from "@/components/AirbnbSearchbar";
import { CgOptions } from "react-icons/cg";

const tajawal = Tajawal({
  weight: "400",
  style: "normal",
  subsets: ["arabic"],
});

const tajawalSemiBold = Tajawal({
  weight: "700",
  style: "normal",
  subsets: ["arabic"],
});

const tajawalBold = Tajawal({
  weight: "500",
  style: "normal",
  subsets: ["arabic"],
});

const messiriBold = Rubik({
  weight: "500",
  style: "normal",
  subsets: ["latin-ext"],
});

const almarai = Rubik({
  weight: "700",
  style: "normal",
  subsets: ["latin-ext"],
}); /* Almarai({
  weight: "700",
  style: "normal",
  subsets: ["arabic"],
}); */

export default function Home() {
  return (
    <main
      style={tajawal.style}
      className="flex bg-[#346765] relative min-h-screen flex-col"
    >
      <div
        style={{
          background: "radial-gradient(rgb(18 104 89), #084d42)",
          filter: "blur(8px)",
        }}
        className="absolute w-full h-full inset-0"
      ></div>
      <div className="flex mx-auto mt-48">
        <div className="relative w-24 h-24">
          {/*   <div className="absolute z-0 w-36 h-36 border border-orange-500/50 rounded-full -left-[30%] -top-[30%]" />
          <div className="absolute z-0 w-64 h-64 border border-orange-500 rounded-full -left-[93%] -top-[93%]" />
          <div className="absolute z-0 w-96 h-96 border border-orange-500/80 rounded-full -left-[165%] -top-[165%]" />
 */}
          <Squircle />
        </div>
      </div>

      <div
        style={almarai.style}
        className="mx-5 z-50 text-[2.6rem] text-[#ffd863] leading-[1.3] text-center mb-16 mt-36"
      >
        افضل و أرقى الوحدات السعودية مهيئة لراحتك
      </div>
      <div
        style={{
          border: "0.5px solid rgba(0,0,0,0.1)",
          boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
        }}
        className="relative flex-row-reverse mx-5 flex h-[3.8rem] bg-white rounded-full mt-2"
      >
        <div className="h-full aspect-square flex">
          <MdOutlineSearch className="m-auto w-full h-1/2" />
        </div>
        <div className="py-2 flex flex-col flex-1 my-auto">
          <div
            style={almarai.style}
            className="font-semibold text-2xl text-center pb-1 text-gray-950"
          >
            وجهتك؟
          </div>
        </div>
        <div className="h-full aspect-square flex">
          <div className="w-[70%] aspect-square m-auto flex border border-gray-200 rounded-full">
            <CgOptions className="m-auto w-full h-1/2 " />
          </div>
        </div>
      </div>
    </main>
  );
}
