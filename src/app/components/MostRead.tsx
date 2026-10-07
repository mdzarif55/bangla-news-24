import React from 'react'
interface MostReadNews {
    id:string
    title:string
}
const MostRead = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read")
    const data = await res.json()
    const news :MostReadNews[] =data.data
    console.log(news)
    return (
        <div className='card p-2 bg-base-100 border border-gray-300'>
            <h1 className='font-bold border-b-2 border-red-800 text-red-700 '>সর্বাধিক পঠিত</h1>
            <div className='grid gap-3 mt-3'>
                {news.map((n,i)=> <div key={n.id} className='flex items-baseline gap-1'>
                    <p className='font-semibold '>{i+1}.</p><h2>{n.title}</h2>
                </div>)}
            </div>
        </div>
    )
}

export default MostRead
