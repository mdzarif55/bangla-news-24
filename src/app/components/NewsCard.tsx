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

const NewsCard = ({ news }: { news: News }) => {
  return (
    <Link href={`/news/${news.id}`} className="group block h-full">
      <div className="card h-full overflow-hidden bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        
        {/* Image */}
        <figure className="h-44 w-full overflow-hidden sm:h-48 md:h-52 lg:h-48">
          <Image
            src={news.imageUrl}
            height={600}
            width={600}
            alt={news.imageAlt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </figure>

        {/* Content */}
        <div className="card-body gap-2 p-4 sm:p-5">
          {/* Category */}
          <p className="text-sm font-semibold text-red-600">
            {news.category}
          </p>

          {/* Title */}
          <h2 className="line-clamp-2 text-base font-bold leading-6 transition-colors duration-300 group-hover:text-red-700 sm:text-lg">
            {news.title}
          </h2>

          {/* Description */}
          <p className="line-clamp-3 text-sm leading-6 text-gray-600 sm:text-[15px]">
            {news.description}
          </p>

          {/* Read More */}
          <span className="mt-1 text-sm font-semibold text-red-600 transition-all duration-300 group-hover:translate-x-1">
            বিস্তারিত পড়ুন →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;