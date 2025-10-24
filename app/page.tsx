import { Metadata } from "next";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";

export const metadata: Metadata = {
  title: "Blog | Next.js Template",
  description: "This is the Blog page only",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Blog />
    </>
  );
}
