import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { id, title, image, tags } = blog;

  return (
    <div
      className="wow fadeInUp hover:shadow-two dark:hover:shadow-gray-dark group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 dark:bg-dark"
      data-wow-delay=".1s"
    >
      <Link
        href={`/blog/${id}`}
        className="relative block aspect-[37/22] w-full"
      >
        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {tags[0]}
        </span>
        <Image src={image} alt={title} fill className="object-cover" />
      </Link>

      <div className="p-5 sm:p-6 md:p-8">
        <h3>
          <Link
            href={`/blog/${id}`}
            className="block text-lg font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary sm:text-xl"
          >
            {title}
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default SingleBlog;
