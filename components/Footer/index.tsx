import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-dark dark:text-white mb-2">
          Список Макеты / Models list
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
          © {new Date().getFullYear()} Asia Trans Gas LLC
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/blog"
            className="text-primary hover:underline text-sm font-medium"
          >
            Go to Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}
