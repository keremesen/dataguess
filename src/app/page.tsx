"use client";
import React, { useState } from "react";
import CountriesCard from "@/components/CountriesCard";
import Input from "@/components/Input";

export default function Home() {
  const [filteredSearch, setFilteredSearch] = useState<string>("");
  const [groupSize, setGroupSize] = useState<number | string>(1);

  return (
    <main className="flex min-h-screen h-auto  items-center justify-center bg-gray-200 ">
      <div className=" shadow-md p-4  w-3/4   min-h-[654px] my-8   rounded-md bg-white ">
        <div className="flex space-x-4 m-4">
          <Input
            type={"text"}
            placeholder={"Country Name"}
            value={filteredSearch}
            setValue={setFilteredSearch}
          />
          <Input
            type={"number"}
            placeholder={"Group Size"}
            value={groupSize}
            setValue={setGroupSize}
          />
        </div>
        <div className="flex m-4 flex-wrap">
          <CountriesCard
            filteredSearch={filteredSearch}
            groupSize={groupSize}
          />
        </div>
      </div>
    </main>
  );
}
