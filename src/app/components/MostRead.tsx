import Link from "next/link";
import React from "react";

interface MostReadNews {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read"
  );

  const data = await res.json();

  const news: MostReadNews[] = data.data;

  return (
    <div className="card h-fit bg-base-100 p-3 shadow-sm sm:p-4">
      {/* Heading */}
      <h1 className="border-b-2 border-red-700 pb-2 text-base font-bold text-red-700 sm:text-lg">
        সর্বাধিক পঠিত
      </h1>

      {/* News List */}
      <div className="mt-2 grid gap-1">
        {news.map((n, i) => (
          <Link
            key={n.id}
            href={`/news/${n.id}`}
            className="group block rounded-md p-2 transition-all duration-300 hover:bg-red-50 sm:p-3"
          >
            <div className="flex items-start gap-2">
              {/* Number */}
              <span className="min-w-6 shrink-0 text-base font-bold text-red-600 transition-transform duration-300 group-hover:scale-110 sm:min-w-7 sm:text-lg">
                {i + 1}.
              </span>

              {/* Title */}
              <h2 className="line-clamp-3 text-sm font-semibold leading-5 text-gray-700 transition-all duration-300 group-hover:translate-x-1 group-hover:text-red-700 sm:text-base sm:leading-6">
                {n.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostRead;