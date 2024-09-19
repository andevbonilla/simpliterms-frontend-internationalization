"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios";
import Cookies from 'js-cookie';

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bebas_Neue } from "next/font/google";
import { backendUri } from "@/helpers/url";
import { FreePayButton } from './FreePayButton';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface freePricingBox {
    type: string,
    price: string,
    characteristics: string[],
    desc: string,
    month: string
}

const bebas = Bebas_Neue({
    weight: ["400"], // bold de la fuente
    subsets: ["latin"],
    display: 'swap'
})

export const FreePricing = ({ type, price, characteristics, desc, month }: freePricingBox) => {

    const notifyError = (message: string) => toast.error(message);
    const notifySuccess = (message: string) => toast.success(message);

    const [userInfo, setuserInfo] = useState({
        token: '',
        username: '',
        email: '',
        uid: '',
        planType: ''
    })
    const router = useRouter();
    const [waiting, setWaiting] = useState(true);

    useEffect(() => {

        setuserInfo({
            token: Cookies.get('x-token') || '',
            username: Cookies.get('username') || '',
            email: Cookies.get('email') || '',
            uid: Cookies.get('uid') || '',
            planType: Cookies.get('plan-type') || ''
        });

        setTimeout(() => {
            setWaiting(false);
        }, 200);

    }, []);

    const goToLogin = () => {
        router.push('/auth/login');
    }

    const freeSubscription = async () => {

        try {
            const { data } = await axios.put(`${backendUri}/api/payment/create-free`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${userInfo.token}`
                }
            });

            if (data.status === "success") {
                notifySuccess("You have successfully subscribed to the free plan");
                Cookies.set("plan-type", data.userDBUpdated.planType, { path: '/account' });
                Cookies.set("plan-type", data.userDBUpdated.planType, { path: '/' });
                setuserInfo({
                    ...userInfo,
                    planType: data.userDBUpdated.planType
                });
            }

        } catch (error) {
            notifyError("Could not subscribe to the free plan, try again");
        }

    }

    return (
        <>
            <div>

                <div className='p-6 rounded border-black border-opacity-40 border-solid border-[1px]'>

                    <div className="flex flex-col items-center text-center">
                        <h2 className={`font-bold text-[1.75rem] ${bebas.className}`}>{type}</h2>
                        <p className="text-sm my-4 mx-4 border-[#5712DF] py-2 px-4 rounded-full border-solid border-2 border-opacity-20">{desc}</p>
                        <h3 className=" font-extrabold text-3xl mt-4">{price} /<span className="text-lg">{month}</span></h3>
                    </div>


                    <ul className="px-2 py-6 mb-4">
                        {
                            characteristics.map((char: any, index: any) => (
                                <li className="flex pt-3" key={index}>
                                    <FontAwesomeIcon width={20} height={20} className="text-green-400 mr-2 pt-2" icon={faCheck} />
                                    <p>{char}</p>
                                </li>

                            ))
                        }
                    </ul>

                    {
                        (type.toString().toLowerCase() === userInfo.planType.toString().toLowerCase()) && <button className="hover:bg-[#6324DF] transition-all bg-[#5712DF] w-full text-white py-2 mt-4 rounded">You are already subscribed</button>
                    }

                    {
                        (!waiting && !(type.toString().toLowerCase() === userInfo.planType.toString().toLowerCase())) && <FreePayButton planType={userInfo.planType}
                            token={userInfo.token}
                            goToLogin={goToLogin}
                            freeSubscription={freeSubscription}
                        />
                    }


                </div>

            </div>
        </>

    )
}