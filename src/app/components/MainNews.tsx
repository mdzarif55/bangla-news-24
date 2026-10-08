import Image from "next/image";
import Link from "next/link";
import React from "react";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

const MainNews = ({ news }: { news: News[] }) => {
  const [firstNews, ...otherNews] = news;

  if (!firstNews) return null;

  return (
    <div className="flex flex-col gap-3 md:flex-row">
      {/* ================= MAIN NEWS ================= */}
      <Link
        href={`/news/${firstNews.id}`}
        className="group block w-full md:w-1/2"
      >
        <div className="card h-full overflow-hidden bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
          <figure className="h-52 overflow-hidden sm:h-60 md:h-64">
            <Image
              src={firstNews.imageUrl}
              height={600}
              width={600}
              alt={firstNews.imageAlt}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </figure>

          <div className="card-body gap-2 p-4 sm:p-5">
            <p className="text-sm font-semibold text-red-600">
              {firstNews.category}
            </p>

            <h2 className="text-lg font-bold leading-7 transition-colors duration-300 group-hover:text-red-700 sm:text-xl">
              {firstNews.title}
            </h2>

            <p className="line-clamp-3 text-sm leading-6 text-gray-600 sm:text-base">
              {firstNews.description}
            </p>
          </div>
        </div>
      </Link>

      {/* ================= OTHER NEWS ================= */}
      <div className="grid w-full gap-2 md:w-1/2">
        {otherNews.slice(0, 4).map((on) => (
          <Link
            key={on.id}
            href={`/news/${on.id}`}
            className="group block"
          >
            <div className="card h-full bg-base-100 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-5">
              <p className="text-sm font-semibold text-red-600">
                {on.category}
              </p>

              <h2 className="mt-1 line-clamp-2 text-sm font-semibold leading-6 transition-colors duration-300 group-hover:text-red-700 sm:text-base">
                {on.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;