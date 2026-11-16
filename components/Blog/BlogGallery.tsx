"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogGallery = ({ images, title }: { images: string[]; title: string }) => {
  return (
    <div className="mb-10">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-xl shadow-md"
      >
        {images.map((img, index) => (
          <SwiperSlide key={`${index}-${img}`}>
            <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-xl bg-white dark:bg-gray-900">
              <Image
                src={img}
                alt={`${title} - image ${index + 1}`}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                priority={index === 0}
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogGallery;
