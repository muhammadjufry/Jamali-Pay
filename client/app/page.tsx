"use client";
import Cookie_Card from "@/components/Cookie_Card";
import Feature_Section_1 from "@/components/Feature_Section_1";
import Feature_Section_2 from "@/components/Feature_Section_2";
import Feature_Section_3 from "@/components/Feature_Section_3";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import { useEffect } from "react";
import { useGetUser } from "../hooks/useSyncUser";

export default function Home() {
  const { getUser, getUserData } = useGetUser();

  useEffect(() => {
    getUser();
  }, []);
  return (
    <>
      <Header userData={getUserData} />
      <Hero />
      <Cookie_Card />
      <Feature_Section_1 />
      <Feature_Section_2 />
      <Feature_Section_3 />
      <Newsletter />
      <Footer />
    </>
  );
}
