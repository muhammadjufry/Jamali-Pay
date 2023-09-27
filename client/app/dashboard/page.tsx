"use client";
import React, { useEffect, useState } from "react";
import Gross_Volumes_Chart from "@/components/dashboard/Gross_Volumes_Chart";
import { useGetUser } from "@/hooks/useSyncUser";
import Header from "@/components/dashboard/Header";
import Container from "@/components/Container";
import { useRouter } from "next/navigation";
import { Auth } from "aws-amplify";
import Sidebar from "@/components/dashboard/Sidebar";

function Dashboard() {
  const { getUser, getUserData } = useGetUser();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const router = useRouter();

  const getUserSession = async () => {
    try {
      await Auth.currentSession();
      setIsUserLoggedIn(true);
    } catch (error) {
      router.push("/login");
    }
  };

  useEffect(() => {}, []);

  useEffect(() => {
    getUser();
    getUserSession();
  }, []);

  if (isUserLoggedIn === false) return null;
  return (
    <>
      <Header userData={getUserData} />
      <Sidebar />
      <div className="bg-white mt-[60px] ml-[70px] md:ml-[270px]">
        <Gross_Volumes_Chart />
      </div>
    </>
  );
}

export default Dashboard;
