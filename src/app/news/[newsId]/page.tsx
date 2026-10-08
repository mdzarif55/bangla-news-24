
import Image from "next/image";
import Link from "next/link";

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
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }

  const data = await res.json();
  const news: News = data.data;

  if (!news) {
    return (
      <div className="mx-auto flex min-h-[60vh] max-w-7xl items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            সংবাদ পাওয়া যায়নি
          </h1>

          <p className="mt-2 text-gray-500">
            আপনি যে সংবাদটি খুঁজছেন সেটি পাওয়া যায়নি।
          </p>

          <Link
            href="/"
            className="mt-5 inline-block rounded-md bg-red-700 px-5 py-2 text-white transition hover:bg-red-800"
          >
            হোমে ফিরে যান
          </Link>
        </div>
      </div>
    );
  }

  const publishedDate = new Date(news.firstPublished);

  return (
    <main className="bg-base-100">
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

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
  <article className="mx-auto max-w-4xl">

            {/* Category / Topic */}
            {news.topics.length > 0 && (
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
            <h1 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
              {news.title}
            </h1>

            {/* Author + Date */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-gray-200 pb-5 text-sm text-gray-500">

              {news.byline.length > 0 && (
                <div>
                  <span>লেখক: </span>

                  <span className="font-semibold text-gray-700">
                    {news.byline.map((person) => person.name).join(", ")}
                  </span>
                </div>
              )}

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
            </div>

            {/* Main Image */}
            {/* <div className="mt-6 overflow-hidden rounded-xl">
              <Image
                src={news.imageUrl}
                alt={news.title}
                width={1200}
                height={675}
                priority
                className="h-auto w-full object-cover"
              />
            </div> */}

            {/* Article Body */}
            <div className="mt-8">

              {news.body.map((item, index) => {

                {/* Text */}
                if (item.type === "text") {
                  return (
                    <p
                      key={index}
                      className="mb-6 text-lg leading-9 text-gray-800 sm:text-xl"
                    >
                      {item.text}
                    </p>
                  );
                }

                {/* Image */}
                if (item.type === "image") {
                  return (
                    <figure
                      key={index}
                      className="my-8"
                    >
                      <div className="overflow-hidden rounded-xl">
                        <Image
                          src={item.url}
                          alt={item.altText || item.caption}
                          width={item.width}
                          height={item.height}
                          className="h-auto w-full object-cover"
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
            {news.tags.length > 0 && (
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="mb-3 font-bold">
                  ট্যাগ
                </h3>

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

              <button
                className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 font-bold text-white transition hover:bg-red-700"
                aria-label="Facebook"
              >
                f
              </button>

              <button
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black font-bold text-white transition hover:bg-gray-800"
                aria-label="X"
              >
                𝕏
              </button>

              <button
                className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 font-bold text-white transition hover:bg-green-700"
                aria-label="WhatsApp"
              >
                W
              </button>
            </div>

            {/* Source */}
            <div className="mt-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
              <p>
                সূত্র:{" "}
                <span className="font-semibold">
                  {news.source}
                </span>
              </p>
            </div>
          </article>

          {/* ================= SIDEBAR ================= */}

          {/* <aside className="lg:col-span-1">
            <div className="sticky top-5 rounded-xl border border-gray-200 bg-base-100 p-5 shadow-sm">

              <h2 className="border-b-2 border-red-700 pb-3 text-xl font-bold">
                সর্বাধিক পঠিত
              </h2>

              <div className="mt-5 space-y-5">

                {[1, 2, 3, 4].map((number) => (
                  <Link
                    href="#"
                    key={number}
                    className="group flex gap-3"
                  >
                    <span className="text-2xl font-bold text-red-600">
                      {number}
                    </span>

                    <p className="font-semibold leading-6 transition group-hover:text-red-600">
                      সর্বশেষ গুরুত্বপূর্ণ সংবাদ ও আপডেট
                    </p>
                  </Link>
                ))}

              </div>
            </div>
          </aside> */}
        </div>
      </div>
    </main>
  );
};

export default NewsPage;
