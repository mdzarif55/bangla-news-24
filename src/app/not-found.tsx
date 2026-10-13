import Link from "next/link";
import Image from "next/image";
import { Home, ArrowLeft, Search, Newspaper } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-2xl rounded-2xl bg-white px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">
        {/* Logo */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-3"
        >
          <Image
            src="/logo.webp"
            alt="Bangla News 24"
            width={45}
            height={45}
            className="rounded-full"
          />
          <span className="text-lg font-bold text-gray-900">
            Bangla News 24
          </span>
        </Link>

        {/* Error Code */}
        <div className="relative mx-auto mb-5 flex h-36 w-56 items-center justify-center sm:h-44 sm:w-72">
          <span className="text-8xl font-black tracking-tight text-red-100 sm:text-9xl">
            404
          </span>

          <Newspaper
            size={52}
            strokeWidth={1.5}
            className="absolute text-red-700"
          />
        </div>

        {/* Message */}
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-red-700">
          Page Not Found
        </p>

        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          দুঃখিত! পেজটি খুঁজে পাওয়া যায়নি
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-gray-500 sm:text-base">
          আপনি যে পেজটি খুঁজছেন সেটি সরানো হয়েছে, ঠিকানা পরিবর্তন হয়েছে
          অথবা লিংকটি ভুল হতে পারে।
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-red-700 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-red-800 hover:shadow-lg hover:shadow-red-100"
          >
            <Home size={18} />
            হোমপেজে ফিরে যান
          </Link>

          <Link
  href="/"
  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-700"
>
  <ArrowLeft size={18} />
  হোমপেজে ফিরে যান
</Link>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t border-gray-100 pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-red-700"
          >
            <Search size={16} />
            সর্বশেষ সংবাদ দেখতে হোমপেজে যান
          </Link>
        </div>
      </div>
    </main>
  );
}