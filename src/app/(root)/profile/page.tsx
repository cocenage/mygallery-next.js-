"use client";
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import Image from 'next/image';
import React, { useEffect } from 'react';

export default function page() {

  const {user} = useKindeBrowserClient();

  return (
    <section className='w-full py-16'>
      <div className="container mx-auto">
        <div className="w-full flex flex-col items-center">
          {user?.picture && <Image className='w-[150px] h-[150px] rounded-full object-cover object-center' src={user.picture} alt={'Изображение профиля'} width={150} height={150} />}
          <h2 className="text-center text-white uppercase text-2xl mt-12">{user?.email}</h2>
          <h3 className="text-center text-white/70 mt-2">{user?.family_name} {user?.given_name}</h3>
        </div>
      </div>
    </section>
  )
}