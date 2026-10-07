import Image from 'next/image'
import React from 'react'
interface News {
    id: string;
    title: string
    description: string
    category: string
    imageUrl: string
    imageAlt: string
}
const NewsCard = ({ news }: { news: News }) => {
    return (
        <div >
            <div className="card bg-base-100 shadow-sm" >
                <figure>
                    <Image src={news.imageUrl} height={600} width={600} alt={news.imageAlt}></Image>
                </figure>
                <div className="card-body">
                    <p className='font-semibold text-red-600'>{news.category}</p>
                    <h2 className="card-title">{news.title}</h2>
                    <p>{news.description}</p>

                </div>
            </div>
        </div>
    )
}

export default NewsCard
