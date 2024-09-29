import React from 'react';
import { Footer } from '@/components/ui/Footer';
import { Navbar } from '@/components/ui/Navbar';
import { useTranslations } from 'next-intl';

const ContactPage = () => {

    const navbari18n = useTranslations('Navbar');
    const footeri18n = useTranslations('Footer');
    const contacti18n = useTranslations('ContactPage');

    return (
        <>
            <Navbar
                changeLanguage={navbari18n("changeLanguage")}
                homeLink={navbari18n("homeLink")}
                productLink={navbari18n("productLink")}
                pricingLink={navbari18n("pricingLink")}
                accountLink={navbari18n("accountLink")}
            />
            <main className='px-[10%]'>
                <h1 className='text-3xl font-bold text-[#5712DF]'>{contacti18n("title")}</h1>
                <div className='mt-6'>
                    <h2 className='font-bold text-[#5712DF] text-opacity-80'>{contacti18n("method1")}</h2>
                    <p>{contacti18n("textMethod1")} <span className='font-bold'>contact@simpliterms.com</span></p>
                </div>
            </main>
            <Footer copywright={footeri18n("copywright")}
                supportTitle={footeri18n("supportTitle")}
                supportLink1={footeri18n("supportLink1")}
                supportLink2={footeri18n("supportLink2")}
                companyTitle={footeri18n("companyTitle")}
                companytLink1={footeri18n("companytLink1")}
                companytLink2={footeri18n("companytLink2")}
            />
        </>
    )
}

export default ContactPage;