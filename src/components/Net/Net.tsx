"use client";

import usePaintings from '@/hooks/usePaintings ';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Net = () => {

    const paintingsList = usePaintings();

    return (
        <section className='px-16 '>
            <div className="grid grid-cols-5 gap-10 px-4">
                {paintingsList.length > 0 ? paintingsList.map((item, index) => {
                    return (
                        <div key={index}>
                            <Link href={'/paintings/' + item.attributes?.slug}>
                                <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url} alt={'Изображение'} width={1000} height={300} className='w-full   border-full' />
                            </Link>
                        </div>
                    )
                })
                    :
                    [1, 2, 3, 4, 5].map((item, index) => {
                        return (
                            <div key={index} className="w-full h-[500px] rounded-xl bg-zinc-800 animate-pulse"></div>
                        );
                    })}
            </div>
        </section>
    )
}

export default Net
