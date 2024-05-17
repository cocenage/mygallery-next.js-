"use client";
import { LoginLink, LogoutLink, RegisterLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {

    const [openNav, setOpenNav] = useState(false);
    const { user } = useKindeBrowserClient();
    useEffect(() => {
        console.log(user)
    }, [user])

    return (
        <header>
            <nav className="px-16 py-10">
                <div className="flex flex-wrap justify-between items-center ">
                    <div className="bg-black  rounded-full flex   ">
                        <Link href="https://flowbi1te.com" className="flex items-center rounded-full p-4 hover:bg-zinc-200 duration-300 text-white hover:text-black">
                            <span className=" ">Картина</span>
                        </Link>
                        <Link href="https://flowbi1te.com" className="flex items-center rounded-full p-4 hover:bg-zinc-200 duration-300 text-white hover:text-black">
                            <span className=" ">Автор</span>
                        </Link>
                    </div>
                    <div className="flex items-center bg-zinc-200 rounded-full border-none group hover:bg-black duration-300 text-black hover:text-white">
                        {
                            user ?
                                <>
                                    <li className="flex items-center rounded-full p-4">
                                        <Link href={'/profile'}><p>{user?.given_name}</p></Link>

                                    </li>
                                    <li className="flex items-center rounded-full p-4 bg-black">

                                        <LogoutLink className='text-white'>Выйти</LogoutLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="flex items-center rounded-full p-4">
                                        <LoginLink className=''>Войти</LoginLink>
                                    </li>
                                    <li className="flex items-center rounded-full p-4 bg-black z-10">
                                        <RegisterLink className='text-white'>Регистрация</RegisterLink>
                                    </li>
                                </>
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header




