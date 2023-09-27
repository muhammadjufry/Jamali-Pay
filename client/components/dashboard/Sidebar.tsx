import {
  IconBook,
  IconCoin,
  IconHome,
  IconReceipt2,
  IconUsers,
} from "@tabler/icons-react";
import { IconSitemap } from "@tabler/icons-react";
import { IconCode } from "@tabler/icons-react";
import { IconRocket } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Sidebar({}: Props) {
  return (
    <aside className="fixed left-0 top-0 z-50 h-screen bg-white border-r border-grey-500 w-full md:max-w-[270px] max-w-[70px]">
      <header className="h-[60px] fixed w-full border-b flex items-center gap-4 text-gray-900 p-2 md:py-3 md:px-6 md:max-w-[270px] max-w-[70px]">
        <Image
          src="/logo.png"
          className="w-[40px] h-[40px] md:mx-0 mx-auto"
          width={40}
          height={40}
          alt="Logo"
        />
        <h1 className="text-2xl font-bold hidden md:block">Jamali Pay</h1>
      </header>
      <ul className="flex flex-col text-[17px] mt-[60px] md:items-start items-center">
        <li className="flex items-center gap-4 p-7 px-6 md:w-full md:hover:bg-gray-100 cursor-pointer">
          <IconHome size={23} />
          <Link href="/dashboard" className="md:block hidden">
            Home
          </Link>
        </li>
        <li className="flex items-center gap-4 p-7 px-6 md:w-full md:hover:bg-gray-100 cursor-pointer">
          <IconRocket size={23} />
          <Link href="/dashboard/get-started" className="md:block hidden">
            Get started
          </Link>
        </li>
        <li className="flex items-center gap-4 p-7 px-6 md:w-full md:hover:bg-gray-100 cursor-pointer">
          <IconCoin size={23} />
          <Link href="/dashboard/payments" className="md:block hidden">
            Payments
          </Link>
        </li>
        <li className="flex items-center gap-4 p-7 px-6 md:w-full md:hover:bg-gray-100 cursor-pointer">
          <IconUsers size={23} />
          <Link href="/dashboard/customers" className="md:block hidden">
            Customers
          </Link>
        </li>
        <li className="flex items-center gap-4 p-7 px-6 md:w-full md:hover:bg-gray-100 cursor-pointer">
          <IconSitemap size={23} />
          <Link href="/dashboard/products" className="md:block hidden">
            Products
          </Link>
        </li>
        <li className="flex items-center gap-4 p-7 px-6 md:w-full md:hover:bg-gray-100 cursor-pointer">
          <IconReceipt2 size={23} />
          <Link href="/dashboard/billings" className="md:block hidden">
            Billings
          </Link>
        </li>
        <li className="flex items-center gap-4 p-7 px-6 md:w-full md:hover:bg-gray-100 cursor-pointer">
          <IconCode size={23} />
          <Link href="/dashboard/developer" className="md:block hidden">
            Developer
          </Link>
        </li>
        <li className="flex items-center gap-4 p-7 px-6 md:w-full md:hover:bg-gray-100 cursor-pointer">
          <IconBook size={23} />
          <Link href="/documentation" className="md:block hidden">
            Documentation
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
