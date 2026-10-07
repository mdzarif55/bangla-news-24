import Image from 'next/image'
import React from 'react'

interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl:string
    imageAlt : string
}

const MainNews = ({ news } : {news : News[]}) => {

    const [firstNews, ...otherNews] = news
    // const otherNews = news.slice(1)
    // console.log(firstNews)
    return (
        <div className='flex gap-2'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image src={firstNews.imageUrl} height={600} width={600} alt={firstNews.imageAlt}></Image>
                </figure>
                <div className="card-body">
                    <p className='font-semibold text-red-600'>{firstNews.category}</p>
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>

                </div>
            </div>
            <div className='grid gap-2'>
                {otherNews.slice(0, 4).map(on => <div className='card bg-base-100 border border-gray-300 p-5' key={on.id}><p className='font-semibold text-red-600'>{firstNews.category}</p><div>{on.title}</div> </div>)}
            </div>
        </div>
    )
}

export default MainNews
