"use client";

import usePaintings from '@/hooks/usePaintings ';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CalendarDays, SlidersHorizontal, User } from 'lucide-react'
import useAuthors from '@/hooks/useAuthors';

const Net = () => {

    const paintingsList = usePaintings();
    const authorsList = useAuthors();

    const [selectedDate, setSelectedDate] = useState<string>("");
    const [selectedAuthor, setSelectedAuthor] = useState<string>("");

    const filteredPictures = paintingsList.filter(
        (painting) =>
            (selectedDate === "" ||
                new Date(painting.attributes?.date).getFullYear() ===
                parseInt(selectedDate)) &&
            (selectedAuthor === "" ||
                painting.attributes?.author?.data?.attributes?.name === selectedAuthor)
    );

    return (
        <>
            <article className='fixed top-24'>
                <nav className="px-16 py-10 ">
                    <div className="flex flex-wrap justify-between items-center ">
                        <div className="bg-zinc-200 rounded-full flex hover:bg-zinc-200 p-4 group relative text-black">
                            <SlidersHorizontal width={20.2} height={22} />
                            <div className="invisible group-hover:visible absolute w-40 bg-zinc-200 left-0 top-0 z-10 rounded-[2rem] ">
                                <ul>
                                    <li>
                                        <div className="p-4 flex rounded-full text-black ">
                                            <SlidersHorizontal />
                                            <div className="w-full flex justify-center">
                                                <p>Фильтр</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="p-4 flex rounded-full">
                                            <CalendarDays />
                                            <div className="w-full flex justify-center">
                                                <select
                                                    className="form-select appearance-none
                                                block
                                                w-full
                                             bg-zinc-200
                                           
                                                align-center
                                                text-base
                                                font-normal
                                                text-black
                                                text-center
                                                rounded 
                                                m-0"
                                                    value={selectedDate}
                                                    onChange={(e) => setSelectedDate(e.target.value)}
                                                >
                                                    <option value="">По дате</option>
                                                    {paintingsList.map((painting, index) => (
                                                        <option
                                                            key={index}
                                                            value={new Date(painting.attributes?.date).getFullYear()}
                                                        >
                                                            {new Date(painting.attributes?.date).getFullYear()}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="p-4 flex rounded-full hover:bg-black hover:text-white text-black">
                                            <User />
                                            <div className="w-full flex justify-center">
                                                <select
                                                    className="form-select appearance-none
                                                     block
                                                     w-full
                                                  bg-zinc-200
                                                 // hover:bg-black
                                                 // hover:text-white
                                                     align-center
                                                     text-base
                                                     font-normal
                                                     text-black
                                                     text-center
                                                     rounded 

                                                     m-0"
                                                     
                                                    name=""
                                                    id=""
                                                    value={selectedAuthor}
                                                    onChange={(e) => setSelectedAuthor(e.target.value)}
                                                >
                                                    <option value="">По автору</option>
                                                    {authorsList.map((author, index) => (
                                                        <option key={index} value={author.attributes?.name}>
                                                            {author.attributes?.name}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </article >
            {/* <select
                className=" border-[3px] pl-2 pr-10 w-[auto] h-[56px] font-medium text-black text-xl border-korich rounded-md custom-select"
                name=""
                id=""
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
            >
                <option value="">Все даты</option>
                {paintingsList.map((painting, index) => (
                    <option
                        key={index}
                        value={new Date(painting.attributes?.date).getFullYear()}
                    >
                        {new Date(painting.attributes?.date).getFullYear()}
                    </option>
                ))}
            </select> */}
            {/* <select
                className="border-[3px] pr-10 pl-2 w-[auto] h-[56px] font-medium text-black text-xl border-korich rounded-md custom-select"
                name=""
                id=""
                value={selectedAuthor}
                onChange={(e) => setSelectedAuthor(e.target.value)}
            >
                <option value="">Все авторы</option>
                {paintingsList.map((author, index) => (
                    <option key={index} value={author.attributes?.name}>
                        {author.attributes?.name}
                    </option>
                ))}
            </select> */}
            <section className='px-16 py-4'>
                <div className="grid grid-cols-4 gap-10">
                    {filteredPictures.length === 0 ? (
                        <div className="w-full h-[500px] rounded-xl bg-zinc-800 animate-pulse"></div>
                    ) : (
                        filteredPictures.map((item, index) => {
                            return (
                                <div key={index}>
                                    <Link href={'/paintings/' + item.attributes?.slug}>
                                        <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url} alt={'Изображение'} width={1000} height={300} className='w-full rounded-[50]' />
                                    </Link>
                                </div>
                            );
                        })
                    )}
                </div>
            </section>
      
            {/* <section className='px-16 '>
                <div className="grid grid-cols-5 gap-10 px-4 ">
                    {paintingsList.length > 0 ? paintingsList.map((item, index) => {
                        return (
                            <div key={index}>
                                <Link href={'/paintings/' + item.attributes?.slug}>
                                    <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + item.attributes?.image?.data.attributes?.url} alt={'Изображение'} width={1000} height={300} className='w-full rounded-[50]' />
                                </Link>
                            </div>
                        );
                    })
                        :
                        [1, 2, 3, 4, 5].map((item, index) => {
                            return (
                                <div key={index} className="w-full h-[500px] rounded-xl bg-zinc-800 animate-pulse"></div>
                            );
                        })}
                </div>
            </section> */}
        </>
    )
}

export default Net
