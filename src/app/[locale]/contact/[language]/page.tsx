"use client"
import { Footer } from '@/components/ui/Footer';
import { Navbar } from '@/components/ui/Navbar';
import { useParams } from 'next/navigation';
import React from 'react';


const ContactPageLanguages = () => {

    const { language } = useParams();
    console.log(language);

    let texts = {
        contactHeader: "Contact Us",
        methodOne: "Email:",
        answerMethodOne: "You can contact us through the following email: ",
        contactMethodOne: "contact@simpliterms.com"
    };

    switch (language) {
        case "ru":
            texts = {
                contactHeader: "Свяжитесь с нами",
                methodOne: "Эл. почта:",
                answerMethodOne: "Вы можете связаться с нами по следующему адресу электронной почты: ",
                contactMethodOne: "contact@simpliterms.com"
            };
            break;
        case "zh":
            texts = {
                contactHeader: "联系我们",
                methodOne: "电子邮件：",
                answerMethodOne: "您可以通过以下电子邮件与我们联系：",
                contactMethodOne: "contact@simpliterms.com"
            };
            break;
        case "fr":
            texts = {
                contactHeader: "Contactez-nous",
                methodOne: "Email :",
                answerMethodOne: "Vous pouvez nous contacter par le biais de l'adresse e-mail suivante : ",
                contactMethodOne: "contact@simpliterms.com"
            };
            break;
        case "po":
            texts = {
                contactHeader: "Contate-nos",
                methodOne: "E-mail:",
                answerMethodOne: "Você pode nos contatar através do seguinte e-mail: ",
                contactMethodOne: "contact@simpliterms.com"
            };
            break;
        case "es":
            texts = {
                contactHeader: "Contáctenos",
                methodOne: "Correo electrónico:",
                answerMethodOne: "Puede contactarnos a través del siguiente correo electrónico: ",
                contactMethodOne: "contact@simpliterms.com"
            };
            break;
        case "ja":
            texts = {
                contactHeader: "お問い合わせ",
                methodOne: "Eメール：",
                answerMethodOne: "以下のEメールでお問い合わせいただけます：",
                contactMethodOne: "contact@simpliterms.com",
            };
            break;
        case "hi":
            texts = {
                contactHeader: "हमसे संपर्क करें",
                methodOne: "ईमेल:",
                answerMethodOne: "आप हमसे निम्नलिखित ईमेल के माध्यम से संपर्क कर सकते हैं: ",
                contactMethodOne: "contact@simpliterms.com"
            };
            break;
        default:
            break;
    }


    return (
        <>
            <Navbar language={language} />
            <main className='px-[10%]'>
                <h1 className='text-3xl font-bold text-[#5712DF]'>{texts.contactHeader}</h1>
                <div className='mt-6'>
                    <h2 className='font-bold text-[#5712DF] text-opacity-80'>{texts.methodOne}</h2>
                    <p>{texts.answerMethodOne} <span className='font-bold'>{texts.contactMethodOne}</span></p>
                </div>
            </main>
            <Footer language={language} />
        </>
    )
}

export default ContactPageLanguages;