import BlogGallery from "@/components/Blog/BlogGallery";
import blogData from "@/components/Blog/blogData";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface BlogDetailProps {
  params: { id: string };
}

const getBlog = (id: string) => blogData.find((item) => String(item.id) === id);

export function generateStaticParams() {
  return blogData.map((item) => ({ id: String(item.id) }));
}

export function generateMetadata({ params }: BlogDetailProps): Metadata {
  const blog = getBlog(params.id);
  return blog ? { title: blog.title } : {};
}

export default function BlogDetailPage({ params }: BlogDetailProps) {
  const blog = getBlog(params.id);

  if (!blog) notFound();

  return (
    <section className="pb-16 pt-[120px] md:pb-24 md:pt-[150px]">
      <div className="container max-w-4xl mx-auto">
        {/* 🟩 Sarlavha */}
        <h1 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-8 leading-snug">
          {blog.title}
        </h1>

        {/* 🟦 Galereya (Swipe qilinadigan) */}
        {blog.images && blog.images.length > 0 ? (
          <BlogGallery images={blog.images} title={blog.title} />
        ) : (
          blog.image && (
            <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden shadow-md bg-white dark:bg-gray-900 flex items-center justify-center">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                sizes="(max-width: 896px) 100vw, 896px"
                priority
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
