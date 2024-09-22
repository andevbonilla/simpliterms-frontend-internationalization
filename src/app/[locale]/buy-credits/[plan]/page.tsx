"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { backendUri, paypalClientId } from '@/helpers/url';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import Cookies from 'js-cookie';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PayButtonOnce } from '@/components/PayButtonOnce';


const BuyCreditsPage = ({ params }: any) => {

    const notifySuccess = (message: string) => toast.success(message);
    const router = useRouter();

    const [actualLanguage, setactualLanguage] = useState("");
    const [texts, settexts] = useState({
        question: "Why credits?",
        answer: "Generating AI summaries incurs a cost based on text length and language, converted into credits. If you run out of credits, you'll need to buy more or wait for the next subscription charge to get more credits.",
        buyMessage: "Buy now for: "
    })
    const [actualPlan, setActualPlan] = useState({
        planName: "",
        planPrice: "",
        realPrice: "",
        credits: "",
        save: ""
    })

    const [userInfo, setuserInfo] = useState({
        token: '',
        username: '',
        email: '',
        uid: '',
        planType: ''
    })

    const [waiting, setWaiting] = useState(true)

    useEffect(() => {

        const language = localStorage.getItem("language");

        if (language !== null && language !== undefined) {
            setactualLanguage(language);
        }

        switch (language) {
            case "ru":
                settexts({
                    question: "Почему кредиты?",
                    answer: "Генерация AI-резюме влечет за собой затраты в зависимости от длины текста и языка, преобразованных в кредиты. Если у вас закончатся кредиты, вам нужно будет купить больше или подождать следующего списания подписки, чтобы получить больше кредитов.",
                    buyMessage: "Купить сейчас за: ",
                });
                break;
            case "zh":
                settexts({
                    question: "为什么积分?",
                    answer: "生成AI摘要会产生基于文本长度和语言的成本，转换为积分。 如果您的积分用完，您需要购买更多或等待下次订阅收费以获得更多积分。",
                    buyMessage: "现在购买: "
                });
                break;
            case "fr":
                settexts({
                    question: "Pourquoi des crédits?",
                    answer: "La génération de résumés AI entraîne des coûts basés sur la longueur du texte et la langue, convertis en crédits. Si vous manquez de crédits, vous devrez en acheter davantage ou attendre le prochain prélèvement d'abonnement pour obtenir plus de crédits.",
                    buyMessage: "Achetez maintenant pour: "
                });
                break;
            case "po":
                settexts({
                    question: "Por que créditos?",
                    answer: "A geração de resumos de IA gera custos com base no comprimento do texto e no idioma, convertidos em créditos. Se você ficar sem créditos, precisará comprar mais ou esperar pela próxima cobrança de assinatura para obter mais créditos.",
                    buyMessage: "Compre agora por: "
                });
                break;
            case "es":
                settexts({
                    question: "¿Por qué créditos?",
                    answer: "Generar resúmenes de IA conlleva un costo basado en la longitud del texto y el idioma, convertido en créditos. Si te quedas sin créditos, tendrás que comprar más o esperar a la próxima carga de la suscripción para obtener más créditos.",
                    buyMessage: "Compra ahora por: "
                });
                break;
            case "ja":
                settexts({
                    question: "なぜクレジット?",
                    answer: "AI要約の生成には、テキストの長さと言語に基づくコストがかかり、これはクレジットに変換されます。 クレジットがなくなった場合は、さらに購入するか、次の定期購読料金を待ってクレジットを取得する必要があります。",
                    buyMessage: "今すぐ購入: "
                });
                break;
            case "hi":
                settexts({
                    question: "क्यों क्रेडिट्स?",
                    answer: "AI संक्षेप उत्पन्न करने पर पाठ की लंबाई और भाषा के आधार पर लागत आती है, जो क्रेडिट्स में बदली जाती है। यदि आपके क्रेडिट्स खत्म हो जाएं, तो आपको और खरीदना होगा या अगले सब्सक्रिप्शन चार्ज का इंतजार करना होगा ताकि आप और क्रेडिट्स प्राप्त कर सकें।",
                    buyMessage: "अब खरीदें: "
                });
                break;
            default:
                break;
        }


        setPlanInfo();
        setuserInfo({
            token: Cookies.get('x-token') || '',
            username: Cookies.get('username') || '',
            email: Cookies.get('email') || '',
            uid: Cookies.get('uid') || '',
            planType: Cookies.get('plan-type') || ''
        });

        setTimeout(() => {
            setWaiting(false);
        }, 1000);

    }, []);

    const setPlanInfo = () => {

        const paramPlan = params.plan?.toString().toLowerCase() || "";

        if (paramPlan === "amateur") {

            setActualPlan({
                planName: "Amateur",
                planPrice: "5.99",
                realPrice: "5.99",
                credits: "20.000",
                save: ''
            })

        } else if (paramPlan === "rich") {

            setActualPlan({
                planName: "Rich",
                planPrice: "12.49",
                realPrice: "14.98",
                credits: "50.000",
                save: 'save $2.5 Most popular'
            })

        } else if (paramPlan === "millionarie") {

            setActualPlan({
                planName: "Millionarie",
                planPrice: "19.99",
                realPrice: "29.99",
                credits: "100.000",
                save: 'save $10'
            })

        } else if (paramPlan === "billionarie") {

            setActualPlan({
                planName: "Billionarie",
                planPrice: "149.99",
                realPrice: "299.49",
                credits: "1.000.000",
                save: 'save 50% Best offer'
            })

        } else {

            router.push("/");

        }

    }

    const createOrder = async (data: any, actions: any) => {
        return fetch(`${backendUri}/api/payment/create-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${userInfo.token}`
            },
            body: JSON.stringify({
                planType: actualPlan.planName
            })
        })
            .then((response) => response.json())
            .then((responseData) => { return responseData.orderID })
    }

    const onApprove = async (data: any, actions: any) => {
        return fetch(`${backendUri}/api/payment/capture-order`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${userInfo.token}`
            },
            body: JSON.stringify({
                orderID: data.orderID
            })
        })
            .then((response) => response.json())
            .then((responseData) => { notifySuccess(`😊 Thank you very much for your purchase, now you have ${responseData.credits} credits`); })
    }

    return (
        <PayPalScriptProvider options={{ clientId: paypalClientId }}>

            <ToastContainer
                pauseOnHover
                theme="colored"
                className={'absolute'}
            />


            <Navbar language={actualLanguage} />

            <main className='px-[10%] grid grid-cols-1 md:grid-cols-2 md:gap-[3rem]'>

                <div className='w-full mb-6 md:mb-0'>

                    <div className="container mx-auto">
                        <div className="bg-gradient-to-br from-[#5712DF] to-[#7F4EDF] text-white text-center py-10 px-10 md:px-20 rounded-lg shadow-md relative">
                            <h3 className="text-xl font-semibold mb-4 mt-4">{actualPlan.planName} PLAN</h3>
                            <div className="flex items-center justify-center space-x-2 mb-6">
                                <span className="border-dashed border text-4xl font-bold text-white px-4 py-2 rounded">{actualPlan.credits}</span>
                            </div>
                            <div className='flex flex-col md:flex-row items-center justify-center'>
                                <p className="text-base mb-4 md:mb-0">credits</p>
                                {(actualPlan.save !== "") && <span className='bg-[#4EDFAC] text-base md:text-lg md:ml-2 rounded-full py-3 px-4 md:py-2 md:px-3'>{actualPlan.save}</span>}
                            </div>
                            {/* circles */}
                            <div className="w-20 h-20 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 left-0 -ml-10"></div>
                            <div className="w-20 h-20 bg-white rounded-full absolute top-1/2 transform -translate-y-1/2 right-0 -mr-10"></div>
                        </div>
                    </div>

                </div>

                <div className='w-full'>

                    <h3 className='font-bold'>{texts.question}</h3>

                    <p className='text-sm leading-6 mb-8'>{texts.answer}</p>

                    <div>
                        <h2 className='text-xl mb-4 font-medium'>{texts.buyMessage} {(actualPlan.realPrice !== actualPlan.planPrice) && <span className=' opacity-60 text-xl md:text-2xl font-bold ml-1 line-through decoration-red-500'>${actualPlan.realPrice}</span>} <span className='text-2xl md:text-3xl font-bold ml-1'>${actualPlan.planPrice}</span></h2>
                        {
                            !waiting && <PayButtonOnce onApprove={onApprove} createOrder={createOrder} />
                        }
                        {
                            waiting && <p>Loading...</p>
                        }
                    </div>

                </div>



            </main>

            <Footer language={actualLanguage} />

        </PayPalScriptProvider>
    )
}

export default BuyCreditsPage;
