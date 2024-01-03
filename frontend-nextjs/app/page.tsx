import BanksTicker from "@/components/BanksTicker";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

function Home() {
  return (
    <>
      <Header />
      <main className="lg:mt-[81px] mt-[80px]">
        <Hero />
        <div className="text-center flex flex-col gap-10">
          <h2 className="text-2xl font-bold text-black dark:text-white text-shadow p-4">
            We support all banks in the world execpt Israel banks
          </h2>
          <BanksTicker />
        </div>
      </main>
    </>
  );
}

export default Home;
