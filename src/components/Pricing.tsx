"use client"
import axios from "axios";
import Cookies from 'js-cookie';

import { usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Bebas_Neue } from "next/font/google";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { backendUri } from "@/helpers/url";
import { PayButton } from "./PayButton";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


interface pricingBox {
    type: string,
    price: string,
    characteristics: string[],
    desc: string,
    billet: string,
    month: string
}

const bebas = Bebas_Neue({
    weight: ["400"], // bold de la fuente
    subsets: ["latin"],
    display: 'swap'
})

export const Pricing = ({ type, price, characteristics, desc, billet, month }: pricingBox) => {

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
    const [{ isPending, isResolved, isRejected }] = usePayPalScriptReducer();
    const [waiting, setwaiting] = useState(true);


    useEffect(() => {

        setuserInfo({
            token: Cookies.get('x-token') || '',
            username: Cookies.get('username') || '',
            email: Cookies.get('email') || '',
            uid: Cookies.get('uid') || '',
            planType: Cookies.get('plan-type') || ''
        })

        setTimeout(() => {
            setwaiting(false);
        }, 900);

    }, [])


    const subscribe = async (data: any, actions: any) => {
        return fetch(`${backendUri}/api/payment/subscribe`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${userInfo.token}`
            },
            body: JSON.stringify({
                planType: type.toLowerCase(),
                billetType: billet
            }),
        })
            .then((response) => response.json())
            .then((responseData) => {
                return actions.subscription.create({
                    'plan_id': responseData.planID,
                })
            });
    }

    // when the user have finished successfully some payment with react button
    const approve = async (data: any, actions: any) => {
        try {
            const { data: aproveSubData } = await axios.put(`${backendUri}/api/payment/approve/subscription`,
                { subscriptionId: data.subscriptionID },
                { headers: { 'Authorization': `Bearer ${userInfo.token}` } }
            );
            if (aproveSubData.status === "success") {
                notifySuccess("Have successfully subscribed, it may take a while for credits to appear in your account.");
            }
        } catch (error) {
            notifyError("Sorry there was an error, please try again later.");
        }

    }

    const goToLogin = () => {
        router.push('/auth/login');
    }


    return (
        <div className='p-6 rounded border-black border-opacity-40 border-solid border-[1px] h-auto'>


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
                (waiting && !(type.toString().toLowerCase() === userInfo.planType.toString().toLowerCase())) && <p>Loading...</p>
            }

            {
                (!waiting && !(type.toString().toLowerCase() === userInfo.planType.toString().toLowerCase())) && <>
                    {
                        isPending && <p>Loading...</p>
                    }

                    {
                        isRejected && <p className="text-xl font-bold text-red-400">😞 The paypal button failed to load, please reload the page or try again later.</p>
                    }

                    {
                        isResolved && <PayButton token={userInfo.token}
                            planType={userInfo.planType}
                            subscribe={subscribe}
                            approve={approve}
                            goToLogin={goToLogin}
                        />
                    }
                </>
            }

        </div>
    )
}
