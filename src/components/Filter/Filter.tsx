// "use client";
// import usePaintings from '@/hooks/usePaintings ';
// import { CalendarDays, SlidersHorizontal, User } from 'lucide-react'
// import Link from 'next/link'
// import React, { useState } from 'react'

// const Filter = () => {

//     const paintingsList = usePaintings();
//     const [selectedDate, setSelectedDate] = useState<string>("");
//     const [selectedAuthor, setSelectedAuthor] = useState<string>("");

//     const filteredPictures = paintingsList.filter(
//         (painting) =>
//             (selectedDate === "" ||
//                 new Date(painting.attributes?.date).getFullYear() ===
//                 parseInt(selectedDate)) &&
//             (selectedAuthor === "" ||
//                 painting.attributes?.autor_id?.data?.attributes?.name === selectedAuthor)
//     );


//     return (
//         // <article className='fixed'>
//         //     <nav className="px-16 py-10">
//         //         <div className="flex flex-wrap justify-between items-center ">
//         //             <div className="bg-zinc-200 rounded-full flex hover:bg-zinc-200 p-4 group relative text-black">
//         //                 <SlidersHorizontal width={20.2} height={22} />
//         //                 <div className=" group-hover:visible absolute w-40 bg-zinc-200 left-0 top-0 z-10 rounded-[2rem] ">
//         //                     <ul>
//         //                         <li>
//         //                             <div className="p-4 flex rounded-full text-black ">
//         //                                 <SlidersHorizontal />
//         //                                 <div className="w-full flex justify-center">
//         //                                     <p>Фильтр</p>
//         //                                 </div>
//         //                             </div>
//         //                         </li>
//         //                         <li>
//         //                             <div className="p-4 flex rounded-full hover:bg-black hover:text-white text-black">
//         //                                 <CalendarDays />
//         //                                 <div className="w-full flex justify-center">
//         //                                     <select
//         //                                         className="form-select appearance-none
                                             
//         //                                         block
//         //                                         w-full
//         //                                      bg-zinc-200
//         //                                     // hover:bg-black
//         //                                     // hover:text-white
//         //                                         align-center
//         //                                         text-base
//         //                                         font-normal
//         //                                         text-black
//         //                                         text-center
//         //                                         rounded
                                          
//         //                                         m-0
//         //                                  "
//         //                                         value={selectedDate}
//         //                                         onChange={(e) => setSelectedDate(e.target.value)}
//         //                                     >
//         //                                         <option value="">По дате</option>
//         //                                         {paintingsList.map((painting, index) => (
//         //                                             <option
//         //                                                 key={index}
//         //                                                 value={new Date(painting.attributes?.date).getFullYear()}
//         //                                             >
//         //                                                 {new Date(painting.attributes?.date).getFullYear()}
//         //                                             </option>
//         //                                         ))}
//         //                                     </select>
//         //                                 </div>
//         //                             </div>
//         //                         </li>
//         //                         <li>
//         //                             <div className="p-4 flex rounded-full hover:bg-black hover:text-white text-black">
//         //                                 <User />
//         //                                 <div className="w-full flex justify-center">
//         //                                     <p>По дате</p>
//         //                                 </div>
//         //                             </div>
//         //                         </li>
//         //                     </ul>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //     </nav>
//         // </article >
//         <></>
//     )
// }

// export default Filter 
