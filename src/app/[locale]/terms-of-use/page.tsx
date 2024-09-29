import React from 'react';
import type { Metadata } from 'next';

import { Footer } from '@/components/ui/Footer';
import { Navbar } from '@/components/ui/Navbar';
import { useTranslations } from 'next-intl';

export const metadata: Metadata = {
  title: "Terms of Use"
}

const TermsOfUse = () => {

  const footeri18n = useTranslations('Footer');
  const navbari18n = useTranslations('Navbar');
  const termsi18n = useTranslations('TermsAndConditionsPage');

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
        <h1 className='font-bold text-3xl mt-4 text-[#5712DF]'>{termsi18n("termsAndConditionsTitle")}</h1>
        <p className='py-4'>{termsi18n("termsAndConditionsDescription")}</p>
        <h2 className='font-bold text-2xl text-[#5712DF]'>{termsi18n("licenceTitle")}</h2>
        <p className='py-4'>{termsi18n("licenceDescription")}</p>
        <h2 className='font-bold text-2xl text-[#5712DF]'>{termsi18n("unauthorizedUseTitle")}</h2>
        <p className='py-4'>{termsi18n("unauthorizedUseDescription")}</p>
        <h2 className='font-bold text-2xl text-[#5712DF]'>{termsi18n("propertyTitle")}</h2>
        <p className='py-4'>{termsi18n("propertyDescription")}</p>
        <h2 className='font-bold text-2xl text-[#5712DF]'>{termsi18n("refundAndGuaranteePolicyTitle")}</h2>
        <p className='py-4'>{termsi18n("refundAndGuaranteePolicyDescription")}</p>
      </main>
      <Footer
        copywright={footeri18n("copywright")}
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

export default TermsOfUse;
