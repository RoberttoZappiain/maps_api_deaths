import React from 'react'
import { Carousel, Badge, Button } from 'flowbite-react'
import { HiClock } from 'react-icons/hi'
import { GiChewedSkull } from 'react-icons/gi'
import { HiOutlineExclamationCircle } from 'react-icons/hi'

const Cards = () => {
    return (
        <div className='cards'>
            <div className="">          

                <div class="flex justify-between items-center">
                <p className='text-base ml-3 text-gray-400 font-semibold'>ID: 008414 </p>
                    <div class="">        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                        <svg aria-hidden="true" class="w-7 h-7" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    </div>

                </div>
                <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
                    <Carousel slide={false}
                    >
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                            alt="..."
                        />
                        <img
                            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
                            alt="..."
                        />
                    </Carousel>
                </div>
                <div class="flex justify-center my-3 gap-2 ...">
                    <div>
                        <Badge
                            color="failure"
                            size="sm"
                        >
                            badge
                        </Badge>
                    </div>
                    <div><Badge
                        color="pink"
                        size="sm"
                    >
                        badge
                    </Badge></div>
                    <div><Badge
                        color="indigo"
                        size="sm"
                    >
                        Indigo
                    </Badge></div>
                </div>
                <div class="flex justify-between mx-5">
                    <div>
                        <p class="font-light text-sm">Tepic, Nayarit. MX</p></div>
                    <div><Badge
                        color="gray"
                        icon={HiClock}
                    >
                        3 days ago
                    </Badge></div>
                </div>
                <div class="flex flex-col text-center">
                    <div><p className='text-2xl font-sans font-medium mt-3'>Titulo largo de cualquier nota aqui</p></div>
                    <div><p className='text-sm font-sans font-light leading-relaxed text-justify text-gray-600 mt-3 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, deleniti magnam! Repudiandae aperiam unde aliquam. Debitis, beatae sunt excepturi illo odio iure omnis? Labore ratione culpa cum excepturi nobis voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam atque a perspiciatis! Voluptatem omnis impedit natus quam modi amet ea, possimus ipsum temporibus aspernatur illum saepe voluptatibus ipsa distinctio rerum! </p></div>

                </div>
                <div class="flex justify-start flex-wrap my-3 mx-5">
                    <div>
                        <Badge
                            size="sm"
                            color="failure"
                            icon={GiChewedSkull}>
                            Defunciones 0
                        </Badge></div>

                </div>
            </div>
        </div>
    )
}

export default Cards
