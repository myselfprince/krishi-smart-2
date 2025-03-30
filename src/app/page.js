import Features from "@/components/Features";
import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        {/* <h1>Krishi-Smart</h1> */}
        <Navbar/>
        <Homepage />
        {/* <Features /> */}
        
      </main>
    </>
  );
}
