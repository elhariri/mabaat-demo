import Image from "next/image";

import { MdLanguage } from "react-icons/md";
import { HiMiniStar } from "react-icons/hi2";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";
import { almarai, almaraiBold } from "@/assets/fonts";
import AirbnbSearchbar from "@/components/AirbnbSearchbar";
import PropertiesList from "@/components/PropertiesList";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <main style={almarai.style} className="flex h-screen flex-col">
      <div className="flex flex-row-reverse py-3 px-5">
        <Image
          src="/icons/mabaat-long.png"
          width={90}
          height={90}
          alt="logo"
          className="ml-auto"
        />
        <div className="flex mr-auto my-auto rounded-full px-3 py-1 border border-[#cedfc3]">
          <span className="my-auto h-fit mr-2 text-sm">AR</span>
          <div className="h-6 aspect-square flex my-auto">
            <MdLanguage className="m-auto w-full h-full" />
          </div>
        </div>
      </div>

      <AirbnbSearchbar />

      <Categories />

      <PropertiesList />
    </main> //bg-[#376767]
  );
}
