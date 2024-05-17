import Filter from "@/components/Filter/Filter";
import Header from "@/components/Header/Header";
import Name from "@/components/Name/Name";
import Net from "@/components/Net/Net";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Filter />
      <Name />
      <Net />
    </>
  );
}
