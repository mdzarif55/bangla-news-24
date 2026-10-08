// import Image from "next/image";
// import Marquee from "./components/Marquee";
// import MainNews from "./components/MainNews";
// import NewsCard from "./components/NewsCard";
// import MostRead from "./components/MostRead";
// interface otherSection{
//   curationId: string;
//   title:string;
//   articles:{
//     id:string
//     title:string
//     description:string
//     category:string
//     imageUrl:string
//     imageAlt:string
//   }[];
// }

// export default async function Home() {

//   const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
//   const data = await res.json()
//   const sections = data.data;
//   const mainNews = sections[0].articles
//   const otherSection : otherSection[] = sections.slice(1)

//   console.log(otherSection)
//   return (
//     <div className="">
      

//       <div className="grid grid-cols-3 gap-2 mt-5">
//         {/* news section  */}
//         <div className=" col-span-2 ">
//           <MainNews news={mainNews} />

//           <div className="grid gap-5 mt-5 ">
//             {otherSection.map(os => <div key={os.curationId} className=""><h1 className="font-bold border-b-2 pb-1 border-red-700 ">{os.title}</h1>
//             <div className="grid grid-cols-3 gap-2 mt-5 ">{os.articles.map(news=><NewsCard key={news.id} news={news}/>)}</div> </div>)}
//           </div>
//         </div>

//         {/* most read section  */}
//         <div className="col-span-1"><MostRead/></div>
//       </div>
//     </div>
//   );
// }


import MainNews from "./components/MainNews";
import NewsCard from "./components/NewsCard";
import MostRead from "./components/MostRead";

interface OtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }[];
}

export default async function Home() {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/sections"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch news sections");
  }

  const data = await res.json();

  const sections = data.data;

  const mainNews = sections[0]?.articles ?? [];
  const otherSection: OtherSection[] = sections.slice(1);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* ================= NEWS ================= */}
        <div className="min-w-0 lg:col-span-2">
          <MainNews news={mainNews} />

          <div className="mt-8 grid gap-8">
            {otherSection.map((section) => (
              <section key={section.curationId}>
                {/* Section Title */}
                <h1 className="border-b-2 border-red-700 pb-2 text-lg font-bold text-gray-800 sm:text-xl">
                  {section.title}
                </h1>

                {/* News Cards */}
                <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.articles.map((news) => (
                    <NewsCard
                      key={news.id}
                      news={news}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* ================= MOST READ ================= */}
        <aside className="min-w-0 lg:col-span-1">
          <MostRead />
        </aside>
      </div>
    </div>
  );
}