import NewsCard from "@/app/components/NewsCard";

interface News {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
}

interface CategoryData {
  title: string;
  articles?: News[];
  [key: string]: unknown;
}

interface PageProps {
  params: Promise<{
    categoryId: string;
  }>;
}

const CategoryPage = async ({ params }: PageProps) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch category news");
  }

  const data = await res.json();

  // API response অনুযায়ী category data
  const categoryData: CategoryData = data.data;
  const categoryNews: News[] = Array.isArray(categoryData.articles)
    ? categoryData.articles
    : [];

  return (
    <div className="w-full">
      <h1 className="mb-5 border-b-2 border-red-700 pb-2 text-xl font-bold sm:text-2xl">
        {categoryData.title}
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;