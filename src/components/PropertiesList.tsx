import { almaraiBold } from "@/assets/fonts";
import Image from "next/image";

import { HiMiniStar } from "react-icons/hi2";
import { PiHeartBold, PiHeartFill } from "react-icons/pi";

const properties = [
  {
    id: 1,
    name: "نالة الروضة فيلا 3 غرف نوم",
    rating: 4.5,
    price: 100,
    location: "الرياض",
    description:
      "فيلا مكونة من 3 غرف نوم و 3 حمامات و صالة و مطبخ و مسبح و حديقة",
    isWishlist: false,
  },
  {
    id: 2,
    name: "اللؤلؤة البيضاء البساتين",
    rating: 4.2,
    price: 120,
    location: "الرياض",
    description: "فيلا مكونة من 3 غرف نوم و 3 ",
    isWishlist: true,
  },
  {
    id: 3,
    name: "فيلا الرياض",
    rating: 3.8,
    price: 150,
    location: "جدة",
    description:
      "فيلا مكونة من 3 غرف نوم و 3 حمامات و صالة و مطبخ و مسبح و حديقة",
    isWishlist: true,
  },
  {
    id: 4,
    name: "ديار السلامة",
    rating: 4.9,
    price: 200,
    location: "جدة",
    description: "فيلا مكونة صالة و مطبخ و مسبح و حديقة",
    isWishlist: false,
  },
  {
    id: 5,
    name: "القيروان",
    rating: 4.2,
    price: 90,
    location: "الرياض",
    description: "شقة ثلاث غرف نوم",
    isWishlist: true,
  },
  {
    id: 6,
    name: "المنتزة",
    rating: 4.1,
    price: 180,
    location: "جدة",
    description: "شقة غرفتين نوم",
    isWishlist: false,
  },
  {
    id: 7,
    name: "تاليد الملقا",
    rating: 4.5,
    price: 100,
    location: "الرياض",
    description: "شقة غرفتين نوم",
    isWishlist: false,
  },
];

export default function PropertiesList({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={"flex-1 overflow-y-scroll no-scrollbar pt-4 " + className}>
      {properties.map((item, index) => (
        <div key={index} className="flex flex-col p-2 px-5 mb-12">
          <div className="relative w-full aspect-[0.95] shadow-sm overflow-hidden rounded-3xl">
            <Image
              src={`/properties/${item.id}/1`}
              alt="logo"
              layout="fill"
              objectFit="cover"
            />

            <div className="absolute w-16 aspect-square top-0 right-0 flex">
              {!item.isWishlist && (
                <PiHeartBold className="w-1/2 h-1/2 m-auto text-white" />
              )}
              {item.isWishlist && (
                <PiHeartFill className="w-1/2 h-1/2 m-auto text-pink-500" />
              )}
            </div>
            <div className="absolute flex flex-col bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black/40">
              <div className="flex mt-auto mb-4 mx-auto w-fit">
                {[1, 2, 3, 4, 5].map((item, index) => (
                  <div
                    key={index}
                    className={
                      "mx-1 rounded-full my-auto bg-white " +
                      (index === 0 ? "w-2 h-2" : "w-1.5 h-1.5")
                    }
                    bg-white
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse mt-4">
            <div className="flex flex-col text-right">
              <div style={almaraiBold.style}>
                {item.location} - {item.name}
              </div>

              <div className="text-slate-400 text-sm mt-1">
                {item.description}
              </div>
              <div className="mt-2 flex ml-auto" style={almaraiBold.style}>
                <span className="my-auto mr-1">ريال</span>{" "}
                <span className="my-auto">{item.price}</span>
              </div>
            </div>
            <div className="mr-auto flex h-fit">
              <HiMiniStar className="w-4 h-4 text-yellow-400 my-auto mr-1" />
              <span className="mt-1">{item.rating}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
