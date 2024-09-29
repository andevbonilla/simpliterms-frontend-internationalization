"use client"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useState } from 'react'
import { Pricing } from './Pricing'
import { FreePricing } from "./FreePricing";
import { paypalClientId } from "@/helpers/url";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PricePage = ({ language }: any) => {

        let texts = {
                billedAnnually: "Billed Annually",
                billedMonthly: "Billed Monthly",
                planFreeDesc: "Ideal to see how the tool works",
                planBasicDesc: "Ideal for people who often use various pages and online services.",
                planProDesc: "Ideal for people who are constantly using new services and pages every day.",
                freeCharacteristic1: "0 Credits",
                freeCharacteristic2: "Access to 3 static summary per day",
                basicCharacteristic1: "10.000 Credits",
                basicCharacteristic2: "AI generated summaries",
                proCharacteristic1: "50.000 Credits",
                proCharacteristic2: "AI generated summaries",
                monthTranslation: "month"
        }

        switch (language) {
                case "en":
                        texts = {
                                billedAnnually: "Billed Annually",
                                billedMonthly: "Billed Monthly",
                                planFreeDesc: "Ideal to see how the tool works",
                                planBasicDesc: "Ideal for people who often use various pages and online services.",
                                planProDesc: "Ideal for people who are constantly using new services and pages every day.",
                                freeCharacteristic1: "0 Credits",
                                freeCharacteristic2: "Access to 3 static summaries per day",
                                basicCharacteristic1: "10,000 Credits",
                                basicCharacteristic2: "AI-generated summaries",
                                proCharacteristic1: "50,000 Credits",
                                proCharacteristic2: "AI-generated summaries",
                                monthTranslation: "month"
                        }
                        break;
                case "ru":
                        texts = {
                                billedAnnually: "Оплата ежегодно",
                                billedMonthly: "Оплата ежемесячно",
                                planFreeDesc: "Идеально, чтобы увидеть, как работает инструмент",
                                planBasicDesc: "Идеально для тех, кто часто использует различные страницы и онлайн-сервисы.",
                                planProDesc: "Идеально для тех, кто постоянно использует новые сервисы и страницы каждый день.",
                                freeCharacteristic1: "0 кредитов",
                                freeCharacteristic2: "Доступ к 3 статическим сводкам в день",
                                basicCharacteristic1: "10 000 кредитов",
                                basicCharacteristic2: "Искусственно-интеллектуально созданные сводки",
                                proCharacteristic1: "50 000 кредитов",
                                proCharacteristic2: "Искусственно-интеллектуально созданные сводки",
                                monthTranslation: "месяц"
                        }
                        break;
                case "zh":
                        texts = {
                                billedAnnually: "年度账单",
                                billedMonthly: "月度账单",
                                planFreeDesc: "理想的方式来了解工具的运作方式",
                                planBasicDesc: "适用于经常使用各种页面和在线服务的人。",
                                planProDesc: "适用于每天不断使用新服务和页面的人。",
                                freeCharacteristic1: "0积分",
                                freeCharacteristic2: "每天访问3个静态摘要",
                                basicCharacteristic1: "10,000积分",
                                basicCharacteristic2: "由人工智能生成的摘要",
                                proCharacteristic1: "50,000积分",
                                proCharacteristic2: "由人工智能生成的摘要",
                                monthTranslation: "月"
                        }
                        break;
                case "fr":
                        texts = {
                                billedAnnually: "Facturé Annuellement",
                                billedMonthly: "Facturé Mensuellement",
                                planFreeDesc: "Idéal pour voir comment l'outil fonctionne",
                                planBasicDesc: "Idéal pour les personnes qui utilisent fréquemment diverses pages et services en ligne.",
                                planProDesc: "Idéal pour les personnes qui utilisent constamment de nouveaux services et pages chaque jour.",
                                freeCharacteristic1: "0 Crédits",
                                freeCharacteristic2: "Accès à 3 résumés statiques par jour",
                                basicCharacteristic1: "10 000 Crédits",
                                basicCharacteristic2: "Résumés générés par l'IA",
                                proCharacteristic1: "50 000 Crédits",
                                proCharacteristic2: "Résumés générés par l'IA",
                                monthTranslation: "mois"
                        }
                        break;
                case "po":
                        texts = {
                                billedAnnually: "Faturado Anualmente",
                                billedMonthly: "Faturado Mensalmente",
                                planFreeDesc: "Ideal para ver como a ferramenta funciona",
                                planBasicDesc: "Ideal para pessoas que usam frequentemente várias páginas e serviços online.",
                                planProDesc: "Ideal para pessoas que estão constantemente usando novos serviços e páginas todos os dias.",
                                freeCharacteristic1: "0 Créditos",
                                freeCharacteristic2: "Acesso a 3 resumos estáticos por dia",
                                basicCharacteristic1: "10.000 Créditos",
                                basicCharacteristic2: "Resumos gerados por IA",
                                proCharacteristic1: "50.000 Créditos",
                                proCharacteristic2: "Resumos gerados por IA",
                                monthTranslation: "mês"
                        }
                        break;
                case "es":
                        texts = {
                                billedAnnually: "Facturado Anualmente",
                                billedMonthly: "Facturado Mensualmente",
                                planFreeDesc: "Ideal para ver cómo funciona la herramienta",
                                planBasicDesc: "Ideal para personas que utilizan con frecuencia diversas páginas y servicios en línea.",
                                planProDesc: "Ideal para personas que utilizan constantemente nuevos servicios y páginas todos los días.",
                                freeCharacteristic1: "0 Créditos",
                                freeCharacteristic2: "Acceso a 3 resúmenes estáticos al día",
                                basicCharacteristic1: "10.000 Créditos",
                                basicCharacteristic2: "Resúmenes generados por IA",
                                proCharacteristic1: "50.000 Créditos",
                                proCharacteristic2: "Resúmenes generados por IA",
                                monthTranslation: "mes"
                        }
                        break;
                case "ja":
                        texts = {
                                billedAnnually: "年次請求",
                                billedMonthly: "月次請求",
                                planFreeDesc: "ツールの動作を確認するのに最適",
                                planBasicDesc: "さまざまなページやオンラインサービスをよく利用する人に最適。",
                                planProDesc: "新しいサービスやページを毎日使い続ける人に最適。",
                                freeCharacteristic1: "0 クレジット",
                                freeCharacteristic2: "1日に3つの静的要約へのアクセス",
                                basicCharacteristic1: "10,000 クレジット",
                                basicCharacteristic2: "AI による生成された要約",
                                proCharacteristic1: "50,000 クレジット",
                                proCharacteristic2: "AI による生成された要約",
                                monthTranslation: "月"
                        }
                        break;
                case "hi":
                        texts = {
                                billedAnnually: "सालाना बिल",
                                billedMonthly: "मासिक बिल",
                                planFreeDesc: "उपकरण कैसे काम करता है यह देखने के लिए आदर्श है",
                                planBasicDesc: "इसे उन लोगों के लिए आदर्श माना जाता है जो अक्सर विभिन्न पृष्ठों और ऑनलाइन सेवाओं का उपयोग करते हैं।",
                                planProDesc: "हर दिन नए सेवाओं और पृष्ठों का निरंतर उपयोग करने वाले लोगों के लिए आदर्श है।",
                                freeCharacteristic1: "0 क्रेडिट",
                                freeCharacteristic2: "प्रतिदिन 3 स्थैतिक संक्षेपों तक पहुँच",
                                basicCharacteristic1: "10,000 क्रेडिट",
                                basicCharacteristic2: "ए.आई. द्वारा उत्पन्न संक्षेप",
                                proCharacteristic1: "50,000 क्रेडिट",
                                proCharacteristic2: "ए.आई. द्वारा उत्पन्न संक्षेप",
                                monthTranslation: "महीना"
                        }
                        break;
                default:
                        texts = {
                                billedAnnually: "Billed Annually",
                                billedMonthly: "Billed Monthly",
                                planFreeDesc: "Ideal to see how the tool works",
                                planBasicDesc: "Ideal for people who often use various pages and online services.",
                                planProDesc: "Ideal for people who are constantly using new services and pages every day.",
                                freeCharacteristic1: "0 Credits",
                                freeCharacteristic2: "Access to 3 static summaries per day",
                                basicCharacteristic1: "10,000 Credits",
                                basicCharacteristic2: "AI-generated summaries",
                                proCharacteristic1: "50,000 Credits",
                                proCharacteristic2: "AI-generated summaries",
                                monthTranslation: "month"
                        }
                        break;
        }


        const [billetForm, setBilletForm] = useState("annually");

        const changeBilletForm = () => {
                if (billetForm === 'annually') {
                        setBilletForm("monthly");
                } else {
                        setBilletForm("annually");
                }
        }

        return (
                <PayPalScriptProvider options={{ clientId: paypalClientId, vault: true, intent: 'subscription' }}>
                        <ToastContainer
                                pauseOnHover
                                theme="colored"
                                className={'absolute'}
                        />
                        <div className="flex flex-col justify-center items-center">

                                <div className="flex items-center my-5 justify-between">
                                        <button onClick={changeBilletForm} className={`${(billetForm === 'monthly') ? 'bg-[#5712DF] bg-opacity-30' : ''} text-[#5712DF] font-bold py-2 px-4 rounded-full`}>{texts.billedMonthly}</button>
                                        <button onClick={changeBilletForm} className={`${(billetForm === 'annually') ? 'bg-[#5712DF] bg-opacity-30' : ''} text-[#5712DF] font-bold py-2 px-4 rounded-full`}>{texts.billedAnnually}</button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                                        {(billetForm === "annually") && <>
                                                <FreePricing
                                                        month={texts.monthTranslation}
                                                        desc={texts.planFreeDesc}
                                                        type={"Free"}
                                                        price={"free"}
                                                        characteristics={[`${texts.freeCharacteristic1}`, `${texts.freeCharacteristic2}`]}
                                                />
                                                <Pricing
                                                        month={texts.monthTranslation}
                                                        billet={billetForm}
                                                        desc={texts.planBasicDesc}
                                                        type={"Basic"}
                                                        price={"$2.99"}
                                                        characteristics={[`${texts.basicCharacteristic1}`, `${texts.basicCharacteristic2}`]}
                                                />
                                                <Pricing
                                                        month={texts.monthTranslation}
                                                        billet={billetForm}
                                                        desc={texts.planProDesc}
                                                        type={"Pro"}
                                                        price={"$8.99"}
                                                        characteristics={[`${texts.proCharacteristic1}`, `${texts.proCharacteristic2}`]}
                                                />
                                        </>
                                        }

                                        {(billetForm === "monthly") && <>
                                                <FreePricing
                                                        month={texts.monthTranslation}
                                                        desc={texts.planFreeDesc}
                                                        type={"Free"}
                                                        price={"free"}
                                                        characteristics={[`${texts.freeCharacteristic1}`, `${texts.freeCharacteristic2}`]}
                                                />
                                                <Pricing
                                                        month={texts.monthTranslation}
                                                        billet={billetForm}
                                                        desc={texts.planBasicDesc}
                                                        type={"Basic"}
                                                        price={'$3.99'}
                                                        characteristics={[`${texts.basicCharacteristic1}`, `${texts.basicCharacteristic2}`]}
                                                />
                                                <Pricing
                                                        month={texts.monthTranslation}
                                                        billet={billetForm}
                                                        desc={texts.planProDesc}
                                                        type={"Pro"}
                                                        price={'$11.99'}
                                                        characteristics={[`${texts.proCharacteristic1}`, `${texts.proCharacteristic2}`]}
                                                />
                                        </>
                                        }


                                </div>
                        </div>
                </PayPalScriptProvider>

        )
}

export default PricePage;