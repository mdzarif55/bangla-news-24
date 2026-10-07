import React from 'react'
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface headline{
    id:string
    title:string
}
const Marquee = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10")
    const data = await res.json()
    const headline:headline[] = data.data;
    return (
        <div className='bg-red-700 text-white'>
            <div className='flex max-w-7xl mx-auto'>
            <div className='bg-red-800 py-1 px-5 font-bold '>সর্বশেষ</div>
            <MarqueeText className='py-1' direction='right' duration={20}>
                {headline.map(h => <span key={h.id}>
                    <span>{h.title}</span>
                    <span className='px-2'>💠</span>
                </span>)}
            </MarqueeText>
            </div>
        </div>
    )
}

export default Marquee
