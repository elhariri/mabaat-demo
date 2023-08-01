import Image from "next/image";

import { MdOutlineSearch } from "react-icons/md";
import { Tajawal, Rubik, Almarai } from "next/font/google";

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

const almarai = Almarai({
  weight: "700",
  style: "normal",
  subsets: ["arabic"],
});

export default function Home() {
  return (
    <main style={tajawal.style} className="flex min-h-screen flex-col">
      <div className="flex mx-auto mt-36">
        <div
          style={{
            border: "0.5px solid rgba(0,0,0,0.2)",
            /*  boxShadow: "0 3px 15px rgba(0,0,0,0.1)",*/
          }}
          className="relative p-1.5 bg-white rounded-full"
        >
          <div className="absolute z-0 w-36 h-36 bg-gradient-radial from-transparent from-60% to-gray-200 border border-emeralde-200/50 rounded-full -left-[30%] -top-[30%]" />
          <div className="absolute z-0 w-64 h-64 border border-emeralde-100 rounded-full -left-[93%] -top-[93%]" />
          <div className="absolute z-0 w-96 h-96 border border-emeralde-100/80 rounded-full -left-[165%] -top-[165%]" />
          <div className="flex flex-col w-[5rem] h-[5rem] bg-gradient-to-tr from-emerald-600 to-emerald-300 rounded-full">
            {/* bg-[#346765] */}
            <div className="h-1.5 w-6 bg-green-50 mt-auto mx-auto" />
            <div
              style={tajawalBold.style}
              className="mx-auto mb-2 text-4xl text-green-50"
            >
              m
            </div>
          </div>
        </div>
      </div>
      <div
        style={almarai.style}
        className="mx-5 z-50 text-[2.8rem] leading-[1.3] text-center mb-16 mt-28 text-emerald-900"
      >
        افضل و أرقى الوحدات السعودية,مهيئة لراحتك
      </div>
      <div
        style={{
          border: "0.5px solid rgba(0,0,0,0.1)",
          boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
        }}
        className="flex-row-reverse mx-5 flex h-[5rem] rounded-full"
      >
        <div className="h-full aspect-[0.7] flex">
          <MdOutlineSearch className="m-auto w-full h-2/5 text-emerald-600" />
        </div>
        <div className="py-2 flex flex-col flex-1 my-auto">
          <div
            style={almarai.style}
            className="font-semibold text-3xl text-right"
          >
            وجهتك؟
          </div>
          <div style={almarai.style} className="text-zinc-400 text-right">
            إختر الوجهة و الوقت اللذان يناسبانك
          </div>
        </div>
      </div>
    </main>
  );
}
