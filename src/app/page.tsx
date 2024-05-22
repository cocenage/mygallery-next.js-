import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Name from "@/components/Name/Name";
import Net from "@/components/Net/Net";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Name />
      <Net />
      <Footer/>
    </>
  );
}
