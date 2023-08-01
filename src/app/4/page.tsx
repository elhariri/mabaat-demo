import Image from "next/image";

import { MdLanguage, MdOutlineSearch } from "react-icons/md";
import { CgOptions } from "react-icons/cg";
import { Tajawal, Rubik, Almarai } from "next/font/google";
import PropertiesList from "@/components/PropertiesList";
import Squircle from "@/components/Squircle";

const tajawal = Tajawal({
  weight: "400",
  style: "normal",
  subsets: ["arabic"],
});

const tajawalLatin = Tajawal({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
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
  weight: "400",
  style: "normal",
  subsets: ["latin-ext"],
});

const almarai = Rubik({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext"],
});

export default function Home() {
  return (
    <main
      style={tajawal.style}
      className="flex h-full overflow-hidden flex-col  bg-[#346765] text-white"
    >
      <div
        style={{
          background: "radial-gradient(rgb(18 104 89), #084d42)",
          filter: "blur(8px)",
        }}
        className="absolute w-full h-full inset-0"
      ></div>
      <div className="relative flex py-4 mx-5">
        <div className="w-12 h-12 mr-auto">
          <Squircle />
        </div>
        <div className="flex ml-auto my-auto rounded-full px-2 py-0.5 border border-[#cedfc3]">
          <span style={tajawalLatin.style} className="my-auto h-fit mr-2 mt-1">
            AR
          </span>
          <div className="h-6 aspect-square flex my-auto">
            <MdLanguage className="m-auto w-full h-full" />
          </div>
        </div>
      </div>
      <div
        style={almarai.style}
        className="relative mx-10 z-50 text-[1.8rem] leading-[1.2] text-right mb-6 mt-6"
      >
        أرقى الوحدات السعودية, مهيئة لراحتك
      </div>
      <div className="flex-row-reverse relative text-black mx-5 flex h-[3.7rem] rounded-xl bg-white shadow-lg border">
        <div className="h-full aspect-square flex">
          <MdOutlineSearch className="m-auto w-full h-3/5" />
        </div>
        <div className="py-2 flex flex-col flex-1 my-auto">
          <div
            style={almarai.style}
            className="font-semibold text-2xl text-center pb-1"
          >
            وجهتك؟
          </div>
        </div>
        <div className="h-full aspect-square flex">
          <div className="w-[70%]  aspect-square m-auto flex">
            <CgOptions className="m-auto w-full h-1/2" />
          </div>
        </div>
      </div>

      <div
        /* style={{
          boxShadow: "0 -3px 20px rgba(0,0,0,0.3)",
        }} */
        className="flex flex-col relative flex-1 overflow-hidden mt-6 text-black"
      >
        <PropertiesList className="!text-white" />
      </div>
    </main> //bg-[#376767]
  );
}
