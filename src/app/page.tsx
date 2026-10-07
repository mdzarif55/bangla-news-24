import Image from "next/image";
import Marquee from "./components/Marquee";
import MainNews from "./components/MainNews";
import NewsCard from "./components/NewsCard";
import MostRead from "./components/MostRead";
interface otherSection{
  curationId: string;
  title:string;
  articles:{
    id:string
    title:string
    description:string
    category:string
    imageUrl:string
    imageAlt:string
  }[];
}

export default async function Home() {

  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections")
  const data = await res.json()
  const sections = data.data;
  const mainNews = sections[0].articles
  const otherSection : otherSection[] = sections.slice(1)

  console.log(otherSection)
  return (
    <div className="">
      

      <div className="grid grid-cols-3 gap-2 mt-5">
        {/* news section  */}
        <div className=" col-span-2 ">
          <MainNews news={mainNews} />

          <div className="grid gap-5 mt-5 ">
            {otherSection.map(os => <div key={os.curationId} className=""><h1 className="font-bold border-b-2 pb-1 border-red-700 ">{os.title}</h1>
            <div className="grid grid-cols-3 gap-2 mt-5 ">{os.articles.map(news=><NewsCard key={news.id} news={news}/>)}</div> </div>)}
          </div>
        </div>

        {/* most read section  */}
        <div className="col-span-1"><MostRead/></div>
      </div>
    </div>
  );
}
