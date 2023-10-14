import React from "react";
import axios from "axios";
import Image from "next/image";

type Props = {};
const fetchBanks = async () => {
  const { data } = await axios.get("http://localhost:8080/institutions");
  return data;
};

async function Page({}: Props) {
  const banks = await fetchBanks();
  return (
    <div className="p-8 bg-white border rounded-xl flex flex-col gap-8 max-w-[400px] mx-auto">
      <h1 className="text-2xl font-bold text-center">Select your banks</h1>
      <ul className="grid grid-cols-2 gap-8 overflow-y-auto">
        {banks.length > 0 ? (
          banks.map((bank: any) => (
            <li
              key={bank.id}
              className="flex flex-col gap-4 justify-center items-center shadow-md cursor-pointer transition-all hover:shadow-none p-4"
            >
              <Image
                src={bank.media[0].source}
                alt={bank.name}
                width={65}
                height={65}
              />
              <span>{bank.name}</span>
            </li>
          ))
        ) : (
          <p>No banks found</p>
        )}
      </ul>
    </div>
  );
}

export default Page;
