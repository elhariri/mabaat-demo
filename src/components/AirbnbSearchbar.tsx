import { almarai } from "@/assets/fonts";
import { CgOptions } from "react-icons/cg";
import { MdOutlineSearch } from "react-icons/md";

export default function AirbnbSearchbar() {
  return (
    <div
      style={{
        border: "0.5px solid rgba(0,0,0,0.1)",
        boxShadow: "0 3px 10px rgba(0,0,0,0.08)",
      }}
      className="flex-row-reverse mx-5 flex h-[3.4rem] rounded-full mt-2"
    >
      <div className="h-full aspect-square flex">
        <MdOutlineSearch className="m-auto w-full h-1/2" />
      </div>
      <div className="py-2 flex flex-col flex-1 my-auto">
        <div
          style={almarai.style}
          className="font-semibold text-xl text-center pb-1 text-gray-950"
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
  );
}
