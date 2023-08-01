"use client";
import Image from "next/image";
import { useState } from "react";

const filters = [
  {
    icon: 1,
    title: "الأكثر طلباً",
  },
  {
    icon: 2,
    title: "مدة طويلة",
  },
  {
    icon: 3,
    title: "على البحر",
  },
  {
    icon: 4,
    title: "مع مسبح",
  },
  {
    icon: 5,
    title: "الأعلى سعراً",
  },
  {
    icon: 6,
    title: "قرب البحر",
  },
  {
    icon: 7,
    title: "الأكثر طلباً",
  },
  {
    icon: 8,
    title: "غرف كثيرة",
  },
];

export default function Categories() {
  const [selected, setSelected] = useState(1);

  return (
    <div className="px-10 flex overflow-hidden border-b mt-2">
      <div className="flex flex-row-reverse overflow-y-scroll no-scrollbar py-2">
        {filters.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col flex-1 ml-6 p-2 px-3 ${
              item.icon === selected
                ? "rounded-xl bg-[#376767] [#cedfc3] text-white"
                : ""
            }`}
            onClick={() => setSelected(item.icon)}
          >
            <div
              style={{
                filter: item.icon === selected ? "invert(100%)" : "invert(0%)",
              }}
              className="flex flex-shrink-0 mx-auto mb-1"
            >
              <Image
                src={`/icons/${item.icon}.jpeg`}
                width={25}
                height={25}
                alt="logo"
              />
            </div>
            <div className="text-center my-auto text-xs">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
