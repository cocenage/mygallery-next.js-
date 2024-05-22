'use client'
import React, { useEffect, useState } from 'react'
import { LoginLink, LogoutLink, RegisterLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Name from '../Name/Name'
import Link from 'next/link';

const Footer = () => {

    const [openNav, setOpenNav] = useState(false);
    const { user } = useKindeBrowserClient();
    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <footer
            className="flex flex-col  bg-[#1E1E1E] ">
            <div className="">
                <div className="flex relative justify-between px-16 ">
                    <div className="">
                        <p className='text-[200px]'>Глеберея</p>
                    </div>

                    <div className="flex justify-center content-around flex-wrap w-full">

                        <div className="flex gap-4">
                            {
                                user ?
                                    <>
                                        <li className="flex items-center rounded-full py-4 px-24">
                                            <Link href={'/profile'}><p>{user?.given_name}</p></Link>

                                        </li>
                                        <li className="flex items-center rounded-full py-4 px-24 bg-zinc-200 text-black">

                                            <LogoutLink className=''>Выйти</LogoutLink>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="flex items-center rounded-full py-4 px-24  bg-zinc-200 z-10 text-black">
                                            <LoginLink className=''>Вход</LoginLink>
                                        </li>
                                        <li className="flex items-center rounded-full py-4 px-24 bg-zinc-200 z-10 text-black">
                                            <RegisterLink className=''>Регистрация</RegisterLink>
                                        </li>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <hr className='h-px px-16 mx-16 bg-[#5E7076]  border-none' />
            <div className="w-ful px-16 py-6 text-[#5E7076] w-full">
                © глебарея 2024
            </div>
        </footer>
    )
}

export default Footer
