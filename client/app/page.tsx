"use client";
import Cookie_Card from "@/components/Cookie_Card";
import Feature from "@/components/Feature";
import NavFeature from "@/components/Nav_Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import { useEffect } from "react";
import { useGetUser } from "../hooks/useSyncUser";
import BanksTicker from "@/components/BanksTicker";
import CryptosTicker from "@/components/CryptosTicker";

export default function Home() {
  const { getUser, getUserData } = useGetUser();

  useEffect(() => {
    getUser();
    if (getUserData) console.log(getUserData);
  }, [getUserData]);
  return (
    <>
      <Header userData={getUserData} />
      <Hero
        title="Best payment gateway solution"
        desc="We support all banks and cryptocurrencies in the world with fast perfomance, secure and reliable."
        buttons={[
          { text: "Get Started", link: "/signup", active: true },
          { text: "See Docs", link: "/docs", active: true },
        ]}
        img="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
        imgWidth={701}
        imgHeight={545}
      />
      <Cookie_Card />
      <Feature
        infoStartFrom="left"
        featureTitle="We Supported all banks in the world"
        featureDesc="Send and receive money from different banks in the world securely
              with Jamali Pay at high perfomance"
        learnMoreLink="/global-banks-support"
        OtherContent={<BanksTicker />}
      />
      <NavFeature />
      <Feature
        infoStartFrom="left"
        featureTitle="We support many payment methods in the world"
        featureDesc="Send and receive money using various payment method"
        learnMoreLink="/global-banks-support"
        OtherContent={<CryptosTicker />}
      />
      <Newsletter />
      <Footer />
    </>
  );
}
