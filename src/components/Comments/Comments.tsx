"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const Comments = () => {

    // ищем два состояния для наших полей
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [formField, setFormField] = useState(false);

    useEffect(() => {
        if (name && description) {
            setFormField(true);
        } else {
            setFormField(false);
        }
    }, [name, description]);

    const saveFields = () => {
        const data = {
            data: {
                name: name,
                description: description
            }
        }
        GlobalApi.createOrder(data).then(resp => {
            console.log(resp);
            if (resp) {
                alert('Данные успешно отправлены!');
            }
        });
    }



    return (
        <section className=''>
            <form className="flex flex-col">
               
                <div className="mb-5">
                    <input type="text" id='name' onChange={(e) => setName(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="mb-5">
                    <input id="description" onChange={(e) => setDescription(e.target.value)} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <button disabled={!formField} onClick={() => saveFields()} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">прокомментировать</button>
            </form>
        </section>
    )
}

export default Comments