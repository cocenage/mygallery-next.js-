import { CalendarDays, SlidersHorizontal, User } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Filter = () => {
    return (
        <article className='fixed'>
            <nav className="px-16 py-10">
                <div className="flex flex-wrap justify-between items-center ">
                    <div className="bg-zinc-200 rounded-full flex hover:bg-zinc-200 p-4 group relative text-black">
                    <SlidersHorizontal />

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
                                    <div className="p-4 flex rounded-full hover:bg-black hover:text-white text-black ">
                                    <CalendarDays />
                                        <div className="w-full flex justify-center">
                                            <p>По автору</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="p-4 flex rounded-full hover:bg-black hover:text-white text-black">
                                    <User />
                                        <div className="w-full flex justify-center">
                                            <p>По дате</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>


                        </div>


                    </div>

                </div>
            </nav>
        </article>
    )
}

export default Filter 
