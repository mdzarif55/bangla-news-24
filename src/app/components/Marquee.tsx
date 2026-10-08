import Link from "next/link";
import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headline {
  id: string;
  title: string;
}

const Marquee = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news?limit=10"
  );

  const data = await res.json();

  const headlines: Headline[] = data.data;

  return (
    <div className="bg-red-700 text-white">
      <div className="mx-auto flex max-w-7xl">
        <div className="bg-red-800 px-5 py-1 font-bold">
          সর্বশেষ
        </div>

        <MarqueeText
          className="py-1"
          direction="right"
          duration={20}
        >
          {headlines.map((h) => (
            <Link
              key={h.id}
              href={`/news/${h.id}`}
              className=" inline-block transition hover:text-yellow-200"
            >
              <span>{h.title}</span>
              <span className="p-2">💠</span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;