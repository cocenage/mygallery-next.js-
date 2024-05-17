"use client";

import Image from 'next/image';
import useSinglePainting from '@/hooks/useSinglePainting';
import Link from 'next/link';
import Comments from '@/components/Comments/Comments';
import useComments from '@/hooks/useComments';


export default function page({ params }) {

  const detailArticle = useSinglePainting(params.id);
  const commentsList = useComments();


  return (
    <section className='px-16 py-10'>
      <div className="grid grid-cols-3 gap-12">
        <div className="">
          {detailArticle?.attributes?.image?.data.attributes?.url ?
            <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailArticle?.attributes?.image?.data.attributes?.url ?? '')} alt='' width={500} height={500} className='' />
            :
            <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
          }
        </div>
        <div className="">

          <div className="">
            <div className="  rounded-xl flex justify-between items-center ">
              <Image className="object-cover object-center rounded-full w-12 h-12" src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailArticle?.attributes?.image?.data.attributes?.url ?? '')} alt="ava" width={40} height={40} />
              <div className=" flex flex-col justify-center mr-36">

                <p className="text-black text-[12px]">
                {detailArticle?.attributes?.author?.data.attributes?.name}
                </p>
                <p className="text-black text-[12px]">
                {detailArticle?.attributes?.author?.data.attributes?.description}
                </p>

              </div>
              <Link href="https://flowbi1te.com" className="flex items-center rounded-full p-4 bg-zinc-200 duration-300  text-black">
                <span className=" ">больше работ</span>
              </Link>
            </div>
            <div className="pt-16">
              <h1>{detailArticle?.attributes?.name}</h1>
            </div>
            <div className="pt-10">
              <h2>{detailArticle?.attributes?.description}</h2>
            </div>
          </div>
        </div>
        <div className="">
          <p>комментарии</p>
          <div className="">

            {commentsList.length > 0 ? commentsList.map((item, index) => {
              return (

                <div key={index} className=" text-black p-4 antialiased flex">
                  <img className="rounded-full h-8 w-8 mr-2 mt-1 " src="/1.png" />
                  <div>
                    <div className=" px-2 pt-2 pb-2.5">
                      <div className="font-semibold text-sm leading-relaxed">{item.attributes?.name}</div>
                      <div className="text-normal leading-snug md:leading-normal"
                      >{item.attributes?.description}</div>
                    </div>
                    {/* <div className="text-sm ml-4 mt-0.5 text-gray-500 dark:text-gray-400">{item.attributes?.createdAt}</div> */}

                  </div>
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
          <Comments />

        </div>
      </div>
    </section>
  )
}