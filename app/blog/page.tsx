import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Список макетов / Models list",
};

export default function BlogPage() {
  return (
    <>
      <ScrollUp />
      <Blog />
    </>
  );
}
