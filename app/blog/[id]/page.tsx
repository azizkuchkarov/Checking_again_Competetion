"use client";

import blogData from "@/components/Blog/blogData";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface BlogDetailProps {
  params: { id: string };
}

export default function BlogDetailPage({ params }: BlogDetailProps) {
  const blogId = parseInt(params.id);
  const blog = blogData.find((item) => item.id === blogId);

  if (!blog) return notFound();

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl mx-auto">
        {/* 🟩 Sarlavha */}
        <h1 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-8 leading-snug">
          {blog.title}
        </h1>

        {/* 🟦 Galereya (Swipe qilinadigan) */}
        {blog.images && blog.images.length > 0 ? (
          <div className="mb-10">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="rounded-xl shadow-md"
            >
              {blog.images.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[400px] bg-white dark:bg-gray-900 flex items-center justify-center rounded-xl overflow-hidden">
                    <Image
                      src={img}
                      alt={`${blog.title} - image ${index + 1}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          blog.image && (
            <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-900 flex items-center justify-center">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-contain"
              />
            </div>
          )
        )}

        {/* 🟨 Краткая информация */}
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Краткая информация
        </h2>
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300 whitespace-pre-line mb-10 text-justify">
          {blog.paragraph}
        </p>

        {/* 🟧 Основные функции и принцип работы */}
        <h2 className="text-2xl font-bold text-black dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
          Основные функции и принцип работы
        </h2>
        <p className="text-lg leading-relaxed text-gray-800 dark:text-gray-300 whitespace-pre-line text-justify">
          {blog.details}
        </p>

        {/* 🟪 Tags */}
        <div className="mt-10">
          {blog.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full mr-2 text-sm font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
