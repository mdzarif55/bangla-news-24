import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Byline {
  name: string;
  role: string;
}

interface Topic {
  id: string;
  name: string;
}

interface BodyText {
  type: "text";
  text: string;
}

interface BodyImage {
  type: "image";
  url: string;
  width: number;
  height: number;
  caption: string;
  altText: string;
  copyrightHolder?: string;
}

type BodyItem = BodyText | BodyImage;

interface News {
  id: string;
  title: string;
  description: {
    blocks: unknown[];
  };
  link: string;
  firstPublished: string;
  lastPublished: string;
  byline: Byline[];
  topics: Topic[];
  tags: string[];
  imageUrl: string;
  body: BodyItem[];
  text: string;
  wordCount: number;
  source: string;
  sourceUrl: string;
}

const NewsPage = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${encodeURIComponent(newsId)}`,
    {
      next: { revalidate: 60 },
    }
  );

  // Invalid ID or missing article
  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const news: News | null = data.data;

  if (!news || !news.id || !news.title) {
    notFound();
  }

  const publishedDate = new Date(news.firstPublished);

  return (
    <main className="w-full bg-base-100">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:py-10">
        {/* Back */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-red-600"
          >
            ← হোমে ফিরে যান
          </Link>
        </div>

        <article>
          {/* Topics */}
          {news.topics?.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {news.topics.map((topic) => (
                <span
                  key={topic.id}
                  className="rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-700"
                >
                  {topic.name}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-2xl font-bold leading-tight text-gray-900 sm:text-3xl lg:text-4xl">
            {news.title}
          </h1>

          {/* Author + Date */}
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-gray-200 pb-5 text-sm text-gray-500">
            {news.byline?.length > 0 && (
              <div>
                <span>লেখক: </span>
                <span className="font-semibold text-gray-700">
                  {news.byline.map((person) => person.name).join(", ")}
                </span>
              </div>
            )}

            {news.firstPublished && !Number.isNaN(publishedDate.getTime()) && (
              <>
                <span>
                  প্রকাশিত:{" "}
                  {publishedDate.toLocaleDateString("bn-BD", {
                    dateStyle: "long",
                  })}
                </span>

                <span>
                  {publishedDate.toLocaleTimeString("bn-BD", {
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </span>
              </>
            )}
          </div>

          {/* Article Body */}
          <div className="mt-8">
            {news.body?.map((item, index) => {
              if (item.type === "text") {
                return (
                  <p
                    key={index}
                    className="mb-6 text-base leading-8 text-gray-800 sm:text-lg sm:leading-9"
                  >
                    {item.text}
                  </p>
                );
              }

              if (item.type === "image") {
                return (
                  <figure key={index} className="my-8">
                    <div className="overflow-hidden rounded-xl">
                      <Image
                        src={item.url}
                        alt={item.altText || item.caption || news.title}
                        width={item.width || 1200}
                        height={item.height || 675}
                        className="h-auto w-full object-cover"
                        sizes="(max-width: 768px) 100vw, 768px"
                      />
                    </div>

                    {item.caption && (
                      <figcaption className="mt-2 text-sm leading-6 text-gray-500">
                        {item.caption}
                      </figcaption>
                    )}

                    {item.copyrightHolder && (
                      <p className="mt-1 text-xs text-gray-400">
                        ছবি: {item.copyrightHolder}
                      </p>
                    )}
                  </figure>
                );
              }

              return null;
            })}
          </div>

          {/* Tags */}
          {news.tags?.length > 0 && (
            <div className="mt-8 border-t border-gray-200 pt-6">
              <h3 className="mb-3 font-bold text-gray-800">ট্যাগ</h3>

              <div className="flex flex-wrap gap-2">
                {news.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Share */}
          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-gray-200 pt-6">
            <span className="font-semibold text-gray-700">
              শেয়ার করুন:
            </span>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(news.link || news.sourceUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 font-bold text-white transition hover:bg-red-700"
            >
              f
            </a>

            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(news.link || news.sourceUrl)}&text=${encodeURIComponent(news.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black font-bold text-white transition hover:bg-gray-800"
            >
              𝕏
            </a>

            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${news.title} ${news.link || news.sourceUrl}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 font-bold text-white transition hover:bg-green-700"
            >
              W
            </a>
          </div>

          {/* Source */}
          {news.source && (
            <div className="mt-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
              <p>
                সূত্র: <span className="font-semibold">{news.source}</span>
              </p>
            </div>
          )}
        </article>
      </div>
    </main>
  );
};

export default NewsPage;