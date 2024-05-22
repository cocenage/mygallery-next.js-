"use client";

import Image from 'next/image';
import useSinglePainting from '@/hooks/useSinglePainting';
import Link from 'next/link';
import Comments from '@/components/Comments/Comments';
import useComments from '@/hooks/useComments';
import Header from '@/components/Header/Header';
import useReviews from '@/hooks/useComments';
import Footer from '@/components/Footer/Footer';

export default function page({ params }) {

  const detailArticle = useSinglePainting(params.id);
  // const commentsList = useComments(params.id);
  const reviewsList = useReviews();

  return (
    <>
      <Header />
      <section className='px-16 py-10'>

        <div className="grid grid-cols-3 gap-12">
          <div className="flex rounded-full">
            {detailArticle?.attributes?.image?.data.attributes?.url ?
              <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailArticle?.attributes?.image?.data.attributes?.url ?? '')} alt='' width={500} height={500} className='' />
              :
              <div className='w-full h-full bg-zinc-800 animate-pulse'></div>
            }
          </div>
          <div className="">

            <div className="py-10">
              <div className="  rounded-xl flex justify-between items-center ">
                <div className="flex ">
                  <Image className="object-cover object-center rounded-full w-14 h-14" src={process.env.NEXT_PUBLIC_STRAPI_API_URL + (detailArticle?.attributes?.author?.data.image?.data.attributes?.url ?? '')} alt="ava" width={40} height={40} />
                  <div className=" flex flex-col justify-center mr-36 pl-4">

                    <p className="text-black text-[14px]">
                      {detailArticle?.attributes?.author?.data.attributes?.name}
                    </p>
                    <p className="text-black text-[14px]">
                      {detailArticle?.attributes?.author?.data.attributes?.description}
                    </p>

                  </div>
                </div>
                <Link href="https://flowbi1te.com" className="flex items-center rounded-full p-4 bg-zinc-200 duration-300  text-black">
                  <span className=" ">больше работ</span>
                </Link>
              </div>
              <div className="pt-16 text-black text-[40px]">
                <h1>{detailArticle?.attributes?.name}</h1>
              </div>
              <div className="pt-10 text-black text-[20px]">
                <h2>{detailArticle?.attributes?.description}</h2>
              </div>
            </div>
          </div>
          <div className="py-14">
            <p className='text-black text-[18px]'>комментарии</p>
            <div className="relative h-full">


              <div className="absolute inset-x-0 bottom-0">
                <Comments />
              </div>
            </div>


          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}