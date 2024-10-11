import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { Bebas_Neue } from 'next/font/google';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const bebas = Bebas_Neue({
    weight: ["400"], // bold de la fuente
    subsets: ["latin"],
    display: 'swap'
});


interface priceBoxInterface {
    actionButton: any,
    price: string,
    textMonth: string,
    characteristics: String[],
    title: string,
    desc: string,
    billedAnnually: boolean
}

export const PriceBox = ({
    actionButton,
    price,
    textMonth,
    characteristics,
    title,
    desc,
    billedAnnually
}: priceBoxInterface) => {

    return (

        <div className='flex flex-col items-center justify-center'>
            {
                billedAnnually &&
                <div className='mt-10 md:mt-0 flex justify-center items-center bg-[#5712DF] bg-opacity-80 text-white font-bold rounded-t-lg py-2 px-[8vw]'>
                    <h3 className='text-sm'>BEST VALUE</h3>
                </div>
            }
            <div className={`${!billedAnnually ? "mt-10" : ""} md:mx-4`}>

                <div className='p-6 rounded border-black border-opacity-40 border-solid border-[1px]'>

                    <div className="flex flex-col items-center text-center">
                        <h2 className={`font-bold text-[1.75rem] ${bebas.className}`}>
                            {title}
                        </h2>
                        <p className="text-sm my-4 mx-4 border-[#5712DF] py-2 px-4 rounded-full border-solid border-2 border-opacity-20">
                            {desc}
                        </p>
                        <h3 className=" font-extrabold text-3xl mt-4">{price} /<span className="text-lg">{textMonth}</span></h3>
                    </div>


                    <ul className="px-2 py-6 mb-4">
                        {
                            characteristics.map((char: any, index: any) => (
                                <li className="flex pt-3" key={index}>
                                    <FontAwesomeIcon
                                        width={20}
                                        height={20}
                                        className="text-green-400 mr-2 pt-2" icon={faCheck}
                                    />
                                    <p>{char}</p>
                                </li>

                            ))
                        }
                    </ul>


                    <button
                        className="hover:bg-[#6324DF] transition-all bg-[#5712DF] w-full text-white py-2 mt-4 rounded"
                    >
                        Buy
                    </button>

                </div>

            </div>
        </div>
    )
}
