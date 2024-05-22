"use client";
import useReviews from '@/hooks/useComments';
import useComments from '@/hooks/useComments';
import GlobalApi from '@/utils/GlobalApi';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { CornerRightUp } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Comments = () => {

    const [selectedAuthor, setSelectedAuthor] = useState(null);
    const reviewsList = useReviews();

    const [nameUser, setNameUser] = useState();
    const [text, setText] = useState();
    const [date, setDate] = useState();
    const [picture, setPicture] = useState();
    const [formField, setFormField] = useState(false);

    const { user } = useKindeBrowserClient();
    useEffect(() => {
        console.log(user)
    }, [user])

    useEffect(() => {
        if (nameUser && text && date && picture) {
            setFormField(true);
        } else {
            setFormField(false);
        }
    }, [nameUser, text, date, picture]);

    const saveFields = () => {
        const currentDate = new Date().toISOString();
        const data = {
            data: {
                nameUser: (user?.given_name || "") + " " + (user?.family_name || ""),
                text: text,
                date: currentDate,
                picture: selectedAuthor,
            },
        };
        GlobalApi.createOrder(data).then((resp) => {
            console.log(resp);
            if (resp) {
                alert("Данные успешно отправлены!");
            }
        });
    };





    return (
        <>
            {reviewsList
                // .filter(
                //     (commen) =>
                //         commen.attributes?.picture &&
                //         commen.attributes?.picture.data &&
                //         commen.attributes?.picture.data.id === selectedAuthor
                // )
                .map((commens, index) => {
                    return (



                        <div key={index} className=" text-black p-4 antialiased flex">
                             {user?.picture && <Image className='w-10 h-10 rounded-full object-cover object-center' src={user.picture} alt={'Изображение профиля'} width={150} height={150} />}
                            <div>
                                <div className=" px-2 pt-2 pb-2.5">
                                    <div className="font-semibold text-sm leading-relaxed">{user?.given_name}</div>
                                    <div className="text-normal leading-snug md:leading-normal"
                                    >{commens.attributes?.text}</div>
                                </div>
                                {/* <div className="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">{item.attributes?.createdAt}</div> */}

                            </div>
                        </div>




                    );
                })}
            <section >
                <div className="flex">
                    <input
                        className="w-full bg-inherit h-10 rounded-full border-[2px] border-zinc-200 text-black"
                        type="text"
                        onChange={(e) => setText(e.target.value)}
                        id="text"
                        placeholder="Написать комментарий"
                    />
                    <button
                        onClick={() => {
                            if (user) {
                                saveFields();
                            } else {
                                alert("Зарегестрируйтесь, чтобы оставлять комментарии");
                            }
                        }}
                        className=""
                    >
                        <CornerRightUp className='text-zinc-200'/>
                    </button>
                </div>
            </section >
        </>
    )
}

export default Comments